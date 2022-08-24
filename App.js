import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, View,StyleSheet,ScrollView,Text,TextInput,Image,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DefaultTheme } from 'react-native-paper';
import imagesone from "./image/mainimg.png";
import image2 from "./image/images2.png";
import Image3 from "./image/imagesf.png";
import Image4 from "./image/Full.jpg";
import Image5 from "./image/thumbnail.jpg";
import { DataTable } from 'react-native-paper';
import RNPickerSelect from "react-native-picker-select";


function Home({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>

      <Image style={styles.logo} source={imagesone}/>

        <Pressable style={styles.box} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable style={styles.box} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.linktest}  onPress={() => navigation.navigate('Fuels')}>
        Skip</Text>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff',
    height:560,
  },
  logo:{
    alignSelf:"center",
    width:280,
    height:300,
    marginTop:40,
    marginBottom:10,
    padding:50,  
  },

  box:{
    marginTop:20,
    justifyContent:'center',
    alignSelf:'center',
    width:300,
    height:40,
    backgroundColor:'#ff0066',
    borderRadius:5,
    marginBottom:5,
  },

  buttonText:{
    alignSelf:'center',
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 20,
  },

  linktest:{
    marginTop:15,
    marginLeft:300,
    fontSize:15,
    color:'red',
  }
});



function SignIn({ navigation }) {
  return (
    <ScrollView style={styles3.scrollView}>
      <View style={styles3.container}>
     
      <Image style={styles3.logo} source={{uri:'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000'}}/>
     
        <TextInput style={styles3.input} placeholder="Username"/>
        <TextInput style={styles3.input} placeholder="Password"/>
      
        <Pressable style={styles3.box} onPress={()=>Alert.alert('Sign in successful...')}>
          <Text style={styles3.buttonText}>Sign In</Text>
        </Pressable>

        <Text style={styles3.linktest}  onPress={() => navigation.navigate('Signup')}>
        Dont have an account? Sign up</Text>

        <Text style={styles3.linktest}  onPress={() => navigation.navigate('Forget')}>
        Forget password?</Text>

      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles3 = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff',
    height:560,
  },
  headtext:{
    color:'#fff',
    fontSize: 30,
    textAlign:'center',
    padding: 10,
    backgroundColor:'#cc0088',
    fontWeight:'bold',
  },
  logo:{
    alignSelf:"center",
    width:280,
    height:200,
    marginTop:50,
    marginBottom:10,
    padding:50,  
  },
  input:{
    width:300,
    padding:7,
    marginTop:10,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#404040',
    borderWidth: 1,
  },

  box:{
    marginTop:25,
    justifyContent:'center',
    alignSelf:'center',
    width:300,
    height:40,
    backgroundColor:'#ff0066',
    borderRadius:5,
    marginBottom:5,
  },

  buttonText:{
    alignSelf:'center',
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 20,
  },
  linktest:{
    textAlign:'center',
    marginTop:10,
    fontSize:15,
  },
});



// Sign up

function Signup({ navigation }) {
  return (
    <ScrollView style={styles2.scrollView}>
    <View style={styles2.container}>

      <Image style={styles2.logo} source={image2}/>
     
        <TextInput style={styles2.input} placeholder="Username"/>
        <TextInput style={styles2.input} placeholder="Email"/>
        <TextInput style={styles2.input} placeholder="Password"/>

        <Pressable style={styles2.box} onPress={()=>Alert.alert('Sign up successful...')}>
          <Text style={styles2.buttonText}>Sign Up</Text>
        </Pressable>

        <Text style={styles2.linktest} onPress={() => navigation.navigate('SignIn')}>
        You Already have an account? Sign In</Text>

        

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles2 = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff',
    height:560,
  },
  logo:{
    alignSelf:"center",
    width:280,
    height:200,
    marginTop:30,
    marginBottom:10,
    padding:50,  
  },
  input:{
    width:300,
    padding:7,
    marginTop:10,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#404040',
    borderWidth: 1,
  },

  box:{
    marginTop:25,
    justifyContent:'center',
    alignSelf:'center',
    width:300,
    height:40,
    backgroundColor:'#ff0066',
    borderRadius:5,
    marginBottom:5,
  },

  buttonText:{
    alignSelf:'center',
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 20,
  },
  linktest:{
    textAlign:'center',
    marginTop:10,
    fontSize:15,
  },

});



// forget passsword

