export type Mods = Record<string, boolean | string | undefined>

export type AdditionalCls = Array<string | undefined>;

export function classNames(mainCls: string, mods: Mods = {}, additional: AdditionalCls = []): string {
    return [
        mainCls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
