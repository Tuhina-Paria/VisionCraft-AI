import { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {
    open,
    setOpen,
    setShowUserLogin,
    user,
    logout,
    credit,
  } = useContext(AppContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">

      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-16 bg-[#000000]" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

        {/* Logo */}
        <Link to="/" className="group">
  <h1 className="text-white text-xl font-bold tracking-wide">
    VisionCraft.AI
  </h1>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ml-auto text-sm text-[#F8FAFC]">

          {/* Home */}
          <Link
            to="/"
            className="relative group text-white font-semibold transition"
          >
            Home
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-whute transition-all duration-300 group-hover:w-full" />
          </Link>

          {user && (
            <>
              {/* Gallery */}
              <Link
                to="/gallery"
                className="relative group text-white font-semibold transition"
              >
                My Images
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Credits */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black">
                <img
                  src={assets.credit_star}
                  className="w-4"
                  alt="credits"
                />
                <span className="text-white">
                  Credits: {credit}
                </span>
              </div>
            </>
          )}

          {/* Auth */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-5 py-2 rounded-full bg-white text-black font-medium shadow-lg hover:scale-105 transition"
            >
              Log in
            </button>
          ) : (
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-9 h-9 rounded-full cursor-pointer ring-1 ring-white/20"
              />

              {/* Dropdown */}
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <ul className="bg-black border border-white/10 rounded-xl p-2 text-sm shadow-xl min-w-[160px]">
                  <li className="px-4 py-2 text-white">
                    Hi, {user.name}
                  </li>

                  <li
                    onClick={logout}
                    className="px-4 py-2 rounded-md text-white hover:bg-white/10 cursor-pointer"
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
          className="ml-auto md:hidden text-[#F8FAFC] text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B1020]/95 border-t border-[#6366F1]/20">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white text-sm">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            {user && (
              <>
                <Link to="/gallery" onClick={() => setOpen(false)}>
                  My Images
                </Link>

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
                className="px-5 py-2 rounded-full bg-white text-black"
              >
                Log in
              </button>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="px-5 py-2 rounded-full bg-white text-black"
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