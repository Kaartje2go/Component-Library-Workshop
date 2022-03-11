import { Theme } from '@emotion/react';

export const theme: Theme = {
    border: {
        style: {
            small: '1px solid #d8d8d8',
            medium: '2px solid #d8d8d8',
            large: '3px solid #d8d8d8',
            form: '2px solid #bfbfbf'
        },
        radius: {
            small: '4px',
            default: '6px',
            large: '8px',
            circle: '50%'
        }
    },
    colors: {
        base: {
            text: '#555555'
        },
        orange: {
            default: '#ff9b00',
            light: '#fff4e4',
            dark: '#ba6c12'
        },
        blue: {
            default: '#00b8ff',
            light: '#e6f8fd'
        },
        green: {
            default: '#87be3c',
            50: '#f6faf0',
            100: '#eaf2df',
            200: '#d1e7b3',
            300: '#bfdd95',
            400: '#acd278',
            500: '#9ac85a',
            600: '#87be3c',
            700: '#75a435',
            800: '#638a2d',
            900: '#517026'
        },
        magenta: {
            default: '#e21586',
            opaque: 'rgba(#e21586, .1)',
            50: '#fdeff8',
            100: '#f8d1ea',
            200: '#f4b2da',
            300: '#f093ca',
            400: '#ed73b8',
            500: '#e953a6',
            600: '#e63496',
            700: '#e21586',
            800: '#c51977',
            900: '#a81c69'
        },
        grey: {
            50: '#ffffff',
            75: '#f3f3f3',
            100: '#eaeaea',
            200: '#d8d8d8',
            300: '#bfbfbf',
            400: '#aaaaaa',
            500: '#979797',
            600: '#737373',
            700: '#555555',
            800: '#393838'
        },
        white: '#ffffff',
        black: '#000000',
        red: '#ed1c24'
    },
    font: {
        family: {
            default: '"Source Sans Pro", Arial, sans-serif'
        },
        weight: {
            normal: 'normal',
            semibold: 600,
            bold: 'bold'
        },
        size: {
            extraSmall: '.75rem',
            small: '.875rem',
            normal: '1rem',
            medium: '1.25rem',
            large: '1.5rem'
        }
    },
    mediaQuery: {
        xsOnly: '@media screen and (min-width: 414px) and (max-width: 767px)',
        xsMax: '@media screen and (max-width: 767px)',
        smMin: '@media screen and (min-width: 768px)',
        smOnly: '@media screen and (min-width: 768px) and (max-width: 991px)',
        smMax: '@media screen and (max-width: 991px)',
        mdMin: '@media screen and (min-width: 992px)',
        mdOnly: '@media screen and (min-width: 992px) and (max-width: 1199px)',
        mdMax: '@media screen and (max-width: 1199px)',
        lgMin: '@media screen and (min-width: 1200px)'
    }
};

export default theme;
