import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Exams', href: '#' },
    { name: 'Certificates', href: '#' },
    { name: 'About', href: '#' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'or', name: 'ଓଡ଼ିଆ' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
  ];

  // SVG Icons
  const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
  );

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );

  const DropdownIcon = () => (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <nav className="bg-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl">EduPlatform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center text-sm font-medium hover:bg-purple-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                <GlobeIcon />
                <span className="ml-1">English</span>
                <DropdownIcon />
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10">
                  {languages.map((lang, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-purple-100"
                    >
                      {lang.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-purple-700 text-white placeholder-purple-300 rounded-md py-1 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute left-3 top-2 text-purple-300">
                <SearchIcon />
              </div>
            </div>

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center text-sm font-medium hover:bg-purple-700 px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <UserIcon />
                  </div>
                  <span className="ml-2">Account</span>
                  <DropdownIcon />
                </button>
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">Settings</a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-purple-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toggleLogin}
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-1 px-4 rounded-md transition-colors duration-200"
              >
                Log in
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 pb-3 border-t border-purple-700">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center px-5">
                    <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <UserIcon />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium">User Name</div>
                      <div className="text-sm font-medium text-purple-300">user@example.com</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 px-2 space-y-1">
                    <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
                      Profile
                    </button>
                    <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700">
                      Settings
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="px-5 py-3">
                  <button
                    onClick={toggleLogin}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Log in
                  </button>
                </div>
              )}
            </div>
            
            <div className="px-5 py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-purple-700 text-white placeholder-purple-300 rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="absolute left-3 top-3 text-purple-300">
                  <SearchIcon />
                </div>
              </div>
            </div>
            
            <div className="px-5 py-3">
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center w-full text-sm font-medium hover:bg-purple-700 px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <GlobeIcon />
                  <span className="ml-2">Language: English</span>
                  <DropdownIcon />
                </button>
                {languageDropdownOpen && (
                  <div className="mt-2 w-full bg-white text-gray-800 rounded-md shadow-lg py-1 z-10">
                    {languages.map((lang, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-purple-100"
                      >
                        {lang.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;