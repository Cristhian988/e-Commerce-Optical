// import React from "react";

export default function LoginSignup() {
  return (
    <div className="container pt-16 ">
      <div className=" py-12 flex flex-col items-center justify-center">
        <div className="w-full lg:w-[560px] border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-primary">
                Forgot Password?
              </a>
            </div>
            <div className="mb-4">
              <button className="w-full bg-primary text-white py-2 px-4">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-gray-700">Don`t have an account?</span>
            <button className="text-primary ml-2">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
