import { AiOutlineUser, AiOutlineWallet } from "react-icons/ai";

import { Nav } from "./nav";
export const Header = () => {
  return (
    <>
      <header className="header container-fluid">
        <h1>NFTs</h1>
        <div className="header-right">
          <a href="/">
            <AiOutlineUser size={20} /> Account
          </a>
          <a href="/">
            {" "}
            <AiOutlineWallet size={20} /> Wallet
          </a>
        </div>
      </header>

      <Nav />
      <hr />
    </>
  );
};
