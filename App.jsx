import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './Navigation/AppNavigation'
import { Provider } from 'react-redux'
import { store } from './store/app'
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation/>
      <Toast/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})