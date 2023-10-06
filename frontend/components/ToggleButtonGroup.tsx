import { ButtonGroup } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

export default ({ setNumber, names }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onChange = (selectedIndex) => {
    setSelectedIndex(selectedIndex)
    setNumber(selectedIndex + 1)
  }
  return (
    <>
      <ButtonGroup
        buttons={names}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          onChange(value)
        }}
        containerStyle={{ display: 'flex' }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  subHeader: {
  }
})
