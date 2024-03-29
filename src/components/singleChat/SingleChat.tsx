import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Chat from "../../entities/Chat";
import useUser from "../../hooks/useUser";
import { useChatStore, useMessageCollapse } from "../../store";
import Avatar from "../avatar/Avatar";
import "./SingleChat.scss";

interface Props {
  chat: Chat;
}

const SingleChat = ({ chat }: Props) => {
  const setChatId = useChatStore((s) => s.setChatId);
  const setFriendId = useChatStore((s) => s.setFriendId);
  const { user } = useContext(AuthContext);

  const friendId = chat.users.find((c) => c !== user._id) as string;

  const { data: friend } = useUser(friendId);

  const handleCollapse = useMessageCollapse((s) => s.setCollapse);

  const renderLastMessage = (message: string) => {
    if (!message) return "Say Hello";
    if (message.length >= 32) return message.slice(0, 31);
    return message;
  };

  return (
    <div
      onClick={() => {
        setChatId(chat._id);
        const friendId = chat.users.find((c) => c !== user._id) as string;
        setFriendId(friendId);
        handleCollapse();
      }}
      className="single-chat"
    >
      <div className="friend-info">
        <div className="friend-avatar">
          <Avatar src={friend?.avatar!} isActive={true} />
        </div>
        <div className="friend-data">
          <h4>{friend?.name}</h4>
          <p> {renderLastMessage(chat.latestMessage)} </p>
        </div>
      </div>
      <div className="time">
        <p> {moment(chat.updatedAt).format("LT")} </p>
      </div>
    </div>
  );
};

export default SingleChat;
