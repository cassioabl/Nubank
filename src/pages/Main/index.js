import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Carousel from '~/components/Carousel';

import { Container, Content, Card } from './styles';

export default function Main() {
  let offset = { x: 0, y: 0};
  const translateY = new Animated.Value(0);

  const animatedEventY = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ]
  )

  function onHandlerStateChangedY(event) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset.y += translationY;

      translateY.setOffset(offset.y);
      translateY.setValue(0);

      if(translationY >= 30) {
        opened = true;
      } else {
        translateY.setValue(offset.y);
        translateY.setOffset(0);
        offset.y = 0;
      }
      
      Animated.timing(translateY, {
        toValue: opened ? 460 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset.y = opened ? 460 : 0;
        translateY.setOffset(offset.y);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
          onGestureEvent={animatedEventY}
          onHandlerStateChange={onHandlerStateChangedY}
          activeOffsetY={[-20, 20]}
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange:[-350, 0, 460],
                  outputRange: [-50, 0, 460],
                  extrapolate: 'clamp'
                }),
              }]
            }}
          >
            <Carousel></Carousel>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  );
}