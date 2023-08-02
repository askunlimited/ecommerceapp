import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
// import { COLORS, SIZES } from '../constants'
import { Feather, Ionicons } from '@expo/vector-icons'

import styles from './search.style'
import { COLORS, SIZES } from '../constants'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name='camera-outline'
            size={SIZES.xLarge}
            color={COLORS.gray}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => console.log('pressed')}
            placeholder='what are you looking for ?'
          />
        </View>
        <View>
          <TouchableOpacity style={styles.serchBtn}>
            <Feather
              name='search'
              size={SIZES.xLarge}
              color={COLORS.lightWhite}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search
