import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import tw from 'twin.macro';
import isEqual from 'react-fast-compare';

interface Props {
    icon?: IconProp;
    title: string | React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

const TitledGreyBox = ({ icon, title, children, className }: Props) => (
    <div css={tw`rounded shadow-md bg-neutral-700`} className={className}
        style={{
            border: '1px solid rgba(255, 255, 255, 0.255)',
            borderRadius: '5px',
            backgroundColor: '#151515',
        }}
    >
        <div css={tw`bg-neutral-900 rounded-t p-3`}
            style={{
                backgroundColor: '#151515',
                paddingBottom: '0px',
            }}
        >
            {typeof title === 'string' ?
                <p css={tw`text-sm uppercase`} style={{ color: '#fff', textAlign: 'center' }}>
                    {icon && <FontAwesomeIcon icon={icon} css={tw`mr-2`}/>}{title}
                </p>
                :
                title
            }
        </div>
        <div css={tw`p-3`}>
            {children}
        </div>
    </div>
);

export default memo(TitledGreyBox, isEqual);
