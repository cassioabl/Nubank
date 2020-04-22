import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions
} from "react-native";

import { Card, CardHeader, CardTitle, HeaderTitle, CardContent, CardFooter, Title, Description, Annotation } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const images = [
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
];

const window = Dimensions.get("window");
const translateY = new Animated.Value(0);
let windowWidth;
let offset = 0;

export default class Carousel extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window
    }
  };

  onDimensionsChange = ({ window }) => {
    this.setState({ dimensions: { window } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionsChange);
  }

  render() {
    windowWidth = this.state.dimensions.window.width;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            directionalLockEnabled={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.scrollX
                  }
                }
              }
            ])}
            scrollEventThrottle={1}
          >
          {images.map((image, imageIndex) => {
            return (
              <View key={imageIndex}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Icon name="attach-money" size={28} color="#666" />
                      <HeaderTitle>Conta</HeaderTitle>
                    </CardTitle>
                    <Icon name="visibility-off" size={28} color="#666" />
                  </CardHeader>
                  <CardContent>
                    <Title>Saldo disponível</Title>
                    <Description>R$ 152.158,27</Description>
                  </CardContent>
                  <CardFooter>
                    <Annotation>
                      Transferência de R$ 20,00 recebida de Cassio Leite em 16 ABR
                    </Annotation>
                  </CardFooter>
                </Card>
              </View>
            );
          })}
          </ScrollView>
          <View style={{
              position: "absolute",
              bottom: 70,
              left: windowWidth/2 - 25,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {images.map((image, imageIndex) => {
              const opacity = this.scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1)
                ],
                outputRange: [0.5, 1, 0.5],
                extrapolate: "clamp"
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { opacity }]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'lightblue'
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 7,
    width: 7,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 3
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});