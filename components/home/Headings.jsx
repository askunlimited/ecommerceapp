import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './headings.style'
import { COLORS, SIZES } from '../../constants'
import { Ionicons } from '@expo/vector-icons'

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity>
          <Ionicons
            name='ios-grid'
            size={SIZES.xLarge}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings
