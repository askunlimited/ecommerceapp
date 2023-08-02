import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productCardView.style'

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product Name is longer but cool
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product vendor
          </Text>
          <Text style={styles.price}>$2345</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
