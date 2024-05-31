import { AdditionalCls, Mods, classNames } from './classNames';

describe('classNames', () => {
    test('only mainClass', () => {
        const result = classNames('MainClass');
        expect(result).toBe('MainClass');
    });
    test('main class and mods', () => {
        const mods: Mods = {
            show: true,
            not_show: false,
        };

        const result = classNames('MainClass', mods);
        expect(result).toBe('MainClass show');
    });

    test('main class and additional classes', () => {
        const additional: AdditionalCls = [
            'test',
            'test2',
            'test3',
        ];
        const result = classNames('MainClass', {}, additional);
        expect(result).toBe('MainClass test test2 test3');
    });

    test('main class, mods and additional classes', () => {
        const mods: Mods = {
            show: true,
            not_show: false,
            shadows: false,
            red: true,
        };
        const additional: AdditionalCls = [
            'right',
            'top',
        ];
        const result = classNames('MainClass', mods, additional);
        expect(result).toBe('MainClass right top show red');
    });
});
