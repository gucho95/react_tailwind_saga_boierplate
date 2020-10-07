import React, { useState } from "react";
import { Icons, LanguageSwitcher } from "components";
import { useHistory } from "react-router-dom";
import { adminRoutes } from "routers/admin";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItem = ({ children, onClick, pathname, route }) => (
  <li
    className={`w-full whitespace-no-wrap truncate p-2 text-white transition-all duration-100 cursor-pointer hover:bg-white hover:text-black   ${
      route.path === pathname ? "bg-black" : ""
    }`}
    key={route.path}
    onClick={onClick}
    children={children}
  />
);

export default ({ onLogout }) => {
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  // uncomment this useEffect to close sidebar on url change
  // useEffect(() => {
  //   setCollapsed(false);
  // }, [pathname]);

  return (
    <div className='h-screen sticky top-0 left-0 flex items-start '>
      <div
        className={`transition-all   duration-300 ease-in-out  h-full overflow-hidden whitespace-no-wrap shadow-xl bg-teal-500  ${
          collapsed ? "w-64" : "w-0"
        }  `}
      >
        <ul className='flex flex-col text-center w-64 '>
          <li className='text-center flex justify-center my-4 '>
            <Icons.User className='rounded w-16 border-2  text-white p-2 shadow-xl' />
          </li>

          {adminRoutes.map((route) => {
            const isMenuItem = route.isMenuItem;
            const isLogoutItem = route.props?.logout;
            return isMenuItem ? (
              <MenuItem
                key={route.path}
                onClick={isLogoutItem ? onLogout : () => history.push(route.path)}
                children={t(route.t_key)}
                pathname={pathname}
                route={route}
              />
            ) : null;
          })}
        </ul>
        <div className='flex justify-center mt-16 w-64'>
          <LanguageSwitcher />
        </div>
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
