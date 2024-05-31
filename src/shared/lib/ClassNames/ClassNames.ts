export type Mods = Record<string, boolean | string | undefined>

export type AdditionalCls = Array<string | undefined>;

export function classNames(mainCls: string, mods: Mods = {}, additional: AdditionalCls = []): string {
    return [
        mainCls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, mod]) => Boolean(mod))
            .map(([className]) => className),
    ].join(' ');
}
