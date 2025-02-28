import { FlatList, StyleSheet, Text, View,Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultsShowScreen({ route }) {
  const id = route.params.id;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>{
        result.is_closed ? <AntDesign name="closecircleo" size={30} color="black" /> : <MaterialIcons name="delivery-dining" size={30} color="black" />
      }
      </View>
      <Image style={styles.image} source={{uri : result.image_url }}  />
      <Image style={styles.image} source={{uri : result.image_url }}  />
      <Image style={styles.image} source={{uri : result.image_url }}  />

      {/* <Image
        data={result.image_url}
        renderItem={({ item }) => {
            return 
         
          
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height:150,
    margin:10,
    borderRadius:20
  },
  title:{
    alignSelf:'center',
    fontSize:25,
    marginVertical:10,
  },
  phone:{
    alignSelf:'center',
    fontSize:15,
    
  },
  icon:{
    alignSelf:'center',
  }
});
