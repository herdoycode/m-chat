import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillChatDotsFill, BsSun } from "react-icons/bs";
import { PiMessengerLogo, PiMoon, PiUserList } from "react-icons/pi";
import { AuthContext } from "../../contexts/AuthContext";
import { useThemeStore } from "../../store";
import Avatar from "../avatar/Avatar";
import "./Sidebar.scss";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
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
          <Avatar src={user.avatar} isActive={false} />
        </a>
      </div>
      <div className="auth">
        <div className="theme-icon">
          <samp onClick={toggleTheme}>
            {mode === "dark" ? <BsSun /> : <PiMoon />}
          </samp>
        </div>
        <Avatar src={user.avatar} isActive={false} />
      </div>
    </div>
  );
};

export default Sidebar;
