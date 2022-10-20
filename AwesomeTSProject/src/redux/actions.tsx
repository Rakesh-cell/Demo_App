import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native'

import { Dispatch } from "@reduxjs/toolkit";
import { login,logout,posts } from "./reducers";
import { createAsyncThunk ,Action} from "@reduxjs/toolkit";
// import { useAppDispatch } from "../utils/hook";
// this gets upon the launching application to check for token
export const Init = () => {
    return async (dispatch:Dispatch) => {
        let token = await AsyncStorage.getItem('token');
        if (token !== null) {
            console.log('token fetched');
            dispatch({
                type:'LOGIN',
                payload:token
            })
        }

    }
}

//to check user credentials
// export const Loginuser= (mail:string, password:string) =>()=> {
//     return async (dispatch:Action) => {
//         let token = null;
//         try {
//             if (mail.toLowerCase() === 'test@gmail.com' && password == '1234') {
//                 token = mail + password;
//                 // here we can use login api to get token and then store it
//                 await AsyncStorage.setItem('token', token);
//                 console.log('token stored');
                  

//             }
//             else {
//                 Alert.alert("Invalid user", "mail:test@gmail.com password: 1234")

//             }
//         }
//         catch (err) {
//             // Alert.alert("Invalid user", "mail:Testuser@gmail.com password: 12341234")
//             console.log(err);
//         }
//         dispatch({
//             type:'LOGIN',
//             payload:token
//         })
       
//     }
// }




export const Logout = () => {
    return async (dispatch:Dispatch) => {
        await AsyncStorage.clear();
        dispatch({
            type:'LOGOUT',

        })
    }
}

// export const FetchPosts=() => {
//     return async (dispatch:Dispatch) => {
//         await axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             dispatch({
//                 type: 'POST',
//                 payload: response.data
//             });    
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }
