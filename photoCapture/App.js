import React, {useState, UseState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { RNCamera } from "react-native-camera";

const PendingView = () => (
  <View
  style = {{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>
      <Text style={{fontSize:30, color:"red"}}>
      Loading...
      </Text>
  </View>
);



const App = () => {

  const [image, setImage] = useState(null);

  const takePicture = async (camera) => {
      try {
        const options = {quality: 0.9, base64: false};
        const data = await camera.takePictureAsync(options);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <View style={styles.container}>
    {(image ? (
      <View style={styles.imagePreview}>
       <Text style={styles.camText}>Here is your clicked picture</Text>
       <View style={styles.clickedPhoto}>
       <Image style={{borderRadius:150}} source={{uri: image, width:'100%', height:'100%'}}/>
       </View>
       
       <Button
       title="CLick a New Picture"
       onPress={()=>{setImage(null)}}></Button>
      </View>
      
    ) : (
      <RNCamera
      style = {styles.preview}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      flashMode={RNCamera.Constants.FlashMode.auto}
      androidCameraPermissionOptions={{
        title: "Permission to use Camera",
        message: "This App needs permission to to access your Camera",
        buttonPositive: "Allow Access",
        buttonNegative: "Deny"
      }}
      androidRecordAudioPermissionOptions = {{
        title: "Permission to use Audio",
        message: "This App needs permission to to access your Audio",
        buttonPositive: "Allow Access",
        buttonNegative: "Deny"
      }}
      >
      {({camera, status}) => {
        if(status !== 'READY') return <PendingView/>
        return (
          <View style={{flex:0, flexDirection: 'row', justifyContent: "center"}}>
            <TouchableOpacity
            onPress={()=>takePicture(camera)}
            style={styles.capture}>
              <Text>SNAP</Text>
            </TouchableOpacity>

          </View>
        ); 
      }}
      </RNCamera>
    ))}
    
    </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#5DA3FA",
  },
  preview : {
    flex:1,
    justifyContent: "flex-end",
    alignItems:"center",
  },
  capture : {
    flex: 0,
    backgroundColor: "#E07C24",
    padding: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  imagePreview:{
    flex:1,
    justifyContent: "space-around",
    alignItems:"center",
  },
  camText : {
    backgroundColor:"#03203C",
    color:"#fff",
    width:"100%",
    textAlign:"center",
    fontSize: 25,
    paddingVertical:15,
  },
  clickedPhoto :{
    height: 300,
    width:300,
    borderRadius: 300/2,
    shadowColor: "#120E43",
    elevation: 15,
  },
});