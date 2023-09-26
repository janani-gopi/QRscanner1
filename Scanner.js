import {Linking} from 'react-native';
import React from 'react';
import {CameraScreen} from 'react-native-camera-kit';

const Scanner = () => {
  function onSuccess(e){
    Linking.openURL(e.nativeEvent.codeStringValue).catch(err =>
      console.error('An error occured', err)
    );
  };
  return (
       <CameraScreen
        scanBarcode={true}
        onReadCode={onSuccess} 
        showFrame={true} 
        frameColor="white"
        laserColor={"red"} 
      /> 
   
  );
};

export default Scanner;
