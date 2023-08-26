import { useContext, useEffect, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsArrowLeft, BsEmojiSmile } from "react-icons/bs";
import { useChatStore, useMessageCollapse } from "../../store";
import Avatar from "../avatar/Avatar";
import "./Messages.scss";
import useMessages from "../../hooks/useMessages";
import useUser from "../../hooks/useUser";
import { AuthContext } from "../../contexts/AuthContext";

const Messages = () => {
  const { user } = useContext(AuthContext);
  const handleCollapse = useMessageCollapse((s) => s.setCollapse);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedChatId = useChatStore((s) => s.selectedChatId);
  const friendId = useChatStore((s) => s.selectedFriendId);
  const { data: messages } = useMessages(selectedChatId);
  const { data: friend } = useUser(friendId);

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChatId]);

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
          <h3>Herdoy Almamun</h3>
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
            <input type="text" placeholder="Type your messages" />
            <div className="emoji">
              <BsEmojiSmile />
            </div>
          </div>
          <button>
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
