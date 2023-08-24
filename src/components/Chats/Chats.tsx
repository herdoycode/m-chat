import Avatar from "../avatar/Avatar";
import SearchBox from "../searchBox/SearchBox";
import SingleChat from "../singleChat/SingleChat";
import "./Chats.scss";

const actives = [1, 2, 3, 4, 5, 6, 7];

const Chats = () => {
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
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
        <SingleChat />
      </div>
    </div>
  );
};

export default Chats;
