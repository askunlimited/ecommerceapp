import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small/2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
    backgroundColor: COLORS.secondary
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover"
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium
  }
})

export default styles
