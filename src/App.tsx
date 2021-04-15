import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Layout from './Components/Layout';
import dark from './Styles/Themes/dark';

const App: React.FC = () =>{
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout/>
        </ThemeProvider>//fragment <></> is used just to transport more than 1 tag
    );
}

export default App;