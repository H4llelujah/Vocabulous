import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

export const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('MAIN_PAGE')}
        </div>
    );
};
