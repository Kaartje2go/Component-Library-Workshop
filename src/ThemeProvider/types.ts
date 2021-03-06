import type { Theme } from '@emotion/react';

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ThemeConfig = DeepPartial<Theme>;
