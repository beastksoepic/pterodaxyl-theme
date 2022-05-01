import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded no-underline text-neutral-200 items-center bg-neutral-700 p-4 border border-transparent transition-colors duration-150 overflow-hidden`};
    
    ${props => props.$hoverable === true && `
        &:hover {
            border-color: #777777;
        }
    `};
    background-color: #151515;
    border: 1px solid #515151;
    border-radius: 5px;

    & .icon {
        ${tw`rounded-full bg-neutral-500 p-3`};
    }
`;
