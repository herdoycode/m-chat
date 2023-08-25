import { AiOutlineUser } from "react-icons/ai";
import { BsFillChatDotsFill, BsSun } from "react-icons/bs";
import { PiMessengerLogo, PiMoon, PiUserList } from "react-icons/pi";
import Avatar from "../avatar/Avatar";
import "./Sidebar.scss";
import { useThemeStore } from "../../store";

const Sidebar = () => {
  const toggleTheme = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);

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
        <span onClick={toggleTheme} className="theme-icon">
          {mode === "dark" ? <BsSun /> : <PiMoon />}
        </span>
        <a href="" className="auth-info">
          <Avatar
            src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
            isActive={false}
          />
        </a>
      </div>
      <div className="auth">
        <div className="theme-icon">
          <samp onClick={toggleTheme}>
            {mode === "dark" ? <BsSun /> : <PiMoon />}
          </samp>
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
