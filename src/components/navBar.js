import React from "react";
import { websiteRoutes } from "routers/website";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "components";

export default () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className=' bg-teal-500 p-6 flex'>
      <div className='text-white     w-2/12 flex items-center'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
        </svg>
        <div className='font-semibold text-xl '>Tailwind CSS</div>
      </div>

      <div className=' w-10/12 flex  items-center justify-between '>
        <div>
          {websiteRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              children={t(route.t_key)}
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            />
          ))}
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
