import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button
} from 'react-native';

const App = (props) => {

  // const [counter, setCounter] = useState(0);
  // const [myNumber, setMyNumber] = useState(0);
  // const [createDate, setCreateDate] = useState(new Date());


  // useEffect(() => {
  //   console.log('USE EFFECT[]')
  // }, [])

  // useEffect(() => {
  //     <View>
  //       <Text>Merhaba</Text>
  //     </View>
  // }, [counter])

  // useEffect(() => {
  //   console.log('use effect my number!!')
  // }, [myNumber])

  // console.log('RENDER')
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40 }}>Count: {counter}</Text>

        <Button
          title='Up'
          onPress={() => setCounter(counter + 1)}

        />

        <Button
          title='Change number'
          onPress={() => setMyNumber(myNumber + 1)}

        />
      </View>
    </SafeAreaView>
  );
};
export default App;