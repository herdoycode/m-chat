import { useEffect } from "react";
import Chats from "../components/chats/Chats";
import Messages from "../components/messages/Messages";
import Sidebar from "../components/sidebar/Sidebar";
import { useMessageCollapse, useThemeStore } from "../store";
import "./Layout.scss";
const Layout = () => {
  const mode = useThemeStore((s) => s.mode);
  const isCollapse = useMessageCollapse((s) => s.isCollapse);

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", mode);
  }, [mode]);

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
