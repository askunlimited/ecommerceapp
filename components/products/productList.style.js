import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    alignItems: 'flex-start',
    paddingTop: SIZES.xxLarge,
    paddingHorizontal: SIZES.small / 2.5,
  },

  seperator: {
    height: 16,
  },
})

export default styles
