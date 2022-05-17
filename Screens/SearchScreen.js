import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';

export default function SearchScreen() {

    const [searchQuery, setSearchQuery] =useState('');

    const APIKey = '2a60b134'
    const baseUrl = 'http://www.omdbapi.com/?t='
    const and = '&apikey='
    const url = baseUrl+searchQuery+and+APIKey
    function search(){
        console.log(url);
        try{
           axios.get(url).then((response) => {
                console.log(response.data);
            });
        }catch(error)
        {
            console.log(error)
        }
    }
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.bar}
    />
    <TouchableOpacity onPress={search} style={styles.button}>
        <Text>Search</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
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
