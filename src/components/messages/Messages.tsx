import { BsArrowLeft, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useMessageCollapse } from "../../store";
import Avatar from "../avatar/Avatar";
import "./Messages.scss";

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
      <div className="center">
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
        <div className="message own">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            veniam pariatur cumque deserunt,
          </p>
        </div>
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
