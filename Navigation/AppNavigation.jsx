import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Todo from '../components/Todo'

const AppNavigation=()=>{

const Stack = createNativeStackNavigator()    

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp}/>
                <Stack.Screen name="Todo" options={{headerShown: false}} component={Todo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default AppNavigation;