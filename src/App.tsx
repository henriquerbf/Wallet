import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';

import Layout from './Components/Layout';

const App: React.FC = () =>{
    return(
        <>
            <Layout/>
            <GlobalStyles/>
        </>//fragment <></> is used just to transport more than 1 tag
    );
}

export default Layout;