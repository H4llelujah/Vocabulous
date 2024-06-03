import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface TopicsPageProps {
    className?: string;
}

const TopicsPage = ({ className }: TopicsPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('TopicsPage')}
        </div>
    );
};

export default TopicsPage;
