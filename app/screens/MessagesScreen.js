import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import AppListItem from '../components/lists/AppListItem'
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';
import AppListItemDeleteAction from '../components/lists/AppListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/myimage.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2 inh",
    image: require("../assets/logo.jpg"),
  },
];
export default function MessagesScreen() {

    const [messages,setMessages] = useState(initialMessages)
    const [refreshing,setRefrshing] = useState(false);

    const handleDelete = message =>{
        // delete message 
       const newMessage = messages.filter(m=>m.id !== message.id)
       setMessages(newMessage)
    }
    return (
      <AppScreen>
        <FlatList
          data={messages}
          keyExtractor={(messages) => messages.id.toString()}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              image={item.image}
              subtitle={item.description}
              onPress={()=>console.log("fabien")}
              renderRightActions={() =>
              <AppListItemDeleteAction onPress={()=>handleDelete(item)}/>
              }
            ></AppListItem>
          )}
          ItemSeparatorComponent={AppListItemSeparator}
          refreshing={refreshing}
          onRefresh={
              ()=>{
                  setMessages([
                    {
                      id: 2,
                      title: "T2",
                      description: "D2 inh",
                      image: require("../assets/logo.jpg"),
                    },
                  ]);
              }
          }
        ></FlatList>
      </AppScreen>
    );
}

const styles = StyleSheet.create({

})
