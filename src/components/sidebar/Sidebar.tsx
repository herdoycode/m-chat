import { AiOutlineUser } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { PiMessengerLogo, PiMoon, PiUserList } from "react-icons/pi";
import Avatar from "../avatar/Avatar";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <a href="#">
          <BsFillChatDotsFill />
        </a>
      </div>
      <div className="nav">
        <a href="/" className="nav-item">
          <AiOutlineUser />
        </a>
        <a href="/" className="nav-item active">
          <PiMessengerLogo />
        </a>
        <a href="/" className="nav-item ">
          <PiUserList />
        </a>
        <a href="/" className="theme-icon">
          <PiMoon />
        </a>
        <a href="" className="auth-info">
          <Avatar
            src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
            isActive={false}
          />
        </a>
      </div>
      <div className="auth">
        <div className="theme-icon">
          <a href="/">
            <PiMoon />
          </a>
        </div>
        <Avatar
          src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
          isActive={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
