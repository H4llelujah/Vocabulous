import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

enum Language {
    RU = 'ru',
    EN = 'en',
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const changeLang = () => {
        if (i18n.language === Language.RU) {
            i18n.changeLanguage(Language.EN);
        } else {
            i18n.changeLanguage(Language.RU);
        }
    };

    return (
        <button onClick={changeLang} type="button">
            {i18n.language}
        </button>
    );
};
