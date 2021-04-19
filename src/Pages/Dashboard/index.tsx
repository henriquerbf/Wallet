import React from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        { value: "1", label: "Dnl1" },
        { value: "2", label: "Henrique" },
        { value: "3", label: "Bruno" },
    ];

    return(
        <Container>
            <ContentHeader  title= "Dashboard" lineColor = "#F7931B">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;