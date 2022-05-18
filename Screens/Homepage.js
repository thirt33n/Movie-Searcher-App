import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView ,SafeareaView} from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
     <Image style={styles.image} source={{uri:'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435'}} />
     <Text style={styles.title}>Recommended films</Text>
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
    backgroundColor: '#000000',
   
  },
  text: {
      color: 'white'
  },
  title:{
    marginTop:'4%',
    marginBottom:'1%',
    fontSize: 18,
    color:'white',
    marginLeft:'5%'
  },
  image:{
    marginTop:'10%',
    height:'30%',
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
    height:'80%',
    width:'35%',
    marginLeft: '2%',
    marginRight:'2%',
    marginTop:'1.5%'
  },
  ScrollView:{
    marginTop:'10',
  }
});
