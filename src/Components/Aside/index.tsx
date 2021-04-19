import React from 'react';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import {
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title
} from './styles';

import logoImg from '../../Assets/logo.svg';

const Aside: React.FC = () =>{
    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt = "Logo Minha Carteira"/>
                <Title>Wallet</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;