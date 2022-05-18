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
    <View style={styles.container1}>
      <Text style={styles.errortext}>Search results: "Not Found ~ `404 ERROR `"</Text>
      {/* <MaterialIcons name="error" size={170} color="white" styles={{marginLeft:'20%'}}/> */}
      <Image style={styles.erimage} source={{uri:'https://w0.peakpx.com/wallpaper/734/528/HD-wallpaper-broken-heart-bart-cartoon-crying-emo-girl-love-pain-sad.jpg'}} />
    <StatusBar style="auto" />
  </View>
  )
  
  return (
     
      <View style={styles.container}>
     
        <Text style={styles.title}>{dataa.Title}</Text>
            <Image style={styles.image} source={{uri:`${dataa.Poster}`}} />
            <Text style={[styles.text,styles.genre]}>Genre: {dataa.Genre} </Text>
            <Text style={[styles.text,styles.genre]}>Release: {dataa.Released} </Text>
            <Text style={[styles.text,styles.genre]}>Actors: {dataa.Actors}</Text>
            <Text style={[styles.text,styles.genre]}>Language: {dataa.Language}</Text>
            <Text style={[styles.text,styles.genre]}>Imdb: {dataa.Ratings[0].Value}</Text>
            <Text style={{color:'#FF4949',fontSize:16,fontWeight:'bold',marginLeft:'5%',marginTop:'5%'}}>Plot:</Text>
            <Text style={styles.plot}> {dataa.Plot}</Text>


        <StatusBar style="auto" />
        
      </View>
   
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151515',
      allignItems: 'center',
      justifyContent: 'center',
     
    },
    container1: {
      flex: 1,
      backgroundColor: '#151515',
      allignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
     
    },
    erimage: {
      flex:1,
      marginRight:'2%',
      marginTop:'5%',
    },
    errortext:{
        color: 'white',
        fontSize:20,
        fontFamily: 'sans-serif-light',
        padding:'5%',
    },
    text: {
        color: '#FFE59D',
    },
    image:{
      height:'40%',
      width:'70%',
      marginLeft: '15%',
    },
    title:{
      fontSize: 25,
      marginVertical: '4%',
      marginLeft:'4%',
      color:'#FF4949'
    },
    plot:{
        fontSize:13,
        paddingHorizontal: '4%',
        color:'white'
    },
    genre:{
      marginTop:'2%',
      marginLeft: '7%'
    }
  });