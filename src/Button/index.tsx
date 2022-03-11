import React from 'react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import type { ButtonProps } from './types';

const ButtonBase = styled('button')<ButtonProps>(({
    theme
}) => ({
    display: 'flex',
    padding: 0,
    fontSize: theme.font.size.small,
    color: theme.colors.base.text,
    lineHeight: '1.25'
}));

const Button: FC<ButtonProps> = props => {
    const {
        children,
        ...rest
    } = props;

    return (
        <ButtonBase
            className="button"
            { ...rest }
        >
            { children }
        </ButtonBase>
    );
};

Button.defaultProps = {

};

export default Button;
