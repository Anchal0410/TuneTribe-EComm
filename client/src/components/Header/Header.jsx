import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { PiCompassRoseLight } from "react-icons/pi";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

const Header = () => {
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const clicked = () => {
    setShowCart(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/category/1")}>Categories</li>
            <li onClick={() => navigate("/about")}>About</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            TuneTribe.
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon">
              <CgShoppingCart onClick={() => setShowCart(true)} />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
