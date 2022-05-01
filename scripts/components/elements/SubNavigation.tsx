import styled from 'styled-components/macro';
import tw/* , { theme } */ from 'twin.macro';

const SubNavigation = styled.div`
    ${tw`w-full bg-neutral-700 shadow overflow-x-auto`};
    background-color: #000;

    & > div {
        ${tw`flex items-center text-sm mx-auto px-2`};
        max-width: 1200px;

        & > a, & > div {
            ${tw`inline-block py-3 px-4 text-neutral-300 no-underline whitespace-nowrap transition-all duration-150`};
            color: lightgray;

            &:not(:first-of-type) {
                ${tw`ml-2`};
                color: lightgray;
            }

            &:hover {
                ${tw`text-neutral-100`};
                color: #fff;
            }

            &:active, &.active {
                ${tw`text-neutral-100`};
                box-shadow: inset 0 -2px #0077ff;
                color: #0077ff;
            }
        }
    }
`;

export default SubNavigation;
