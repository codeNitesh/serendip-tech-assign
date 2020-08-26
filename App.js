import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button,
  Dimensions,
  SafeAreaView
} from "react-native";

import Svg, { Polygon } from "react-native-svg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Num1: 0,
      Num2: 0,
      polygonPoints: `50,100 93.30127018922194,25.00000000000001 6.698729810778076,24.99999999999998`,
      windowWidth: 0
    };
  }

  Sum = () => {
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);

    const windowWidth = Dimensions.get("window").width / 1.5;
    const Center = windowWidth / 2;
    const Radius = Center - 20;
    var R = N1 + N2;

    var numSides = R;
    if (R == 0) numSides = 3;

    let newPolyPoints = "";

    const angle = (2 * Math.PI) / numSides;
    for (let side = 0; side < numSides; side++) {
      const x = Math.cos(angle * side) * Radius + Center;
      const y = Math.sin(angle * side) * Radius + Center;
      newPolyPoints = `${newPolyPoints} ${x},${y}`;
    }
    this.setState({
      polygonPoints: newPolyPoints,
      windowWidth: windowWidth
    });


  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Polygon Generator</Text>
        <TextInput
          style={styles.input}
          placeholder="Num1"
          keyboardType="numeric"
          onChangeText={(Num1) => this.setState({ Num1 })}
        />
        <TextInput
          style={styles.input}
          placeholder="Num2"
          keyboardType="numeric"
          onChangeText={(Num2) => this.setState({ Num2 })}
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={this.Sum} />
        </View>

        <View>
          <Svg width={this.state.windowWidth} 
          height={this.state.windowWidth}>
            <Polygon
              points={this.state.polygonPoints}
              fill="lime"
              stroke="purple"
              strokeWidth="1"
            />
          </Svg>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  textContainer:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 100,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
    paddingTop: 35,
    width: 100,
    borderRadius: 15,
  },
  text: {
    paddingTop: 25,
  },
});
