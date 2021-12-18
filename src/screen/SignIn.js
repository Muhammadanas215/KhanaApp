// import React, { useState } from 'react'
// import { View, Text, Image, StyleSheet, useWindowDimensions, TextInput, ScrollView } from 'react-native';
// import Custombutton from '../components/Custombutton';


// const Signin = () => {
//     const [email, setEmail] = useState('');
//     const [Password, setPassword] = useState('');

//     const LogIn = () => {
//         // console.warn(Username, Password, "user Logged In")

//     }

//     const ForgetPassword = () => {

//     }


//     const { height } = useWindowDimensions();
//     return (
//         <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={styles.root}>
//                 <Image source={require('../../assets/Logo.png')} style={[styles.logo, { height: height * 0.3 }]} resizemode='contain' />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     placeholderTextColor={'grey'}
//                     value={email}
//                     onChangeText={setEmail}

//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Password"
//                     placeholderTextColor={'grey'}
//                     value={Password}
//                     onChangeText={setPassword}
//                     secureTextEntry={true}
//                 />
//                 <Custombutton text="Sign In"
//                     onPress={LogIn} />
//                 <Custombutton
//                     text="Forget Password?"
//                     onPress={ForgetPassword}
//                     type="TERTIARY" />

                    

//                 <Custombutton
//                     text="Don't have an account? Create one"
//                     type="TERTIARY" />

//             </View>
//         </ScrollView>
//     )
// }
// const styles = StyleSheet.create({
//     root: {
//         flex: 2,
//         alignItems: 'center',
//         padding: 20,
//         color: 'black',
//     },
//     logo: {
//         width: '70%',
//         maxWidth: 150,
//         maxHeight: 200
//     },

//     input: {
//         backgroundColor: 'white',
//         width: '100%',
//         borderColor: '#e8e8e8',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginVertical: 5,
//         color: 'black',
//         padding: '10px'
//     },
// })

// export default Signin;
