import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';

import Dashboard from './Pages/Dashboard';

const App: React.FC = () =>{
    return(
        <>
            <Dashboard/>
            <GlobalStyles/>
        </>//fragment <></> is used just to transport more than 1 tag
    );
}

export default App;