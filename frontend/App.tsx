import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChooseNumber from './components/ChooseNumber'
import ToggleButtonGroup from './components/ToggleButtonGroup'

export default function App() {
  const [holes, setHoles] = React.useState(9)
  return (
    <View style={styles.container}>
      <Text>Fribbe</Text>
      <Text>Created by Henrik og Mattis Testr</Text>
      <StatusBar style="auto" />
      <ToggleButtonGroup names={['9', '12', '18']} setNumber={setHoles} />
      <Text>Antall hull: {holes}</Text>
      <ChooseNumber name={'Henrik'} />
      <ChooseNumber name={'Mattis'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
