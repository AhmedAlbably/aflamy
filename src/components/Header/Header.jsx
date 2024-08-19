import callImages from "../../assets/callImages";
import "./Header.css";
const Header = ({ search }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          {" "}
          <img src={callImages.logo} alt="logo" className="logo-img" />
        </a>
      </div>
      <div className="search-input">
        <input
          type="text"
          placeholder=" ابحث عن الافلام والمسلسلات المفضله لديك هنا"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
