import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { Inputcomp } from './Inputcomp';

export default function Convert() {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const convertCurrency = () => {
     const rwf = 1300
      const converted = parseFloat(amount);
      if (!isNaN(converted)) {
        const usd = rwf * converted
        setConvertedAmount(usd.toFixed(2));
      }
     
    };

  return (
    <View style={{backgroundColor:'#353e4d',height:800}}>
<View style={{justifyContent:'center',paddingTop:200,paddingLeft:100,color:'white'}}>
    <Text style={{paddingLeft:60,fontSize:17}}>Dollars</Text>
    <TextInput
    
    placeholder='EnterNumber'
    keyboardType="numeric"
    style={{borderWidth:1,backgroundColor:'white',width:200,textAlign:'center',padding:10}}
    onChangeText={text => setAmount(text)}
    
    />
    <Text style={{paddingLeft:60,fontSize:17}}>Rwf</Text>
   
    <TouchableOpacity style={{borderWidth:1,color:'white',width:200,textAlign:'center',padding:10}}  onPress={convertCurrency}>
        <Text style={{paddingLeft:60,color:'skyblue',fontSize:20}}>Convert</Text>
    </TouchableOpacity>
</View>
                <Text style={{ fontSize: 20, marginTop: 20,color:'skyblue',textAlign:'center' }}>Amount Convert is: {convertedAmount}</Text>
            
    </View>  
    
  );
}


