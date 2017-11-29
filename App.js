import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RNGooglePlaces from "react-native-google-places";

export default class App extends React.Component {
     clickme(){
        RNGooglePlaces.getAutocompletePredictions('facebook')
          .then((results) =>console.log(results))
          .catch((error) => console.log(error.message));    
      }
  render() {

    return (
      <View style={styles.container}>
        <Text>App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={() => this.clickme()}
          title="Google Places"
          color="green"
          accessibilityLabel="Learn more about Google Places"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

