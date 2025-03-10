import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={result.image_url ? {uri: result.image_url}: null }/>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Yıldızlı Restoran , {result.review_count} Değerlendirme </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
    },
    image:{
         width:250,
         height:120,
         borderRadius:8,
         marginBottom:15,
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
        color:'darkblue'
    },
    rating:{
        fontWeight:'bold',
        fontSize:18,
        color:'gray'

    },
})