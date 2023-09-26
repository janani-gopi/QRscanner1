import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const Scanopener = ({navigation}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>{navigation.navigate("Scanner")}}>
      <Text style={styles.text}>Open QR-scanner</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Scanopener

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    text: {
      color: 'black',
      fontSize: 20,
    },
  });
  