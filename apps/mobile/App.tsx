import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import GetStartedpage from './components/GetStartedpage'
import ChooseAgripage from './components/ChooseAgripage'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header/>
        <GetStartedpage/>
        <ChooseAgripage/>
      </ScrollView>
    </SafeAreaView>
  )
}
 
export default App