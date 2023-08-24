import "./SearchBox.scss";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="search-box">
      <BsSearch />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBox;
