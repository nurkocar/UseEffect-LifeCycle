import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

const App = (props) => {

  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    Alert.alert('CLARUSWAY','Hosgeldiniz!!')
  }, [])

  useEffect(() => {
    if (orderCount > 10) {
      Alert.alert('CLARUSWAY', '10 dan fazla secim yaptiniz')
    }
  }, [orderCount])

  // Alert.alert('HOSGELDINIZ')

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 40 }}>Count {orderCount}</Text>

        <Button
          title='Select Order'
          onPress={() => setOrderCount(orderCount + 1)}
        />

      </View>
    </SafeAreaView>
  )
};

export default App;