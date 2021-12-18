import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/SignIn.js';
import Signup from '../screens/SignUp.js';
import ForgetPassword from '../screens/ForgetPassword.js'



const AuthStack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="SignIn" component={Signin} />
                <AuthStack.Screen name="Signup" component={Signup} />
                <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
            </AuthStack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation

