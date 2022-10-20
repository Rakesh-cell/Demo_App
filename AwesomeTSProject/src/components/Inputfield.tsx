import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Login from '../screens/Login'

type Props = React.ComponentProps<typeof TextInput> & {
    name: string,
    Lefticon: string,
    ricon: string,
    msgerr?: string | undefined,
    Label?: string | undefined,
}

const Inputfield = ({name,Lefticon,ricon,msgerr,onChangeText,value,secureTextEntry,Label}: Props) => {
    const[righticon,setRightIcon] =useState(ricon);
    const[securepass,setsecurepass] = useState(secureTextEntry);

    const iconclicked=()=>{
        if(righticon=='eye-off'){
            setRightIcon('eye')
            setsecurepass(false)
        }else if(righticon=='eye'){
            setRightIcon('eye-off')
            setsecurepass(true)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Label}</Text>
          <View style={styles.inputContainer}>  
        <Icon
                    name={Lefticon}
                    color="black"
                    size={20}
                    
        /> 
        <TextInput style={styles.inputText}
            placeholder={name}
            secureTextEntry={securepass}
            value={value}
            onChangeText={onChangeText}
                
        />
        { !name.includes("password")? null:
        <Icon
                    name={righticon}
                    color="black"
                    size={20}
                    onPress={iconclicked}
        /> 
    }
        </View>
        { msgerr?<Text style={styles.errstyle}>{msgerr}</Text>:null}
      </View>
    )
}

export default Inputfield

const styles=StyleSheet.create({
   
     
    //
     container: {
         marginTop: 20,
         justifyContent: 'center',
         width:'90%'
     },
     title: {
         fontSize: 12,
         color: 'black',
         fontWeight:'bold',
     },
     inputText: {
         flex: 1,
         color: 'black',
     },
     inputContainer: {
         borderBottomWidth: 1,  
         borderColor: 'black',
         justifyContent: 'center',
         flexDirection: 'row',
         alignItems: 'center',
         height: 40,
         
     },
     errstyle: {
         color: 'red',
         fontSize: 10
     }
 });