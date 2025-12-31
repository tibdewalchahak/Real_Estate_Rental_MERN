import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetchNotifications = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  // ✅ fetch notifications safely
  useEffect(() => {
    if (currentUser) {
      fetchNotifications();
    }
  }, [currentUser, fetchNotifications]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <span>Rent&Buy</span>
        </Link>
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="right">
        {/* DESKTOP */}
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="Avatar" />
            <span>{currentUser.username}</span>

            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        {/* MOBILE ICON */}
        <div className="menuIcon" onClick={() => setOpen((p) => !p)}>
          <img src="/menu.png" alt="Menu" />
        </div>

        {/* MOBILE MENU */}
        <div className={`menu ${open ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          {currentUser ? (
            <>
              <Link to="/profile" onClick={closeMenu}>Profile</Link>
              <Link to="/add" onClick={closeMenu}>Create Post</Link>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMenu}>Sign in</Link>
              <Link to="/register" onClick={closeMenu}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
