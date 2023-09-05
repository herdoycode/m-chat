import { useContext, useEffect, useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import SearchBox from "../../components/searchBox/SearchBox";
import SingleChat from "../../components/singleChat/SingleChat";
import { AuthContext } from "../../contexts/AuthContext";
import User from "../../entities/User";
import useChats from "../../hooks/useChats";
import { socket } from "../../socket";
import "./Chats.scss";

const Chats = () => {
  const { user } = useContext(AuthContext);
  const { data: chats } = useChats(user._id);
  const [activeUsers, setActiveUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("get-users", (users) => setActiveUsers(users));
  }, []);

  const activeUsers_ = activeUsers.filter((u) => u._id !== user._id);

  return (
    <div className="chats">
      <div className="top">
        <h2>Chats</h2>
        <SearchBox />
      </div>
      <div className="center">
        <div className="active-users">
          {activeUsers_.length !== 0 ? (
            activeUsers_.map((user) => (
              <div className="user" key={user._id}>
                <Avatar src={user.avatar} isActive={true} />
                <p> {user.name} </p>
              </div>
            ))
          ) : (
            <p>No active users for chat!</p>
          )}
        </div>
        <h3>Recent</h3>
      </div>
      <div className="bottom">
        {chats?.map((chat) => (
          <SingleChat chat={chat} key={chat._id} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
