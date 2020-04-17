import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs( {translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smartphone" size={24} color="#FFF" />
          <TabText>Recarregar celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="attach-money" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="local-atm" size={24} color="#FFF" />
          <TabText>Empréstimos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={24} color="#FFF" />
          <TabText>Me Ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="list" size={24} color="#FFF" />
          <TabText>Organizar atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>  
  );
}