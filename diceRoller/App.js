import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';


const App = () => {

  let img =[
    0,
    DiceOne,
    DiceTwo,  
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix
  ]; 
  
  const [uri1, setUri1] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceThree);


  const playButtonTapped = () => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setUri1(img[randomNumber1]);
    setUri2(img[randomNumber2]);
  }

  

  return(
      <>
        <View style={styles.container}>
          <Image style={styles.image} source={uri1}/>
          <Image style={styles.image} source={uri2}/>
          <TouchableOpacity onPress={playButtonTapped}>
            <Text style={styles.playGameButton}>Roll Dice</Text>
          </TouchableOpacity>
        </View>
          
      </>
  );

};

export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: "center",
    justifyContent: "center",
  },
  image : {
    height: 200,
    width: 200,
    
  },
  playGameButton : {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderWidth: 3,
    borderRadius: 5,
    fontWeight: "bold",
  },

});