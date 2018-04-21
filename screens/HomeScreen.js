import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Spending',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.littleRight}>
          Hello RTG!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  littleRight: {
    paddingLeft: 150,
    paddingTop: 200,
    color: 'red',
    fontWeight: 'bold'
  }
});