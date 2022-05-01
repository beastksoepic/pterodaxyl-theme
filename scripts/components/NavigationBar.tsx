import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLayerGroup, faSignOutAlt , faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import tw/* , { theme } */ from 'twin.macro';
import styled from 'styled-components/macro';
import http from '@/api/http';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import { useState } from 'react';
import FyreBlitz from '@/assets/images/FyreBlitz.svg';

const Navigation = styled.div`
    ${tw`w-full bg-neutral-900 overflow-x-auto`};
    background-color: #000;
    
    & > div {
        ${tw`mx-auto w-full flex items-center`};
    }
    
    & #logo {
        ${tw`flex-1`};
        
        & > a {
            ${tw`text-2xl font-header px-4 no-underline text-neutral-200 hover:text-neutral-100 transition-colors duration-150`};
            color: #fff;
        }
    }
`;

const RightNavigation = styled.div`
    ${tw`flex h-full items-center justify-center`};
    
    & > a, & > button, & > .navigation-link {
        ${tw`flex items-center h-full no-underline text-neutral-300 px-6 cursor-pointer transition-all duration-150`};
        color: lightgray;
        
        &:hover {
            ${tw`text-neutral-100 bg-black`};
            background-color: #000;
            color: #fff;
        }
        
        &.active {
            box-shadow: inset 0 -2px #fd6400;
            color: #fd6400;
        }
    }
`;

export default () => {
    // const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
    const rootAdmin = useStoreState((state: ApplicationStore) => state.user.data!.rootAdmin);
    const [ isLoggingOut, setIsLoggingOut ] = useState(false);

    const onTriggerLogout = () => {
        setIsLoggingOut(true);
        http.post('/auth/logout').finally(() => {
            // @ts-ignore
            window.location = '/';
        });
    };

    return (
        <Navigation>
            <SpinnerOverlay visible={isLoggingOut} />
            <div css={tw`mx-auto w-full flex items-center`} style={{ maxWidth: '1200px', height: '66px', overflow: 'hidden' }}>
                <div id={'logo'}>
                    <Link to={'/'}>
                        <img src={FyreBlitz} alt="FyreBlitz logo" style={{ height: '50px' }} />
                    </Link>
                </div>
                <RightNavigation>
                    <SearchContainer/>
                    <NavLink to={'/'} exact>
                        <FontAwesomeIcon icon={faLayerGroup}/>
                    </NavLink>
                    <NavLink to={'/account'}>
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </NavLink>
                    {rootAdmin &&
                    <a href={'/admin'} rel={'noreferrer'}>
                        <FontAwesomeIcon icon={faCogs}/>
                    </a>
                    }
                    <button onClick={onTriggerLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt}/>
                    </button>
                </RightNavigation>
            </div>
        </Navigation>
    );
};