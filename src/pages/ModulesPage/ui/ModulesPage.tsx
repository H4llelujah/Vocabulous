import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ModulesPageProps {
    className?: string;
}

const ModulesPage = ({ className }: ModulesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('modulesPage')}
        </div>
    );
};

export default ModulesPage;
