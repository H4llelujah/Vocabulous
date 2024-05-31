import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue((prev) => prev + 1);
    };

    const decriment = () => {
        setValue((prev) => prev - 1);
    };
    return (
        <div>
            {value}
            <button type="button" className={cls.btn} onClick={increment}>+</button>
            <button type="button" onClick={decriment}>-</button>
        </div>
    );
};
