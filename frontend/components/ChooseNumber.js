import { Button, Dialog } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ToggleButtonGroup from './ToggleButtonGroup'

export default () => {
  const [visible, setVisible] = useState(false)

  const toggleDialog2 = () => {
    setVisible(!visible)
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="Henrik"
          onPress={toggleDialog2}
          buttonStyle={styles.button}
        />
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog2}>
        <ToggleButtonGroup
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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
