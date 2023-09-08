import { Image, Text, TouchableOpacity, View } from 'react-native'
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from '@expo/vector-icons'
import styles from './productDetail.style'
import { COLORS, SIZES } from '../constants'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({ navigation }) => {
  const route = useRoute()
  const { item } = route.params

  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$6.99</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[...Array(5)].map((index) => (
              <Ionicons name='star' key={index} color='gold' size={24} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name='plus' size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            quos eius minima sapiente, asperiores voluptatum alias laboriosam
            accusamus obcaecati temporibus minus nisi! Omnis adipisci suscipit
            ipsa odio alias inventore nulla ducimus dolorum facilis. Corporis
            sint maxime explicabo porro deleniti esse, debitis et laborum
            architecto quos officia possimus facilis, minima eligendi?
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.locations}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name='location-outline' size={20} />
              <Text> Locations</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text> Free delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCart}>
            <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
