import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ModuleDetailPageProps {
    className?: string;
}

const ModuleDetailPage = ({ className }: ModuleDetailPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('ModuleDetailPage')}
        </div>
    );
};

export default ModuleDetailPage;
