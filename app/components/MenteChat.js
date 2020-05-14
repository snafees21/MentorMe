import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import 'react-native-gesture-handler';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGluZ2VyaW5nLWdsYWRlLTQifQ.LV8DBuAMuU3WfxSBEtO7zWcERekcrmnRk5kB0PAGmYI';

const user = {
  id: 'lingering-glade-4',
  name: 'Lingering glade',
  image:
    'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

export default class MenteChat extends React.Component {
    static navigationOptions = {
        title: 'MenteChat',
    };
    
    render(){
        const channel = chatClient.channel("messaging", "lingering-glade-4");
        channel.watch();

        return(

            <View style={styles.MenteChat}>
               
        
          <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}> 
           
          <View >
            <Text style = {styles.welcomeheader}> Meet Your Mentor!</Text>

            </View>
            <View style={{ display: "flex", height: "85%" }}> 
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
      </View>
        );
    }
}

const styles = StyleSheet.create({
  
    welcomeheader:{
      justifyContent: 'flex-end',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingBottom: 20,
      borderBottomColor: '#199187',
      borderWidth: 1,
      color: '#fff',
      backgroundColor: '#36485f',
      padding: 2,
      margin: 10,
      marginTop: 25


    }
});