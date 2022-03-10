// Vendors
import React, { FunctionComponent, useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import merge from 'lodash.merge';

// Typings
import type { Theme } from '@emotion/react';
import type { ThemeConfig } from './types';

// Theme
import defaultTheme from './theme';

const ThemeProvider: FunctionComponent<{ theme?: ThemeConfig }> = ({
    children,
    theme
}) => {
    const emotionTheme = useMemo<Theme>(
        () => merge<Theme, ThemeConfig>(defaultTheme, theme || {}),
        [theme]
    );

    return (
        <EmotionThemeProvider theme={ emotionTheme }>
            { children }
        </EmotionThemeProvider>
    );
};

export default ThemeProvider;
