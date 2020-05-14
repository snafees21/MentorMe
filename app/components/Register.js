
import React , {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Button
} from 'react-native';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
};

  render(){
  return(
    <View style={styles.register}>
        
  <Text style= {styles.welcomeheader}> Welcome to</Text>

  <Text style= {styles.header}> MentorMe{'\n'}</Text>

        <Text style= {styles.subheader}> Sign Up </Text>

        <TextInput style = {styles.textinput} placeholder = "Student ID"
        underlineColorAndroid= {'transparent'} />

        <TextInput style = {styles.textinput} placeholder = "School email"
        underlineColorAndroid={'transparent'} />

        <TextInput style = {styles.textinput} placeholder = "Password"
        secureTextEntry={true}
        underlineColorAndroid={'transparent'} />

        <TextInput style = {styles.textinput} placeholder = "Class of Year"
        underlineColorAndroid={'transparent'} />

        <Button style = {styles.btntext, styles.button}
        title="Register"
        color = '#8b4513'
        onPress={() =>
          this.props.navigation.navigate('MenteApr')}/>
    
        <View style ={styles.text}>
        <Text> Already have an account? </Text>
        <Button style={styles.loginbtn}
          title="Login"
          color='#008080'
          marginTop= '10'
          onPress={() =>
            this.props.navigation.navigate('Login')}/>
        
      </View>
       

    </View>
  
  );
}
}

const styles = StyleSheet.create({
  register: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#008080',
    paddingLeft: 60,
    paddingRight: 60,
    
  },
  subheader: {
    fontSize: 24,
    justifyContent: 'flex-end',
    color: '#2f4f4f',
    fontWeight: 'bold',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#ff4500',
    borderBottomWidth: 1,
  },
  welcomeheader:{
    justifyContent: 'flex-end',
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#199187',
    marginTop: 50
  },
  header: {
    fontSize: 45,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#199187',
    fontWeight: 'bold',
  },

  textinput: {
    alignSelf: 'stretch',
    height: 20,
    marginBottom: 30,
    color: '#2f4f4f',
    fontWeight: 'bold',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

  button: {
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
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: "center", 
    alignItems: "center"
    },

  loginbtn: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',


  }

});
