import { useContext, useEffect } from "react";
import Messages from "../components/messages/Messages";
import Sidebar from "../components/sidebar/Sidebar";
import Chats from "../pages/chats/Chats";
import { useMessageCollapse } from "../store";
import "./Layout.scss";
import { socket } from "../socket";
import { AuthContext } from "../contexts/AuthContext";

const Layout = () => {
  const isCollapse = useMessageCollapse((s) => s.isCollapse);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.emit("add-user", user);
  }, []);

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
