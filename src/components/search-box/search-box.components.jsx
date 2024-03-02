import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
