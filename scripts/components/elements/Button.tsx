import React from 'react';
import styled, { css } from 'styled-components/macro';
import tw from 'twin.macro';
import Spinner from '@/components/elements/Spinner';

interface Props {
    isLoading?: boolean;
    size?: 'xsmall' | 'small' | 'large' | 'xlarge';
    color?: 'green' | 'red' | 'primary' | 'grey';
    isSecondary?: boolean;
}

const ButtonStyle = styled.button<Omit<Props, 'isLoading'>>`
    ${tw`relative inline-block rounded p-2 uppercase tracking-wide text-sm transition-all duration-150 border`};
    
    ${props => (!props.color || props.color === 'primary') && css<Props>`
        border-color: #fd6400 !important;
        background-color: #fd6400 !important;
        color: #fff !important;
        
        &:hover:not(:disabled) {
            border-color: #ca5100 !important;
            background-color: #ca5100 !important;
        }

        &:active:not(:disabled) {
            border-color: #fd6400 !important;
            background-color: #fd6400 !important;
        }
        
        ${props => props.isSecondary && css`
            background-color: inherit !important;
            border-color: #fd6400 !important;
            color: #fd6400 !important;
            &:hover:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                color: #fff !important;
                background-color: #fd6400 !important;
                border-color: #fd6400 !important;
            }
            &:active:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                background-color: #ca5100 !important;
                border-color: #ca5100 !important;
                color: #fff !important;
            }
        `};
    `};
    
    ${props => props.color === 'grey' && css<Props>`
        ${tw`border-neutral-600 bg-neutral-500 text-neutral-50`};
        border-color: darkgray !important;
        background-color: darkgray !important;
        color: #fff !important;
        
        &:hover:not(:disabled) {
            border-color: gray !important;
            background-color: gray !important;
        }
        &:active:not(:disabled) {
            border-color: darkgray !important;
            background-color: darkgray !important;
        }

        ${props => props.isSecondary && css`
            background-color: inherit !important;
            border-color: darkgray !important;
            color: darkgray !important;
            &:hover:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                color: #000 !important;
                background-color: lightgray !important;
                border-color: lightgray !important;
            }
            &:active:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                background-color: gray !important;
                border-color: gray !important;
                color: #fff !important;
            }
        `};
    `};
    
    ${props => props.color === 'green' && css<Props>`
        ${tw`border-green-600 bg-green-500 text-green-50`};
        
        &:hover:not(:disabled) {
            ${tw`bg-green-600 border-green-700`};
        }
        
        ${props => props.isSecondary && css`
            border-color: #189a1c !important;
            color: #189a1c !important;
            &:hover:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                color: #fff !important;
                background-color: #189a1c !important;
                border-color: #189a1c !important;
            }
            &:active:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                background-color: #106612 !important;
                border-color: #106612 !important;
                color: #fff !important;
            }
        `};
    `};
    
    ${props => props.color === 'red' && css<Props>`
        ${tw`border-red-600 bg-red-500 text-red-50`};
        
        &:hover:not(:disabled) {
            ${tw`bg-red-600 border-red-700`};
        }
        
        ${props => props.isSecondary && css`
            border-color: #e12d39 !important;
            color: #e12d39 !important;
            &:hover:not(:disabled) {
                color: #fff !important;
                background-color: #e12d39 !important;
            }
            &:active:not(:disabled) {
                ${tw`bg-red-600 border-red-700`};
                background-color: #ae222c !important;
                border-color: #ae222c !important;
                color: #fff !important;
            }
        `};
    `};
    
    ${props => props.size === 'xsmall' && tw`px-2 py-1 text-xs`};
    ${props => (!props.size || props.size === 'small') && tw`px-4 py-2`};
    ${props => props.size === 'large' && tw`p-4 text-sm`};
    ${props => props.size === 'xlarge' && tw`p-4 w-full`};
    
    ${props => props.isSecondary && css<Props>`
        ${tw`border-neutral-600 bg-transparent text-neutral-200`};
        
        &:hover:not(:disabled) {
            border-color: darkgray;
            color: darkgray;
            &:hover:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                color: #fff;
                background-color: #fd6400;
                border-color: #fd6400;
            }
            &:active:not(:disabled) {
                ${tw`bg-green-600 border-green-700`};
                background-color: #ca5100;
                border-color: #ca5100;
                color: #fff;
            }

            ${props => props.color === 'red' && tw`bg-red-500 border-red-600 text-red-50`};
            ${props => props.color === 'primary' && tw`bg-primary-500 border-primary-600 text-primary-50`};
            ${props => props.color === 'green' && tw`bg-green-500 border-green-600 text-green-50`};
        }
    `};
    
    &:disabled { opacity: 0.55; cursor: default }
`;

type ComponentProps = Omit<JSX.IntrinsicElements['button'], 'ref' | keyof Props> & Props;

const Button: React.FC<ComponentProps> = ({ children, isLoading, ...props }) => (
    <ButtonStyle {...props}>
        {isLoading &&
        <div css={tw`flex absolute justify-center items-center w-full h-full left-0 top-0`}>
            <Spinner size={'small'}/>
        </div>
        }
        <span css={isLoading ? tw`text-transparent` : undefined}>
            {children}
        </span>
    </ButtonStyle>
);

type LinkProps = Omit<JSX.IntrinsicElements['a'], 'ref' | keyof Props> & Props;

const LinkButton: React.FC<LinkProps> = props => <ButtonStyle as={'a'} {...props}/>;

export { LinkButton, ButtonStyle };
export default Button;
