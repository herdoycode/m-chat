import { BsSearch } from "react-icons/bs";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search-box">
      <BsSearch />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBox;
