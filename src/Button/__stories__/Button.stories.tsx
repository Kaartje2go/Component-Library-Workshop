import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { ButtonProps } from '../types';
import Button from '..';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text'
            }
        }
    },
    args: {
        children: 'This is a button'
    }
};

export default meta;

const Template: Story<ButtonProps> = args => (
    <Button { ...args } />
);

// Default
export const Default = Template.bind({});
Default.args = {};
