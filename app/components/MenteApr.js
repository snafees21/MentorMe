import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class MenteApr extends React.Component {
  static navigationOptions = {
    title: 'MenteApr',
};

  render(){
  return(
    <View style={styles.MenteApr}>
        
  <Text style= {styles.welcomeheader}> You're approved to be a Mentee!</Text>
        
        <Text style= {styles.subheader}> Tell us about you.  </Text>
   
        <View >
        <TouchableOpacity>
            <Text style = {styles.upld}>Choose Photo</Text>
            </TouchableOpacity>
        </View>
    
        <View >
            <Text style = {styles.desc}> Major: </Text>
            <TextInput style = {styles.textinput}
                underlineColorAndroid= {'transparent'} />
        </View>

        <View >
            <Text style = {styles.desc}> Interests/hobbies: </Text>
            <TextInput style = {styles.textinput}
                underlineColorAndroid= {'transparent'} />
        </View>
        <View >
            <Text style = {styles.desc}> College/personal goals: </Text>
            <TextInput style = {styles.textinput}
                underlineColorAndroid= {'transparent'} />
        </View>
        <View >
            <Text style = {styles.desc}> Mentor Preferences: </Text>
                <Text style = {styles.subtext}> (Optional)</Text>
            <TextInput style = {styles.textinput}
                underlineColorAndroid= {'transparent'} />
        </View>

        <Button style= {styles.button,styles.btntext} 
        title="Find your Mentor!"
        color = '#8b4513'
        onPress={() =>
          this.props.navigation.navigate('MentePair')}/>
        
    
        <Text style ={styles.text}> (It may take upto 24 hours)</Text>

    </View>
  
  );
}
}

const styles = StyleSheet.create({
  MenteApr: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#008080',
    paddingLeft: 60,
    paddingRight: 60,
  },
  subheader: {
    fontSize: 23,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#2f4f4f',
    paddingBottom: 10,
    marginBottom: 15,
    fontWeight: 'bold',

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
    paddingBottom: 10,
    borderBottomColor: '#199187',
    fontWeight: 'bold',
  },

  textinput: {
    alignSelf: 'stretch',
    fontSize: 20,
    height: 30,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#59cbbd',
    marginTop: 10,
    borderRadius: 15,

  },
  btntext :{
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#199187'
  },
  text:{
    fontSize: 12,
    color: '#000000',
    paddingBottom: 10,
    borderBottomColor: '#199187',
    flexGrow: 1,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center', 
    textAlign: 'center',
    },
    desc: {
        fontSize: 15, 
        alignItems: 'stretch',
        color: '#fff',
        flexDirection: 'row',

        },
    subtext: { 
        fontSize: 10,
        color: '#fff',

    },
    upld :{
        fontSize: 15, 
        alignItems: 'stretch',
        color: '#000000',
        flexDirection: 'row',
        textDecorationLine: 'underline',    
        marginBottom: 19,

    }


  }
);
