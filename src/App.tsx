import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import dark from './Styles/Themes/dark';
// import light from './Styles/Themes/light';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>//fragment <></> is used just to transport more than 1 tag
    );
}

export default App;