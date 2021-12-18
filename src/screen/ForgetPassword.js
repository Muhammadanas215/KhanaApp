// import React, { useState } from 'react'
// import { View, Text, ScrollView, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
// import Custombutton from '../components/Custombutton';


// const ForgetPassword = () => {
//     const [Email, setEmail] = useState('')
//     return (
//         <ScrollView>
//             <View style={styles.root}>
//                 <Text style={styles.title}>Reset Your Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Your Email"
//                     placeholderTextColor={'grey'}
//                     value={Email}
//                     onChangeText={setEmail}

//                 />
//                 <Custombutton text="Send"
//                 />
//                 <Custombutton
//                     text="Back to Sign in"

//                     type="TERTIARY" />
//             </View>

//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     root: {
//         alignItems: 'center',
//         padding: 20,
//     },
//     title: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: '#000a5d',
//         margin: 10,
//         padding: 20
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
// })
// export default ForgetPassword
