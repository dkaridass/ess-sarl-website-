import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`text-sm px-2 py-1 rounded transition-colors ${
          i18n.language === 'en' || i18n.language.startsWith('en')
            ? 'bg-[#30B4F2] text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('en')}
        aria-label={t('language.en')}
      >
        EN
      </button>
      <button
        className={`text-sm px-2 py-1 rounded transition-colors ${
          i18n.language === 'fr' || i18n.language.startsWith('fr')
            ? 'bg-[#30B4F2] text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => changeLanguage('fr')}
        aria-label={t('language.fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;