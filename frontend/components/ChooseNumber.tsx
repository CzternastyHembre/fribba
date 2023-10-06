import { Button, Dialog } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ToggleButtonGroup from './ToggleButtonGroup'

export default ({ name }) => {
  const [visible, setVisible] = useState(false)
  const [number, setNumber] = useState(1)

  const toggleDialog2 = () => {
    setVisible(!visible)
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title={name + ' ' + number}
          onPress={toggleDialog2}
          buttonStyle={styles.button}
        />
        <Text>{number}</Text>
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog2}>
        <ToggleButtonGroup
          setNumber={setNumber}
          names={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
        />
      </Dialog>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20
  },
  buttonContainer: {
    display: 'flex',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
