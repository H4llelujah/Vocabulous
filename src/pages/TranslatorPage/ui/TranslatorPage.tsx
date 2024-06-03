import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface TranslatorPageProps {
    className?: string;
}

const TranslatorPage = ({ className }: TranslatorPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('TranslatorPage')}
        </div>
    );
};

export default TranslatorPage;
