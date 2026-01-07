import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {
    open,
    setOpen,
    showUserLogin,
    setShowUserLogin,
    user,
    logout,
    credit,
  } = useContext(AppContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0d2b]/80 backdrop-blur-xl border-b border-purple-500/20">
      
      {/* glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-16 bg-gradient-to-b from-purple-600/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-[3px] rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 shadow-[0_0_22px_rgba(168,85,247,0.7)] group-hover:scale-105 transition">
            <img src="/favicon_icon2.png" alt="logo" className="w-8 h-8 rounded-xl" />
          </div>
          <span className="text-white font-semibold">
            VisionCraft<span className="text-purple-400"> AI</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ml-auto text-sm text-white">

          {/* Nav Links with underline hover */}
          <Link to="/" className="relative group text-white/80 hover:text-white transition">
            Home
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {user && (
            <>
              <Link to="/gallery" className="relative group text-white/80 hover:text-white transition">
                My Images
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Credits display */}
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-purple-500/30">
                <img src={assets.credit_star} className="w-4" alt="credits" />
                <span className="text-sm">Credits: {credit}</span>
              </div>
            </>
          )}

          {/* Auth buttons or user dropdown */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-medium shadow"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-9 h-9 rounded-full cursor-pointer ring-2 ring-purple-500/40"
              />
              {/* Dropdown ONLY name + logout */}
              <div className="absolute right-0 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="bg-[#0f0d2b] border border-purple-500/20 rounded-xl p-2 text-sm shadow-xl">
                  <li className="px-4 py-2 text-white/70">Hi, {user.name}</li>
                  <li
                    onClick={logout}
                    className="px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer"
                  >
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
        <div className="md:hidden bg-[#0f0d2b]/95 border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white text-sm">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            {user && (
              <>
                <Link to="/gallery" onClick={() => setOpen(false)}>My Images</Link>
                <div className="flex items-center gap-2">
                  <img src={assets.credit_star} className="w-4" />
                  <span>Credits: {credit}</span>
                </div>
              </>
            )}

            {!user ? (
              <button
                onClick={() => {
                  setShowUserLogin(true);
                  setOpen(false);
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600"
              >
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
