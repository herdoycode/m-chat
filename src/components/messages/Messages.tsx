import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsArrowLeft, BsEmojiSmile } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import Message from "../../entities/Message";
import useUser from "../../hooks/useUser";
import apiClient from "../../services/apiClient";
import { socket } from "../../socket";
import { useChatStore, useMessageCollapse } from "../../store";
import Avatar from "../avatar/Avatar";
import "./Messages.scss";

const Messages = () => {
  const messageRef = useRef<HTMLInputElement>(null);
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const handleCollapse = useMessageCollapse((s) => s.setCollapse);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedChatId = useChatStore((s) => s.selectedChatId);
  const friendId = useChatStore((s) => s.selectedFriendId);
  const { data: friend } = useUser(friendId);

  useEffect(() => {
    apiClient
      .get<Message[]>("/messages", {
        params: {
          chatId: selectedChatId,
        },
      })
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, [selectedChatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChatId]);

  useEffect(() => {
    socket.on("recieve-message", (message: Message) => {
      if (message.chatId !== selectedChatId) return;
      setMessages([...messages, message]);
    });
  });

  if (!selectedChatId)
    return (
      <div className="empty-messages">
        <h1>Please Select a chat</h1>
      </div>
    );

  return (
    <div className="messages">
      <div className="top">
        <div className="user-info">
          <div className="arrow" onClick={handleCollapse}>
            <BsArrowLeft />
          </div>
          <div className="user-avatar">
            <Avatar src={friend?.avatar!} isActive={false} />
          </div>
          <h3>{friend?.name}</h3>
        </div>
      </div>
      <div className="center">
        {messages?.map((message) => (
          <div
            className={message.sender === user._id ? "message own" : "message"}
            key={message._id}
          >
            <img src={friend?.avatar} alt="" />
            <div className="text">
              <p>{message.content}</p>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef}></div>
      </div>
      <div className="bottom">
        <div className="sent-box">
          <div className="input">
            <input
              ref={messageRef}
              type="text"
              placeholder="Type your messages"
            />
            <div className="emoji">
              <BsEmojiSmile />
            </div>
          </div>
          <button
            onClick={() => {
              if (messageRef.current && messageRef.current.value) {
                const message = {
                  receiverId: friend?._id,
                  chatId: selectedChatId,
                  sender: user?._id,
                  content: messageRef.current.value,
                };
                apiClient
                  .post("/messages", message)
                  .then((res) => {
                    socket.emit("send-message", {
                      ...res.data,
                      receiverId: friend?._id,
                    });
                    setMessages([...messages, res.data]);
                    if (messageRef.current) messageRef.current.value = "";
                  })
                  .catch((err) => console.log(err.message));
              }
            }}
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
