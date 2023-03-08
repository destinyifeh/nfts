import {
  AiOutlineFolder,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineNotification,
} from "react-icons/ai";
export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            {" "}
            <a href="/">
              <AiOutlineHome size={20} style={{ paddingRight: 5 }} />
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="/">
              <AiOutlineFolder size={20} style={{ paddingRight: 5 }} />{" "}
              Collections
            </a>
          </li>
          <li>
            {" "}
            <a href="/">
              <AiOutlineInfoCircle size={20} style={{ paddingRight: 5 }} />{" "}
              Guides
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineNotification size={20} style={{ paddingRight: 5 }} />{" "}
              Blog
            </a>
          </li>
        </ul>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search nft, type and hit the enter key"
          />
        </div>
      </nav>
    </>
  );
};
