
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL:0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
};


const App = () => {
  const [inputValue, setInputValue] = useState();
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {

    if(!inputValue) {
        return Snackbar.show({
          text:'PLease enter a value',
          backgroundColor: "#EB4D4B",
          textColor: "#ffffff",
        });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  }

  return(
    <>
    <ScrollView backgroundColor="#03203C"
    keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter INR Value"
            placeholderTextColor="#c1c1c1"
            value={inputValue}
            onChangeText={(inputValue) => (setInputValue(inputValue.toString()),
            setResultValue(0))}
            ></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
              onPress={()=>buttonPressed(currency)}
              key={currency}
              style={styles.converterButton}>
                <Text style={styles.buttonText}>{currency}</Text>
              </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
      flex: 1,
      paddingHorizontal: 5,    
  },
  resultContainer : {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
  },
  resultValue : {
    fontSize:30,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  inputContainer : {
    height:70,
    marginTop:10,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",
  },
  input : {
    fontSize:30,
    color: "#FFFFFF",
    textAlign: "center",
  },

  convertButtonContainer : {
      flexDirection: "row",
      flexWrap : "wrap",
      marginTop: 30,
      justifyContent: "space-evenly",
  },
  converterButton : {
    alignItems: "center",
    height: 100,
    backgroundColor:"#5DA3FA",
    width: "33.3%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    justifyContent: "center",
    marginVertical: 0.1,
  },
  buttonText : {
    color:"#FFFFFF",
    fontWeight:"bold",
  },
});

