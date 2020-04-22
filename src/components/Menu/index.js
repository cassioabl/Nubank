import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, UserAccount, UserAccountGroup, Title, Value, Nav, NavItem, NavItemName, NavTextGroup, NavText, NavTextDesc, SignOutButton, SignOutButtonText } from './styles';

export default function Menu( { translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      }),
    }}>
      <Code>
        <QRCode
          value="http://awesome.link.qr"
          color="#8F20B0"
          backgroundColor="#FFF"
          size={100}
        />
      </Code>

      <UserAccount>
        <UserAccountGroup>
          <Title>Banco</Title>
          <Value>260 - Nu Pagamentos S.A.</Value>
        </UserAccountGroup>
        <UserAccountGroup>
          <Title>Agência</Title>
          <Value>0001</Value>
        </UserAccountGroup>
        <UserAccountGroup>
          <Title>Conta</Title>
          <Value>9267079-8</Value>
        </UserAccountGroup>
      </UserAccount>

      <Nav>
        <NavItem>
          <NavItemName>
            <Icon name="help-outline" size={22} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavItemName>
            <Icon name="person-outline" size={22} color="#FFF" />
            <NavTextGroup>
              <NavText>Perfil</NavText>
              <NavTextDesc>Nome de preferência, telefone, e-mail</NavTextDesc>
            </NavTextGroup>
            </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
        <NavItem>
        <NavItemName>
            <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
            <NavText>Configurar conta</NavText>
          </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
        <NavItem>
        <NavItemName>
            <Icon name="credit-card" size={22} color="#FFF" />
            <NavText>Configurar cartão</NavText>
          </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavItemName>
            <Icon name="store" size={22} color="#FFF" />
            <NavText>Pedir conta PJ</NavText>
            </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavItemName>
            <Icon name="smartphone" size={22} color="#FFF" />
            <NavText>Configurações do app</NavText>
          </NavItemName>
          <Icon name="keyboard-arrow-right" size={22} color="#FFF" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}