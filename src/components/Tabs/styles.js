import { Animated } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  position: absolute;
  bottom: 15px;
  /* z-index: 10; */
  /* height: 100px; */
  /* margin-top: 20px; */
  /* background: gray; */
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 3px;
  margin-left: 10px;
  padding: 8px;
  justify-content: space-between;
`;


export const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`; 