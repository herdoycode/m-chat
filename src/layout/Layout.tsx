import Chats from "../components/chats/Chats";
import Messages from "../components/messages/Messages";
import Sidebar from "../components/sidebar/Sidebar";
import "./Layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="outlet-layout">
        <Chats />
      </div>
      <div className="messages-layout">
        <Messages />
      </div>
    </div>
  );
};

export default Layout;
