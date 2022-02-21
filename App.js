import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.c}>٩(๑•̀ω•́๑)۶</Text>
      <Text style={styles.a}>110919018</Text>
      <Text style={styles.b}>林芷伃</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7ded6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100,
  },
  a:{
    fontSize:50,
    color:'#92796f',
  },
  b:{
    fontSize:30,
    color:'#595959',
  },
  c:{
    fontSize:50,
    color:'#a8a8a8',
  }
});
