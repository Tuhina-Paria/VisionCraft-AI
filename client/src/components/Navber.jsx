import { useContext, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";


const Navbar = () => {
 const { open, setOpen, showUserLogin, setShowUserLogin, user } =
  useContext(AppContext);

  const navigate=useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f0d2b]/90 backdrop-blur-lg ">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="p-[3px] rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 shadow-[0_0_25px_#a855f7]">
            <img
              src="/favicon_icon2.png"
              alt="VisionCraft Logo"
              className="w-8 h-8 rounded-xl object-cover"
            />
          </div>


          <h1 className="text-sm sm:text-base font-semibold text-white">
            VisionCraft<span className="text-purple-400"> AI</span>
          </h1>

        </Link>

        {/* Menu + Auth (Right side desktop) */}
        <div className="hidden md:flex items-center gap-8 text-white ml-auto">

          {/* Pages */}
          <Link className="hover:text-purple-400 transition" to="/">Home</Link>
          <Link onClick={() => navigate("/buy")} 
          className="hover:text-purple-400 transition">Buy Credits</Link>

          {/* Auth */}
          
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium text-sm hover:opacity-90 transition shadow-md shadow-purple-800/20"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <img src={assets.profile_icon} alt="profile_icon" className="w-9 cursor-pointer" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-50 text-black rounded pt-12">

            
              <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                <li className="px-2 py-1 cursor-pointer hover:bg-gray-100">
                  Logout
                </li>
              </ul>

  </div>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl ml-auto">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0E0B24]/95 border-t border-white/10">
          <ul className="flex flex-col text-white py-4 space-y-4 px-6">

            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/buy">Buy Credits</Link>

            {/* Auth */}
            <div className="flex gap-3 pt-2">
              {/* <Link onClick={() => setOpen(false)} className="px-4 py-2 border border-purple-500/50 rounded-md w-full text-center" to="/login">
                Login
              </Link> */}
               {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium text-sm hover:opacity-90 transition shadow-md shadow-purple-800/20"
            >
              Login
            </button>
          ) : (
             
                <li className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-medium text-sm hover:opacity-90 transition shadow-md shadow-purple-800/20">
                  Logout
                </li>
              


            
          )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 