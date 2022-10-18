import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

type Props =React.ComponentProps<typeof TouchableOpacity> &  {
    title: string,
    color: string,
   
}

const buttonfield = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:props.color}]} onPress={props.onPress} >
            <Text style={styles.submitText} >{props.title}</Text>
            
        </TouchableOpacity>
  )
}

export default buttonfield

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderColor:'blue',
       // bordrRadius:10,//error
        marginVertical:20,
        borderWidth:0,
    }, 
    submitText: {
        fontSize:23,
        fontWeight:'bold',
        color:'white',
        alignSelf: 'center',
        marginVertical:10,
    }
});