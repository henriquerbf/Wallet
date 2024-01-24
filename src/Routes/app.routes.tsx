import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from '../Components/Layout';

import Dashboard from '../Pages/Dashboard';
import List from '../Pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/list/:type" element={<List match={{
                params: {
                    type: ''
                }
            }}/>} />
        </Routes>
    </Layout>
);

export default AppRoutes;