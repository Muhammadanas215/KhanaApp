import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, ScrollView, TextInput, Image } from 'react-native';
import Custombutton from './src/components/Custombutton'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="SignIn" component={Signin} />
                <AuthStack.Screen name="Signup" component={Signup} />
                {/* <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
            </AuthStack.Navigator>
        </NavigationContainer>
  )
}
const Signin = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const LogIn = () => {
      console.log(email, Password, "user Logged In")

  }

  const ForgetPassword = () => {

  }


  const { height } = useWindowDimensions();
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
              <Image source={require('./assets/Logo.png')} style={[styles.logo, { height: height * 0.3 }]} resizemode='contain' />
              <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor={'grey'}
                  value={email}
                  onChangeText={setEmail}

              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={'grey'}
                  value={Password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
              />
              <Custombutton text="Sign In"
                  onPress={LogIn} />
              <Custombutton
                  text="Forget Password?"
                  onPress={ForgetPassword}
                  type="TERTIARY" />

                  

              <Custombutton
                  text="Don't have an account? Create one"
                  type="TERTIARY" />

          </View>
      </ScrollView>
  )
}

const Signup = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  const RegisteredUser = () => {

  }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.root,]}>
              <Text style={styles.title}>Create an Account</Text>

              {/* Input Section */}

              <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor={'grey'}
                  value={Username}
                  onChangeText={setUsername}

              />
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor={'grey'}
                  value={Email}
                  onChangeText={setEmail}

              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={'grey'}
                  value={Password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={'grey'}
                  value={ConfirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
              />
              <Custombutton text="Register"
                  onPress={RegisteredUser} />
              <Text style={styles.text}>
                  By Registering, you confirm that you accept our <Text style={styles.link}>Term of Use</Text> and <Text style={styles.link}>Privacy Policy</Text>
              </Text>
              <Custombutton
                  text="Already have an account? Sign in"
                  type="TERTIARY"
                  />

          </View>
      </ScrollView>
  )
}
const ForgetPassword = () => {
  const [Email, setEmail] = useState('')
  return (
      <ScrollView>
          <View style={styles.root}>
              <Text style={styles.title}>Reset Your Password</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  placeholderTextColor={'grey'}
                  value={Email}
                  onChangeText={setEmail}

              />
              <Custombutton text="Send"
              />
              <Custombutton
                  text="Back to Sign in"

                  type="TERTIARY" />
          </View>

      </ScrollView>
  )
}

const styles = StyleSheet.create({
      root: {
          alignItems: 'center',
          padding: 20,
  
      },
      input: {
          backgroundColor: 'white',
          width: '100%',
          borderColor: '#e8e8e8',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginVertical: 5,
          color: '#040404',
          padding: '10px'
      },
      title: {
          fontSize: 25,
          fontWeight: 'bold',
          color: '#000a5d',
          margin: 10,
          padding: 20
      },
      text: {
          color: 'grey',
          marginVertical: 10
      },
      link: {
          color: '#0025ff',
      },
          logo: {
        width: '70%',
        maxWidth: 150,
        maxHeight: 200
    },
})