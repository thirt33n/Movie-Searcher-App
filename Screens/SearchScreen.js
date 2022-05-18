import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function SearchScreen({navigation}) {

    const [searchQuery, setSearchQuery] =useState('');



  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.bar}
    />
    <TouchableOpacity onPress={() =>{
      console.log(searchQuery)
      navigation.navigate('SearchResults', {
        itemId: 86,
        otherParam: {searchQuery},
      })

    }} style={styles.button}>
        <Text>Search</Text>
    </TouchableOpacity>
    <View style={{display:'flex',flexDirection:'row'}}>
      <MaterialCommunityIcons name="movie-open" size={100} color="#FF4949" style={{marginTop:'20%'}}/>
      <MaterialCommunityIcons name="popcorn" size={100} color="#FFCD38" style={{marginTop:'50%'}} />
      <MaterialCommunityIcons name="television-shimmer" size={100} color="#AB46D2" style={{marginTop:'80%'}} />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15133C',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
      color: 'white'
  },
  bar:{
      borderRadius:10,
      width:'93%',
      marginTop:'5%'
  },
  button:{
      marginTop: '5%',
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});


