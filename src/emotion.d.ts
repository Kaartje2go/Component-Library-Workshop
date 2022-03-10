import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        border: {
            style: {
                small: string;
                medium: string;
                large: string;
                form: string;
            };
            radius: {
                small: string;
                default: string;
                large: string;
                circle: string;
            };
        };
        colors: {
            base: {
                text: Color;
            };
            orange: {
                default: Color;
                light: Color;
                dark: Color;
            };
            blue: {
                default: Color;
                light: Color;
            };
            green: {
                default: Color;
                50: Color;
                100: Color;
                200: Color;
                300: Color;
                400: Color;
                500: Color;
                600: Color;
                700: Color;
                800: Color;
                900: Color;
            };
            magenta: {
                default: Color;
                opaque: Color;
                50: Color;
                100: Color;
                200: Color;
                300: Color;
                400: Color;
                500: Color;
                600: Color;
                700: Color;
                800: Color;
                900: Color;
            };
            grey: {
                50: Color;
                75: Color;
                100: Color;
                200: Color;
                300: Color;
                400: Color;
                500: Color;
                600: Color;
                700: Color;
                800: Color;
            };
            white: Color;
            black: Color;
            red: Color;
        };
        font: {
            family: {
                default: string;
            };
            weight: {
                normal: FontWeight | string | number;
                semibold: FontWeight | string | number;
                bold: FontWeight | string | number;
            };
            size: {
                extraSmall: string;
                small: string;
                normal: string;
                medium: string;
                large: string;
            };
        };
        mediaQuery: {
            xsOnly: string;
            xsMax: string;
            smMin: string;
            smOnly: string;
            smMax: string;
            mdMin: string;
            mdOnly: string;
            mdMax: string;
            lgMin: string;
        };
    }
}
