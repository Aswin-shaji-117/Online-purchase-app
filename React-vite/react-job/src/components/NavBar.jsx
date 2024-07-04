import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const user = localStorage.getItem('user')
  const logOut =(e)=>{
    localStorage.removeItem('user');
    Navigate('/')
  }
  const LinkClass = ({ isActive }) => 
     isActive || user
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
      <nav className="bg-green-700 border-b border-green-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link  to ="/" className="flex flex-shrink-0 items-center mr-4" ></Link>
              <img
                className="h-10 w-auto"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">Smart Shop</span>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={LinkClass}
                  >Home</NavLink>
              { user ? "": <NavLink
                  to="/signup"
                  className={LinkClass}
                  >Signup</NavLink>}
                {/* <NavLink
                  to="/login"
                  className={LinkClass}
                  >Login</NavLink> */}
                { user ?"": <NavLink
                  to="/login"
                  className={LinkClass}
                  >Login</NavLink>}
              { user ?<NavLink
                  to="/"
                  className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                  onClick={logOut}
                  >Logout</NavLink>:"" }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;