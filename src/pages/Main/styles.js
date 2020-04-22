import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8F20B0;
  justify-content: center;
`;

export const Content = styled.View`
  max-height: 450px;
  margin-top: 30px;
`;

export const Card = styled(Animated.View)`
  height: 100%;
  position: absolute;
`;