function Forget({ navigation }) {
  return (
    <ScrollView style={styles4.scrollView}>
    <View style={styles4.container}>

      <Image style={styles4.logo} source={Image3}/>
     
        <TextInput style={styles4.input} placeholder="Email"/>

        <Pressable style={styles4.box} onPress={()=>Alert.alert('Password Send Succesful...')}>
          <Text style={styles4.buttonText} >Send Password to email</Text>
        </Pressable>
        

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles4 = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff',
    height:560,
  },
  logo:{
    alignSelf:"center",
    width:280,
    height:200,
    marginTop:30,
    marginBottom:10,
    padding:50,  
  },
  input:{
    width:300,
    padding:7,
    marginTop:30,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#404040',
    borderWidth: 1,
  },

  box:{
    marginTop:25,
    justifyContent:'center',
    alignSelf:'center',
    width:300,
    height:40,
    backgroundColor:'#ff0066',
    borderRadius:5,
    marginBottom:5,
  },

  buttonText:{
    alignSelf:'center',
    color: "#fff",
    textTransform: 'uppercase',
    fontSize: 20,
  },
  linktest:{
    textAlign:'center',
    marginTop:10,
    fontSize:15,
  },

});



// Category list window

function Fuels({ navigation }) {
  return (
  <View style={styles5.container}>
   
   <FontAwesome name="bell" style={styles5.notification}  onPress={() => navigation.navigate('Notification')}
   /> 

   <Text style={styles5.mainText}>- Select Your Fuel category - </Text>

   <Pressable style={styles5.box} onPress={() => navigation.navigate('Petrol')}>
   <Text style={styles5.buttonText}>Petrol</Text>
   <FontAwesome name="arrow-right" style={styles5.icon} 
   /> 
   </Pressable>

   <Pressable style={styles5.box}>
   <Text style={styles5.buttonText}>Diesal</Text>
   <FontAwesome name="arrow-right" style={styles5.icon} 
   /> 
   </Pressable>

   <Pressable style={styles5.box}>
   <Text style={styles5.buttonText}>Lp Gas</Text>
   <FontAwesome name="arrow-right" style={styles5.icon} 
   /> 
   </Pressable>

   <Pressable style={styles5.box}>
   <Text style={styles5.buttonText}>Kerosine</Text>
   <FontAwesome name="arrow-right" style={styles5.icon} 
   /> 
   </Pressable>


   <Pressable style={styles5.mapbox} onPress={() => navigation.navigate('Map')}>
   <FontAwesome name="map-marker" style={styles5.map} 
   /> 
   </Pressable>

  </View>
   
  );
}
const styles5 = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor:'#fff',
},
notification:{
  fontSize:30,
  textAlign:'right',
  paddingTop:20,
  paddingRight:30,
  paddingBottom:10,
},
mainText:{
  fontSize:25,
  padding:10,
  textAlign:'center',
},
box:{
  marginTop:15,
  justifyContent:'center',
  alignSelf:'center',
  width:300,
  height:50,
  backgroundColor:'#ff5c33',
  borderRadius:5,
  marginBottom:5,
},
box2:{
  marginTop:55,
  justifyContent:'center',
  alignSelf:'center',
  width:300,
  height:60,
  backgroundColor:'#111',
  borderRadius:5,
  marginBottom:5,
},
buttonText:{
  textAlign:'left',
  marginLeft:20,
  color: "#fff",
  textTransform: 'capitalize',
  fontSize: 20,
},
icon:{
  position:'absolute',
  color:'#fff',
  marginLeft:260,
  fontSize:22,
},
mapbox:{
  marginTop:20,
  width:110,
  height:110,
  backgroundColor:'#33cc33',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:100,
},
map:{
  fontSize:70,
  color:'red',
  alignSelf:'center',
 
}

});




function Notification({ navigation }) {
  return (
    <View style={styles6.container}>
  <FontAwesome name="bell-o" style={styles6.noti} 
   /> 
   <Text style={styles6.txt}>You have't new notifications !</Text>
  
  </View>


  );
}

const styles6 = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  txt:{
    fontSize:20,
    alignSelf:'center',
    marginTop:15,
  },
  noti:{
    marginTop:15,
    fontSize:40,
    color:'#2eb82e',
    alignSelf:'center',
  }
});



