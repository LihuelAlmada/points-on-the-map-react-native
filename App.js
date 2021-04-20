import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [points, setPoints] = useState([])
  const [temporalPoint, setTemporalPoint] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_point') // new_point or all_points
  const [visibility, setVisibility] = useState(false)


  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_point')
    setTemporalPoint(nativeEvent.coordinate)
    setVisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  const handleSubmit = () => {
    const newPoint = {coordinate: temporalPoint, name: nombre};
    setPoints(points.concat(newPoint))
    setVisibility(false)
    setNombre('')
  }
  const handleCancel = () => {
    setTemporalPoint('')
    setVisibility(false)
    setNombre('')
  }
  const handleList = () =>{
    setVisibilityFilter('all_points')
    setVisibility(true)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel onPressLeft={handleList} textLeft='list'/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_point' 
          ? 
          <>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
            <Button title="Aceptar" onPress={handleSubmit}/>
            <Button title="Cancelar" onPress={handleCancel}/>
          </>
          :
          <List points={points} />
        }
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
