import { ButtonGroup } from '@rneui/themed'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

export default ({ names }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3])
  return (
    <>
      <ButtonGroup
        buttons={names}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value)
        }}
        containerStyle={{ marginBottom: 20 }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10
  }
})
