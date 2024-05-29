import { Button, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <View>
           <Text style={styles.logo}>Let's Get Started!</Text>
        </View>
        <View>
            <Image
              source={require('../assests/Programmer-bro.png')}
              style={styles.homeImage}
            />
        </View>

        <View>
            <TouchableOpacity 
              style={styles.btn}
              onPress={()=>navigation.navigate('SignUp')}
            >
                <Text style={styles.signup}>SignUp</Text>
            </TouchableOpacity>

          <View style={styles.ask}>
            <Text style={{color: '#fff'}}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={()=>navigation.navigate('Login')}
                >
                  <Text style={styles.log}>Log in</Text>
                </TouchableOpacity>
          </View>


        </View>
        
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },

  homeImage:{
    width: 400,
    height: 400,
  },
  btn: {
    paddingHorizontal: 150,
    paddingVertical: 13,
    backgroundColor: '#F3B431',
    borderRadius: 10
  },
  signup: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19
  },
  ask:{
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  log:{
    color: '#FFF222'
  }




})