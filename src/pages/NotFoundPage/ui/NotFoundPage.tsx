import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('NOT_FOUND_PAGE')}
        </div>
    );
};
