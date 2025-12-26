import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowUserLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-4 animate-fadeIn">

      {/* Outer Glow */}
      <div className="relative w-full max-w-sm">
        <div className="
          absolute -inset-1 rounded-3xl
          bg-gradient-to-r from-purple-500/40 to-fuchsia-500/40
          blur-2xl
        " />

        {/* Card */}
        <form className="
          relative rounded-3xl
          bg-white/85 backdrop-blur-2xl
          p-8
          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
          border border-white/40
        ">

          {/* Top Glow */}
          <div className="
            absolute -top-10 left-1/2 -translate-x-1/2
            w-32 h-32
            bg-purple-500/20
            rounded-full
            blur-3xl
          " />

          {/* Close */}
          <button
            type="button"
            onClick={() => setShowUserLogin(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition"
          >
            <img src={assets.cross_icon} alt="close" className="w-3 opacity-80" />
          </button>

          {/* Header */}
          <div className="relative text-center">
            <h1 className="text-2xl font-semibold text-black">
              {state === "Login" ? "Welcome back" : "Create account"}
            </h1>
            <p className="mt-1 text-sm text-neutral-600">
              {state === "Login"
                ? "Sign in to continue"
                : "Start creating AI images"}
            </p>
          </div>

          {/* Inputs */}
          <div className="mt-8 space-y-4">

            {/* Full Name */}
            {state !== "Login" && (
              <div className="
                group flex items-center gap-3
                rounded-full border border-neutral-300
                px-5 py-3
                bg-white/70
                hover:bg-white/90
                focus-within:border-purple-600
                focus-within:ring-2 focus-within:ring-purple-500/30
                transition-all duration-300
              ">
                <img src={assets.user_icon} className="w-4 opacity-90" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent outline-none text-sm text-black placeholder:text-neutral-500"
                />
              </div>
            )}

            {/* Email */}
            <div className="
              group flex items-center gap-3
              rounded-full border border-neutral-300
              px-5 py-3
              bg-white/70
              hover:bg-white/90
              focus-within:border-purple-600
              focus-within:ring-2 focus-within:ring-purple-500/30
              transition-all duration-300
            ">
              <img src={assets.email_icon} className="w-4 opacity-90" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-neutral-500"
              />
            </div>

            {/* Password */}
            <div className="
              group flex items-center gap-3
              rounded-full border border-neutral-300
              px-5 py-3
              bg-white/70
              hover:bg-white/90
              focus-within:border-purple-600
              focus-within:ring-2 focus-within:ring-purple-500/30
              transition-all duration-300
            ">
              <img src={assets.lock_icon} className="w-4 opacity-90" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-sm text-black placeholder:text-neutral-500"
              />
            </div>
          </div>

          {/* Forgot */}
          {state === "Login" && (
            <p className="mt-3 text-right text-xs text-purple-600 cursor-pointer hover:underline">
              Forgot password?
            </p>
          )}

          {/* CTA */}
          <button
            type="submit"
            className="
              mt-7 w-full py-3.5 rounded-full
              bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600
              text-white font-semibold tracking-wide
              shadow-[0_20px_50px_rgba(168,85,247,0.6)]
              hover:scale-[1.03]
              active:scale-[0.96]
              transition-all duration-300
            "
          >
            {state === "Login" ? "Login" : "Create account"}
          </button>

          {/* Switch */}
          <p className="mt-6 text-center text-sm text-neutral-700">
            {state === "Login" ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="relative text-purple-600 font-medium cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all"
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="relative text-purple-600 font-medium cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 hover:after:w-full after:transition-all"
                >
                  Login
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
