import { View, Text ,ScrollView,StyleSheet} from 'react-native'
import React,{useEffect} from 'react'

import { useAppSelector} from '../utils/hook'
import CustomCard from '../components/CustomCard'
import { Navigation } from '../types'
import { useDispatch } from 'react-redux'
// import axios from 'axios'
const axios = require('axios').default
import { posts } from '../redux/reducers'
type Props = {
  navigation: Navigation;
  
}

const Dummy_posts = ({navigation}: Props) => {
  const data=useAppSelector(state=>state.data)
  console.log(data);
  
  const dispatch = useDispatch()
  const handleScreenChange=()=>{
    navigation.navigate("Post_Detail")
  }
  useEffect(()=>{
    FetchPosts()

  },[data])
  const FetchPosts=() => {
    return async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          console.log(response.data);
          
            dispatch(posts(response.data));
                
        }).catch(err => {
            console.log(err);
        })
    }
}
  return (
    <View style={styles.container}>
      <Text> Post_Detail</Text>
     <ScrollView>
                {   data?
                 
                    data.map((item)=>
                  
                        <CustomCard 
                            userId={item?.userId}
                            id={item?.id}
                            title={item?.title}
                            body={item?.body}          
                        onPress={handleScreenChange}


                         />
                    ):<Text
                        style={
                        {
                            alignSelf:'center',
                            justifyContent:'center',
                            color:'black'
                        }
                    }>    Loading     </Text>
                }

                </ScrollView>
     </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
   
},
})

export default Dummy_posts
