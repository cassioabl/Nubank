import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  flex: 1;
  z-index: 15;
  background: #FFF;
  max-height: 350px;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  width: 320px;
  left: 0; 
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 20px;
`;

export const CardTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  padding-left: 10px;
  font-size: 16px;
  color: #666;
`;

export const CardContent = styled.View`
  padding-top: 10px;
  padding-left: 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  position: absolute;
  bottom: 0;
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;