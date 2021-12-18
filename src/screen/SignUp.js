// import React, { useState } from 'react'
// import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
// import Custombutton from '../components/Custombutton';


// const Signup = () => {
//     const [Username, setUsername] = useState('');
//     const [Email, setEmail] = useState('');
//     const [Password, setPassword] = useState('');
//     const [ConfirmPassword, setConfirmPassword] = useState('');


//     const RegisteredUser = () => {

//     }

//     return (
//         <ScrollView showsVerticalScrollIndicator={false}>
//             <View style={[styles.root,]}>
//                 <Text style={styles.title}>Create an Account</Text>

//                 {/* Input Section */}

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     placeholderTextColor={'grey'}
//                     value={Username}
//                     onChangeText={setUsername}

//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Email"
//                     placeholderTextColor={'grey'}
//                     value={Email}
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
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Confirm Password"
//                     placeholderTextColor={'grey'}
//                     value={ConfirmPassword}
//                     onChangeText={setConfirmPassword}
//                     secureTextEntry={true}
//                 />
//                 <Custombutton text="Register"
//                     onPress={RegisteredUser} />
//                 <Text style={styles.text}>
//                     By Registering, you confirm that you accept our <Text style={styles.link}>Term of Use</Text> and <Text style={styles.link}>Privacy Policy</Text>
//                 </Text>
//                 <Custombutton
//                     text="Already have an account? Sign in"
//                     type="TERTIARY"
//                     />

//             </View>
//         </ScrollView>
//     )
// }
// const styles = StyleSheet.create({
//     root: {
//         alignItems: 'center',
//         padding: 20,

//     },
//     input: {
//         backgroundColor: 'white',
//         width: '100%',
//         borderColor: '#e8e8e8',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginVertical: 5,
//         color: '#040404',
//         padding: '10px'
//     },
//     title: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: '#000a5d',
//         margin: 10,
//         padding: 20
//     },
//     text: {
//         color: 'grey',
//         marginVertical: 10
//     },
//     link: {
//         color: '#0025ff',
//     }
// })

// export default Signup;
