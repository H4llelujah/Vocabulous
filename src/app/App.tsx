import { Navbar } from 'widget/Navbar';
import { Counter } from 'features/Counter';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { LangSwitcher } from 'widget/LangSwitcher';
import { AppRouter } from './providers/RouteProvider';

export const App = () => {
    const { t, i18n } = useTranslation();

    console.log(i18n.language);

    return (
        <div className="app">
            <Suspense fallback={<div>{t('loading...')}</div>}>
                <Navbar />
                <Counter />
                <AppRouter />
                <LangSwitcher />
            </Suspense>
        </div>
    );
};
