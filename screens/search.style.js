import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginTop: SIZES.small,
    marginHorizontal: 10,
    color: COLORS.lightWhite,
    alignSelf: 'center',
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: 'regular',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  serchBtn: {
    width: 50,
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.primary,
  },
})

export default styles
