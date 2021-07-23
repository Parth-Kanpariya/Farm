import { View,Text,StyleSheet, TextInput, Button, TouchableOpacity,Image, SafeAreaView ,StatusBar} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Google from './Google';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//     } from 'react-native-google-signin';



    // _signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const {accessToken, idToken} = await GoogleSignin.signIn();
    //       setloggedIn(true);
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //         alert('Cancel');
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         alert('Signin in progress');
    //         // operation (f.e. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         alert('PLAY_SERVICES_NOT_AVAILABLE');
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };


    //   signOut = async () => {
    //     try {
    //       await GoogleSignin.revokeAccess();
    //       await GoogleSignin.signOut();
    //       setloggedIn(false);
    //       setuserInfo([]);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };


const LoginScreen=({navigation})=>{

    // const [loggedIn, setloggedIn] = useState(false);
    // const [userInfo, setuserInfo] = useState([]);

    // useEffect(() => {
    //     GoogleSignin.configure({
    //       scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
    //       webClientId:
    //         '8920350105-oni03238kii9guavfhvuh8iq2nbp3ci0.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //     });
    //   }, []);

    return(
        <SafeAreaView style={styles.container}>
       
       <View style={styles.LoginScreen} >
            
            <View style={styles.photo}>
                   <Image source={require("../assets/logo.png")} style={styles.logo_image} />
            </View>
           
           <View style={styles.half_screen}> 
            <View style={styles.credential}>
                    <View style={styles.email}>
                        <Text>Email</Text>
                        <TextInput placeholder="Enter Email" keyboardType="email-address" autoCompleteType="email" style={styles.inputBox}  />
                    </View>
                
                    <View style={styles.password}>
                        <Text>Password</Text>
                        <TextInput placeholder="Enter password" keyboardType="default" style={styles.inputBox} textContentType="password" />
                        {/* //we will use securetextEntry */}
                    </View>

                    <View style={styles.sign_Buttons}>
                   
                        <View style={styles.content}>
                            <TouchableOpacity style={styles.Button_style}>
                                <Text style={{color:"white"}}>Sign In</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.content}>
                            <Text style={{textAlign:"center"}}>or</Text>
                        </View>

                        <View style={styles.content}>
                             {/* we will use touchble opacity */}
                             <TouchableOpacity style={styles.Button_style}>
                                 <Text style={{color:"white"}}>Sign In with Google</Text>
                                
                             </TouchableOpacity>

                             {/* <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              /> */}
                             {/* <Google /> */}
                        </View>
                   
                   </View>
                  
                   
                    
                </View>

                
           </View>
          
           
            
            
          
            <TouchableOpacity style={{marginBottom:20,alignItems:"center"}} onPress={()=>{navigation.push('Create')}}>
                <Text style={{color:"#4c8bf5",fontSize:18}}>create account</Text>
            </TouchableOpacity> 
            
            
        </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    LoginScreen:{
        // backgroundColor:"teal",
        height:"80%",
        width:"80%",
        flex:1,
        justifyContent:"center"
    },
    inputBox:{
        padding:5,
        borderWidth:1,
        borderColor:"teal",
        borderRadius:5,
        marginTop:3,
        backgroundColor:"#f1f3f6"
    },
    password:{
        marginTop:12
    },
    photo:{
        marginTop:60,
        // backgroundColor:"red",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    credential:{
       flex:1,
      
    },
    sign_Buttons:{
        marginTop:25
    },
    half_screen:{
        marginTop:40,
        flex:2
    },
    content:{
        marginVertical:6
    },
    Button_style:{
        alignItems:"center",
        justifyContent:"center",
        // borderWidth:1,
        height:45,
        elevation: 3,
        backgroundColor: '#4c8bf5',
        borderRadius:5,
        width:"80%",
        marginLeft:30,
        shadowColor:"black",
        shadowOffset:{height:20, width:20},
        shadowOpacity:0.7,
        

    },

    logo_image:{
        height:200,
        width:200,
        borderRadius:100,
        
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:Platform.OS==='android'? StatusBar.currentHeight : 0
      },
   
    

});

export default LoginScreen;

