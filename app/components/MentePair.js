import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';



export default class MentePair extends React.Component {
  static navigationOptions = {
    title: 'MentePair',
};

    render(){
        return(
            <View style={styles.MentePair}>

            <Text style= {styles.welcomeheader}> You've been paired with a Mentor!</Text>

           

            <View > 
             <Text style = {styles.desc}>John Doe </Text>
             <Text style = {styles.desc1}> Major: Computer Science, Senior</Text>
            </View>

          

          <Button style= {styles.button,styles.btntext} 
          title="Schedule A Meeting"
          color='#8b4513' 
          onPress={() =>
          this.props.navigation.navigate('MenteChat')} />
      

            </View>

        )
    }
}
const styles = StyleSheet.create({
    MentePair: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#008080',
    paddingLeft: 60,
    paddingRight: 60,
    },
    
    welcomeheader:{
      fontSize: 33,
      textAlign: 'center',
      color: '#2f4f4f',
      paddingBottom: 70,
      borderBottomColor: '#199187',
      fontWeight:'bold'
  
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
    desc: {
      fontSize: 25, 
      justifyContent: 'center',
      textAlign:'center',
      color: '#fff',
      flexDirection: 'row',
  
    },
    desc1: {
      fontSize: 18, 
      justifyContent: 'center',
      textAlign:'center',
      color: '#fff',
      flexDirection: 'row',
      marginBottom: 35,

  
    }
  });
  
