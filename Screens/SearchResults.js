import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function SearchResults({route,navigation}){
  const {otherParam} = route.params
 
  const movieTitle = otherParam.searchQuery


  const [dataa,setData] = useState('')
  
  function replacer(){
    const string = movieTitle.replace(/\s+/g, '+');
    return string
  }

  const APIKey = '2a60b134'
  const baseUrl = 'http://www.omdbapi.com/?t='
  const and = '&apikey='
  const url = baseUrl+replacer()+and+APIKey
   
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);
  
 if(!dataa.Title)
  return(
    <View style={styles.container}>
    <Text style={styles.text}>ERROR 404: NOT FOUND</Text>
    <MaterialIcons name="error-outline" size={150} color="white" />
    <StatusBar style="auto" />
  </View>
  )
  
  return (
     
      <View style={styles.container}>
     
        <Text style={[styles.text,styles.title]}>{dataa.Title}</Text>
            <Image style={styles.image} source={{uri:`${dataa.Poster}`}} />
            <Text style={[styles.text,styles.genre]}>Genre: {dataa.Genre} </Text>
            <Text style={[styles.text,styles.genre]}>Release: {dataa.Released} </Text>
            <Text style={[styles.text,styles.genre]}>Actors: {dataa.Actors}</Text>
            <Text style={[styles.text,styles.genre]}>Language: {dataa.Language}</Text>
            {/* <Text style={[styles.text,styles.genre]}>Imdb: {dataa.Ratings[0].Value}</Text> */}
         <Text style={[styles.text,styles.plot]}>Plot: {dataa.Plot}</Text>


        <StatusBar style="auto" />
        
      </View>
   
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14171A',
      justifyContent: 'flex-start',
    },
    text: {
        color: 'white'
    },
    image:{
      height:'45%',
      width:'50%',
      marginLeft:'25%'
    },
    title:{
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: '7%',
    
     
    },
    plot:{
        fontSize:20,
        marginTop:'5%'
    },
    genre:{
      marginTop:'3%',
      marginLeft: '7%'
    }
  });