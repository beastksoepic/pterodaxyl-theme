import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    body {
        ${tw`font-sans bg-neutral-800 text-neutral-200`};
        letter-spacing: 0.015em;
        color: #fff;
        background-color: #151515;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-neutral-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    code {
        background-color: #202020 !important;
        border: 1px solid #303030 !important;
        border-radius: 5px;
    }

    input[type=checkbox] {
        border-color: gray !important;
        background-color: rgba(255, 255, 255, 0.08) !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    }
    input[type=checkbox]:hover {
        border-color: rgb(252, 101, 0) !important;
        background-color: rgba(252, 101, 0, 0.1) !important;
    }
    input[type=checkbox]:checked {
        border-color: rgb(252, 101, 0) !important;
        background-color: rgba(252, 101, 0, 1) !important;
    }

    input:not([type="checkbox"]):not([type="command"]) {
        background-color: #202020 !important;
        border: 1px solid #303030 !important;
        border-radius: 5px !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    }
    input::placeholder {
        color: #a1a1a1 !important;
    }
    input:focus:not([type="command"]) {
        box-shadow: 0 0 0 2px #fd65005e !important;
    }

    textarea {
        background-color: #202020 !important;
        border: 1px solid #303030 !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    }
    textarea::placeholder {
        color: #a1a1a1 !important;
    }
    textarea:focus {
        box-shadow: 0 0 0 2px #fd65005e !important;
    }

    select {
        background-color: #202020 !important;
        border: 1px solid #303030 !important;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
    }
    select:focus {
        border: 1px solid #303030 !important;
        box-shadow: 0 0 0 2px #fd65005e !important;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        width: 7px;
    }
      
    /* Track */
    ::-webkit-scrollbar-track {
        background: inherit;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.35);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
