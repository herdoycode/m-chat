import Avatar from "../avatar/Avatar";
import { BsArrowLeft } from "react-icons/bs";
import "./Messages.scss";
import { useMessageCollapse } from "../../store";

const Messages = () => {
  const handleCollapse = useMessageCollapse((s) => s.setCollapse);

  return (
    <div className="messages">
      <div className="top">
        <div className="user-info">
          <div className="arrow" onClick={handleCollapse}>
            <BsArrowLeft />
          </div>
          <div className="user-avatar">
            <Avatar
              src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
              isActive={false}
            />
          </div>
          <h3>Herdoy Almamun</h3>
        </div>
      </div>
      <div className="center">center</div>
      <div className="bottom">bottom</div>
    </div>
  );
};

export default Messages;
