import Avatar from "../avatar/Avatar";
import "./SingleChat.scss";

const SingleChat = () => {
  return (
    <div className="single-chat">
      <div className="friend-info">
        <div className="friend-avatar">
          <Avatar
            src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
            isActive={true}
          />
        </div>
        <div className="friend-data">
          <h4>Herdoy Almamun</h4>
          <p>This is last</p>
        </div>
      </div>
      <div className="time">
        <p>1:23 AM</p>
      </div>
    </div>
  );
};

export default SingleChat;
