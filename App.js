import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Map, Modal, Panel } from './components';

export default function App() {
  const [points, setPoints] = useState([])
  const handleLongPress = ({ nativeEvent }) => {
    const newPoint = points.concat({ coordinate: nativeEvent.coordinate })
    setPoints(newPoint)
  }
  console.log(points)
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel />
      <Modal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
