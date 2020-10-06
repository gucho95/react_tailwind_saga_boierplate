import React, { useState, useEffect } from "react";
import { Icons } from "components";
import { Link } from "react-router-dom";
import { adminRoutes } from "routers/admin";
import { useLocation } from "react-router-dom";

export default ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setCollapsed(false);
  }, [pathname]);

  return (
    <div className='h-screen top-0 left-0 flex items-start '>
      <div
        className={`transition-all   duration-300 ease-in-out  h-full overflow-hidden whitespace-no-wrap shadow-xl bg-teal-500  ${
          collapsed ? "w-64" : "w-0"
        }  `}
      >
        <ul className='flex flex-col text-center w-64 '>
          <li className='text-center flex justify-center my-4 '>
            <Icons.User className='rounded w-20 border-2  text-white p-2 shadow-xl' />
          </li>
          <li>
            <hr />
          </li>
          {adminRoutes.map(
            (route) =>
              route.isMenuItem && (
                <li
                  key={route.path}
                  className={`w-full py-2 text-white border-white  ${route.path === pathname ? "bg-black" : ""}`}
                >
                  <Link to={route.path} children={route.t_key} className='block' />
                </li>
              )
          )}
          <li
            onClick={onLogout}
            children='loguot'
            className='cursor-pointer w-full py-2  text-white hover:bg-black-200'
          />
        </ul>
      </div>
      <button className={`mt-4 ml-4 focus:outline-none `}>
        {collapsed ? (
          <Icons.CloseMenu className='w-10 p-1' onClick={() => setCollapsed(false)} />
        ) : (
          <Icons.OpenMenu className='w-10 p-1' onClick={() => setCollapsed(true)} />
        )}
      </button>
    </div>
  );
};
