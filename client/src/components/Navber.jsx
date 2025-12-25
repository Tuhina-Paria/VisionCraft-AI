import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { open, setOpen, showUserLogin, setShowUserLogin, user } =
    useContext(AppContext);

  const navigate = useNavigate();

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      bg-[#0f0d2b]/80 backdrop-blur-xl
      border-b border-purple-500/20
    ">

      {/* subtle glow */}
      <div className="
        absolute inset-x-0 top-0 -z-10 h-16
        bg-gradient-to-b from-purple-600/15 to-transparent
      " />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="
            p-[3px] rounded-xl
            bg-gradient-to-r from-purple-500 to-fuchsia-600
            shadow-[0_0_22px_rgba(168,85,247,0.7)]
            transition-transform duration-300
            group-hover:scale-105
          ">
            <img
              src="/favicon_icon2.png"
              alt="VisionCraft Logo"
              className="w-8 h-8 rounded-xl"
            />
          </div>

          <span className="text-white font-semibold tracking-tight">
            VisionCraft<span className="text-purple-400"> AI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 ml-auto text-sm text-white">

          {/* Links */}
          {[
            { label: "Home", to: "/" },
            { label: "Buy Credits", to: "/buy" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="
                relative group
                text-white/80 hover:text-white
                transition
              "
            >
              {item.label}
              <span className="
                absolute -bottom-1 left-0 h-[2px] w-0
                bg-gradient-to-r from-purple-500 to-fuchsia-500
                transition-all duration-300
                group-hover:w-full
              " />
            </Link>
          ))}

          {/* Auth */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="
                px-5 py-2 rounded-full
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-white font-medium
                hover:opacity-90
                transition
                shadow-[0_0_18px_rgba(168,85,247,0.4)]
              "
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="
                  w-9 h-9 rounded-full cursor-pointer
                  ring-2 ring-purple-500/40
                  transition group-hover:ring-purple-500
                "
              />

              {/* Dropdown */}
              <div className="
                absolute right-0 mt-3
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              ">
                <ul className="
                  bg-[#0f0d2b]
                  border border-purple-500/20
                  rounded-xl p-2
                  text-sm text-white
                  shadow-xl
                ">
                  <li className="
                    px-4 py-2 rounded-md
                    hover:bg-white/10 cursor-pointer
                  ">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden
          bg-[#0f0d2b]/95 backdrop-blur-xl
          border-t border-white/10
        ">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white text-sm">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/buy">Buy Credits</Link>

            {!user ? (
              <button
                onClick={() => setShowUserLogin(true)}
                className="
                  mt-2 px-5 py-2 rounded-full
                  bg-gradient-to-r from-purple-600 to-fuchsia-600
                  text-white font-medium
                "
              >
                Login
              </button>
            ) : (
              <button className="
                mt-2 px-5 py-2 rounded-full
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-white font-medium
              ">
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