function Petrol({ navigation }) {
  return(
    <View style={styles7.container}>
      <FontAwesome name="bell" style={styles7.notification}  onPress={() => navigation.navigate('Notification')}
      />
    <Text style={styles7.typtxt}>Select Your Petrol Type</Text>
    <RNPickerSelect style={styles7.selectlist} onValueChange={(value) => console.log(value)}
    items={[
           { label: "Octain 92", value: "Octain 92" },
           { label: "Octain 95", value: "Octain 95" },
    ]} />  

    <View style={styles7.sersection}>
      <TextInput style={styles7.input} placeholder="City or Town..."/>
      <Pressable style={styles7.serbtn}> 
      <FontAwesome name="search" style={styles7.txt} 
      />
      </Pressable>

      <TextInput style={styles7.input} placeholder="Diatrict..."/>
      <Pressable style={styles7.serbtn}> 
      <FontAwesome name="search" style={styles7.txt} 
      />
      </Pressable>
    </View>

    <Pressable style={styles7.details}  onPress={() => navigation.navigate('Details')}>
      <Text style={styles7.detxt}>D.A Samarasigha Ceypetco</Text>
    </Pressable>

    <Pressable style={styles7.details}>
      <Text style={styles7.detxt}>Power IOC</Text>
    </Pressable>

    <Pressable style={styles7.details}>
      <Text style={styles7.detxt}>Nihal Ceypetco</Text>
    </Pressable>

    <Pressable style={styles7.details}>
      <Text style={styles7.detxt}>Grow Ceypetco</Text>
    </Pressable>

    </View>
  );
}

const styles7 = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  notification:{
    fontSize:30,
    textAlign:'right',
    paddingTop:20,
    paddingRight:30,
    paddingBottom:10,
  },
  typtxt:{
    fontSize:15,
    marginLeft:20,
  },
  selectlist:{
    borderWidth:1,
    width:100,
    Color:'red',
  },
  sersection:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
    marginTop:15,
    marginBottom:15,
  },
  input:{
    width:115,
    height:40,
    borderColor:'#a6a6a6',
    borderWidth:1,
    paddingLeft:5,
    backgroundColor:'#e6e6e6',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
 },
 serbtn:{
  justifyContent:'center',
  width:40,
  height:40,
  marginRight:5,
  backgroundColor:'#ff5c33',
  borderTopRightRadius:5,
  borderBottomRightRadius:5,
},
txt:{
  alignSelf:'center',
  fontSize:20,
  color:"#fff",
},
details:{
  marginTop:20,
  width:315,
  height:60,
  marginLeft:20,
  marginRight:20,
  borderWidth:1,
  borderColor:'#3366ff',
  borderRadius:5,
  justifyContent:'center',
  backgroundColor:'#e6ecff',
},
detxt:{
  fontSize:20,
  marginLeft:20,
}
});


function Details({ navigation }){
  return(
    <View style={styles8.container}>
      
      <Text style={styles8.maintxt}>D.A Samarasigha Ceypetco</Text>
      <Image source={Image4} style={styles8.Fimg}></Image>

      <DataTable style={styles8.tablecontainer}>

      <DataTable.Row>
        <DataTable.Cell>Petrol Type :</DataTable.Cell>
        <DataTable.Cell>Octain 92</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Available leters :</DataTable.Cell>
        <DataTable.Cell>6700 L</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Price per leters :</DataTable.Cell>
        <DataTable.Cell>420 RS</DataTable.Cell>
      </DataTable.Row>
      
      <DataTable.Row>
        <DataTable.Cell>Addres :</DataTable.Cell>
        <DataTable.Cell>New Kandy road, Mahaiyawa</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Teliphone:</DataTable.Cell>
        <DataTable.Cell>081-5764523</DataTable.Cell>
      </DataTable.Row>

    </DataTable>

    </View>
  );
}


const styles8 =StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  maintxt:{
    fontSize:25,
    textAlign:'center',
    marginTop:10,
    color:'#ff00bf',
    fontWeight:'bold',
  },
  tablecontainer:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
  },
  Fimg:{
    height:200,
    width:300,
    alignSelf:'center',
    marginTop:10,
    borderRadius:10,
  }
});




function Map({ navigation }) {
  return (
    <View style={styles9.container}>
      <Image source={Image5} style={styles9.img}/>
  </View>
  );
}

const styles9 = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  img:{
    height:'100%',
  }

});



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="Fuels" component={Fuels} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Petrol" component={Petrol}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Map" component={Map}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
