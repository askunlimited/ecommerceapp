import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './productRow.style'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
  const { data, isLoading, error } = useFetch()

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          contentContainerStyle={{ columnGap: 10 }}
          horizontal
        />
      )}
    </View>
  )
}

export default ProductRow
