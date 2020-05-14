import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Login",
};
  render(){
  
  return(
    <View style={styles.login}>
        
  <Text style= {styles.welcomeheader}> Welcome Back!</Text>

        <TextInput style = {styles.textinput} placeholder = "Student ID"
        underlineColorAndroid={'transparent'} />

        <TextInput style = {styles.textinput} placeholder = "School email"
        underlineColorAndroid={'transparent'} />

        <TextInput style = {styles.textinput} placeholder = "Password"
        secureTextEntry={true}
        underlineColorAndroid={'transparent'} />

        <Button style= {styles.btn,styles.btntext }
          title="Login"
          color = '#8b4513'
          onPress={() =>
              this.props.navigation.navigate('MenteApr') }/>

        <View style ={styles.text}>
        <Text> Don't have an account? </Text>
        <Button 
          title = "Sign  up"
          color='#008080'
          onPress={() =>
            this.props.navigation.navigate('Register') } />

      </View>

    </View>
  
  );
}
}

const styles = StyleSheet.create({
  login: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#008080',
    paddingLeft: 60,
    paddingRight: 60,
  },
  
  welcomeheader:{
    fontSize: 35,
    textAlign: 'center',
    color: '#2f4f4f',
    borderBottomColor: '#199187',
    fontWeight: 'bold',
    marginTop: 100,
    paddingVertical: 60,
    flexDirection: 'row',


  },

  textinput: {
    alignSelf: 'stretch',
    height: 20,
    marginBottom: 30,
    color: '#fff',
    fontWeight: 'bold',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  btn: {
    alignSelf: 'stretch',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#59cbbd',
      marginTop: 10,
      borderRadius: 15
  },
  btntext :{
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#199187'
  },
  text:{
    fontSize: 16,
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#199187',
    flexGrow: 1,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems: "center"
  },
  signupbtn: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }

});
