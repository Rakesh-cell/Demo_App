import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'

type Props = React.ComponentProps<typeof TouchableOpacity>&{
    userId?:number,
    id?:number,
    title?: string,
    body?: string,

}

const CustomCard = (props: Props) => {
    const{userId, id, title, body} = props
  return (
    <View style={styles.container}>
                <TouchableOpacity style={styles.infoContainer}  
                // onPress={()=>this.props.handleScreenChange(email,name,picture)}
                >
                <Image 
                    
                    source={require('../assets/employee_avatar.png')}
                    style={styles.memberImage}
                    />
                <View >
                    
                    <Text style={styles.name}> {title}</Text>
                    <Text style={styles.email}> {body} </Text>
                   
                </View>
                
                 
                </TouchableOpacity>
            </View>
  )
}

export default CustomCard

const styles=StyleSheet.create({
    container:{
        marginVertical:7,
        backgroundColor:'white',
        borderRadius:10,
    },
    infoContainer:{
        padding:10,
        flexDirection:'row',
        borderRadius:5,
        alignItems:'center'
       
    },
   
    name:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    email:{
        fontSize:12,
        color:'grey'
    },
    memberImage:{
        height:40,
        width:40,
        marginHorizontal:6,
        borderRadius:20
        
    }
})