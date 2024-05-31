import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss';

export const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('ABOUT_PAGE')}
        </div>
    );
};
