import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useChats from "../../hooks/useChats";
import Avatar from "../avatar/Avatar";
import SearchBox from "../searchBox/SearchBox";
import SingleChat from "../singleChat/SingleChat";
import "./Chats.scss";

const actives = [1, 2, 3, 4];

const Chats = () => {
  const { user } = useContext(AuthContext);
  const { data: chats } = useChats(user._id);

  return (
    <div className="chats">
      <div className="top">
        <h2>Chats</h2>
        <SearchBox />
      </div>
      <div className="center">
        <div className="active-users">
          {actives.map((a) => (
            <div className="user" key={a}>
              <Avatar
                src="https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg"
                isActive={true}
              />
              <p>Herdoy</p>
            </div>
          ))}
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
