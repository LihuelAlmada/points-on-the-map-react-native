import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Map, Modal, Panel, Input } from './components';

export default function App() {
  const [points, setPoints] = useState([])
  const [temporalPoint, setTemporalPoint] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)


  const handleLongPress = ({ nativeEvent }) => {
    setTemporalPoint(nativeEvent.coordinate)
    setVisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel />
      <Modal visibility={visibility}>
        <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
      </Modal>
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
