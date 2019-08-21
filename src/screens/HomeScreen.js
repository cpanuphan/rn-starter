import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!!</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Component Demo" />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" />
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Image Demo" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo" />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo" />
      <Button
        onPress={() => navigation.navigate('SquareReducer')}
        title="Go to Square Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonSpace: {
    marginTop: 20
  }
});

export default HomeScreen;
