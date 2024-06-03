import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InteractionIcon.module.scss';

interface InteractionIconProps {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const InteractionIcon = (props: InteractionIconProps) => {
    const { className, Icon } = props;
    return (
        <Icon className={classNames(cls.InteractionIcon, {}, [className])} />
    );
};
