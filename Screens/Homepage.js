import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
     <Image style={styles.image} source={{uri:'https://www.salvationarmy.org.au/scribe/sites/stafford/files/2020/451336.jpg'}} />
     <Text style={styles.title}>LATEST MOVIES</Text>
     <View style={styles.movieBox}>
        <Image style={styles.boxImage} source={{uri:'https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg'}} />
        <Image style={styles.boxImage} source={{uri:'https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg'}} />
        <Image style={styles.boxImage} source={{uri:'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}} />
        <Image style={styles.boxImage} source={{uri:'https://m.media-amazon.com/images/M/MV5BMDc3MDU5YmQtMjJkYy00YWIwLWJkYmItZjM5NjA3ZGU4MGZkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg'}} />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14171A',
   
  },
  text: {
      color: 'white'
  },
  title:{
    marginTop:'4%',
    fontSize: 30,
    color:'tomato',
    marginLeft:'2%'
  },
  image:{
    marginTop:'5%',
    height:'25%',
    width:'95%',
    marginLeft:'3%',
    borderRadius:20
    
  },
  movieBox:{
    display:'flex',
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginBottom: '40%',
    width: '100%'
  },
  boxImage:{
    height:'60%',
    width:'35%',
    marginLeft: '2%',
    marginRight:'2%',
    marginTop:'2%'
  }
});
