import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message'


const Login = () => {
const navigation = useNavigation()
const [isEye, setIsEye] = useState(false)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

const detail = useSelector((state)=>state.cart.user)

console.log(detail)

const eyeHandler=()=>{
    setIsEye(!isEye)
}


const errorHandler2=()=>{
    setTimeout(()=>{
        setEmailError('')
    }, 2000)
}
const errorHandler3=()=>{
    setTimeout(()=>{
        setPasswordError('')
    }, 2000)
}

const loginHandler=()=>{
    if(!email){
        setEmailError("*email can not be empty")
        return errorHandler2()
    }
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        setEmailError('*Please enter a valid email')
        errorHandler2()
        return 
    }
    
    if(!password){
        setPasswordError("*password can not be empty")
        return errorHandler3()
    }
    
    if(password.length < 5){
        setPasswordError('*Please enter minimum 5 character')
        errorHandler3()
        return 
    }

    

    if(detail.email !== email || detail.password !== password){
        // Alert.alert("Invalid username or password")
        Toast.show({
            type: "error",
            text1: "Invaid email or password"
        })
        return 
    } else{
        Toast.show({
            type: "success",
            text1: "Login successful",
            onHide: ()=>{
                navigation.navigate('Todo')
            }
        })
    }
      setEmail('')
      setPassword('')
}



  return (
    <SafeAreaView style={styles.main}>
        <ScrollView>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Icon name="arrowleft" color='black' size={30} style={styles.leftArrow} />
        </TouchableOpacity>
        <View style={styles.container}>
            <Image
                source={require('../assests/Computer-login-bro.png')}
                style={styles.signupImg}
            />

        </View>

        <View style={styles.mainSec}>
                <View style={styles.inp_section}>
                    <Text style={{color: 'black'}}>Email</Text>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="#888"
                        style={styles.inp}
                        value={email}
                        onChangeText={(data)=>setEmail(data)}
                    />

                    <Text style={styles.error}>{emailError}</Text> 

                    <Text style={{color: 'black'}}>Password</Text>

                      

                   <View style={styles.password_inp}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="#888"
                        style={styles.inp1}
                        secureTextEntry={isEye ? false : true}
                        value={password}
                        onChangeText={(data)=>setPassword(data)}
                    />
                    {isEye && (
                        <Entypo name="eye" color='black' size={30} onPress={eyeHandler} />
                        
                    )}
                    {!isEye && (
                        <Entypo name="eye-with-line" color='black' size={30} onPress={eyeHandler} />
                    )}
                   </View>

                   <Text style={styles.error}>{passwordError}</Text>    

                     <Text style={{color: 'black', alignSelf: 'flex-end', marginTop:-10}}>Forget Password?</Text>             

                    <TouchableOpacity style={styles.signBtn} onPress={loginHandler}>
                        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                        
                    <Text style={{color:'black', textAlign:'center', marginTop:25, fontSize:20, fontWeight:'bold'}}>Or</Text>

                    <View style={styles.icons}>
                        <Icon name="google" color='black' size={30}  />
                        <Icon name="apple1" color='black' size={30}  />
                        <Icon name="facebook-square" color='black' size={30}  />
                    </View>

                    <View style={styles.ask}>
                        <Text style={{color:'black'}}>Already have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={styles.log}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    leftArrow: {
        backgroundColor: 'yellow',
        width: 40,
        height: 35,
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    signupImg: {
        height: 200,
        width: 200,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: -20
    },
    main: {
        backgroundColor: 'skyblue',
        flex: 1,
        
    },
    mainSec: {
        backgroundColor: '#fff',
        height: 625,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
    },
    inp_section: {
        marginHorizontal: 20,
        marginVertical: 50,
        // height: 507,
    },
    inp: {
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        borderRadius: 10,
        marginVertical: 7,
        marginBottom: 15
    },
    signBtn: {
        color: 'black',
        paddingVertical: 13,
        backgroundColor: '#F3B431',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    ask:{
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15
      },
      log:{
        color: 'orange'
      },
      icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:25,
        marginBottom:20
      },
      password_inp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 7,
        marginBottom: 15,
        paddingHorizontal:10
      },
      inp1: {
        color: 'black'
      },
      error:{
        color: 'red',
        marginTop: -10
      }















})