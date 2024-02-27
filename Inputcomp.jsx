
import React from 'react'
import { TextInput, Checkbox, MD3Colors,Icon } from "react-native-paper";

const Inputcomp= ({label, mode, placeholder,size,color, secureTextEntry, onChangeText, IconName,background}) => {
    let input = true
  return (
    <>
        <TextInput  
            label={label}
            mode= {mode}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={amount}
            onChangeText={onChangeText}
            style={{backgroundColor:{background}, width:350 ,marginBottom:20,height:30,padding:2}}
            left={<TextInput.Icon 
                    icon={IconName}
                    size={size}
                    color={color}
            />}
            right={<TextInput.Icon 
                name={IconName}
                size={size}
                color={color}
        />}
        />
    </>
  )
}

export  {Inputcomp}