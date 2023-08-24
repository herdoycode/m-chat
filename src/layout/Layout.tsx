import "./Layout.scss";
const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar-layout">Sidebar</div>
      <div className="outlet-layout">Outlet</div>
      <div className="messages-layout">Messages</div>
    </div>
  );
};

export default Layout;
