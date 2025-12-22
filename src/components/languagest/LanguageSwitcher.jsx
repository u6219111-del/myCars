import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Languaege.css"
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    localStorage.setItem('language', lng);
  };

  return (
    <div className="flex items-center gap-2">
      <select 
        value={i18n.language} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="tiram text-black  bg-white border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option className='bt' value="en">En</option>
        <option className='bt' value="ru">Ru</option>
        <option className='bt' value="ky">Ky</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;