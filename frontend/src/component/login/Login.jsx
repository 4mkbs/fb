import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('path_to_your_login_background_image')",
        }}
      >
        <div className="flex w-full max-w-[980px] p-5 box-border items-center">
          {/* Left section */}
          <div className="flex-1 pr-8 mt-[-80px]">
            <h1 className="text-[#1877f2] text-5xl font-bold font-helvetica">
              facebook
            </h1>
            <h2 className="text-[#1c1e21] text-2xl font-normal leading-[32px] mt-2">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          {/* Right section */}
          <div className="w-[396px]">
            <div className="bg-white p-5 shadow-lg rounded-xl">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="w-[92%] p-4 my-2 border border-[#dddfe2] rounded-lg text-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[92%] p-4 my-2 border border-[#dddfe2] rounded-lg text-lg"
              />
              <button className="w-full p-4 my-3 bg-[#1877f2] text-white rounded-lg text-xl hover:bg-[#165ec1]">
                Log in
              </button>
              <a
                href="#"
                className="block text-center my-3 text-[#1877f2] text-sm hover:underline"
              >
                Forgotten password?
              </a>
              <hr className="border-t border-[#dddfe2] my-5" />
              <button className="w-full p-4 bg-[#42b72a] text-white rounded-lg text-lg hover:bg-[#36a420]">
                Create new account
              </button>
            </div>
            <p className="text-center text-sm text-[#606770] mt-5">
              Create a Page for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer
        className="bg-cover bg-center py-5 text-[#606770]"
        style={{
          backgroundImage: "url('path_to_your_footer_background_image')",
        }}
      >
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col mb-5">
            {/* Language Links */}
            <div className="flex flex-wrap mb-3">
              <a href="#" className="mr-4 text-[#606770]">
                English (UK)
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                বাংলা
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                অসমীয়া
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                हिन्दी
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                नेपाली
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Bahasa Indonesia
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                العربية
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                中文(简体)
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Bahasa Melayu
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Español
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Português (Brasil)
              </a>
              <button className="text-[#385898] border-none bg-transparent cursor-pointer">
                +
              </button>
            </div>
            <hr className="border-t border-[#dddfe2]" />
            {/* Info Links */}
            <div className="flex flex-wrap mb-3">
              <a href="#" className="mr-4 text-[#606770]">
                Sign Up
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Log in
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Messenger
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Facebook Lite
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Video
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Places
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Games
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Marketplace
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Meta Pay
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Meta Store
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Meta Quest
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Meta AI
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Instagram
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Threads
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Fundraisers
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Services
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Voting Information Centre
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Privacy Policy
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Privacy Centre
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Groups
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                About
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Create ad
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Create Page
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Developers
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Careers
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Cookies
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                AdChoices
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Terms
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Help
              </a>
              <a href="#" className="mr-4 text-[#606770]">
                Contact uploading and non-users
              </a>
            </div>
          </div>
          <div className="text-center pt-3">
            <p>Meta © 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
