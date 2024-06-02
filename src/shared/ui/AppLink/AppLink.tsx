import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, children, ...otherProps
    } = props;

    return (
        <Link
            className={classNames('test2', {}, [className])}
            to={to}
        >
            {children}
        </Link>
    );
});
