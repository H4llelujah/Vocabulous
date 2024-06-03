import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface TestCreationPageProps {
    className?: string;
}

const TestCreationPage = ({ className }: TestCreationPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('TestCreationPage')}
        </div>
    );
};

export default TestCreationPage;
