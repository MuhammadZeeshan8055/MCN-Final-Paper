import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
       Hello Pakistan
      </Text><Button
        title="Click"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View></SafeAreaView>
);const styles = StyleSheet.create({
 
});

export default App;
