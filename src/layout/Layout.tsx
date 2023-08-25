import Chats from "../components/chats/Chats";
import Messages from "../components/messages/Messages";
import Sidebar from "../components/sidebar/Sidebar";
import { useMessageCollapse } from "../store";
import "./Layout.scss";

const Layout = () => {
  const isCollapse = useMessageCollapse((s) => s.isCollapse);

  return (
    <div className="layout">
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="outlet-layout">
        <Chats />
      </div>
      <div
        className={isCollapse ? "messages-layout active" : "messages-layout"}
      >
        <Messages />
      </div>
    </div>
  );
};

export default Layout;
