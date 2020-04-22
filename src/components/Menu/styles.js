import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  padding: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #FFF;
  padding: 5px;
  align-self: center;
`;

export const UserAccount = styled.View`
  /* flex: 1;
  flex-direction: row; */
  padding-top: 10px;
  align-items: center;
`;

export const UserAccountGroup = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 2px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  padding-left: 5px;
`;

export const Nav  = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem  = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavTextGroup = styled.View`
`;

export const NavItemName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavText  = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 15px;
`;

export const NavTextDesc  = styled.Text`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
`;