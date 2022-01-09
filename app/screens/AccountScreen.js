import React, { useContext } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'

import AppScreen from '../components/AppScreen'
import AppListItem from '../components/lists/AppListItem';
import colors from '../config/colors';
import AppIcon from '../components/AppIcon';
import AppListItemSeparator from '../components/lists/AppListItemSeparator';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage'

const itemMenu = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen:"Messages",
  },
];

export default function AccountScreen({navigation}) {
  const {user,setuser} = useContext(AuthContext)
  const handleLoggout = ()=>{
    setuser(null)
    authStorage.removeToken()
  }
    return (
      <AppScreen style={styles.screen}>
        <View style={styles.container}>
          <AppListItem
            title={user.username}
            image={require("../assets/logo.jpg")}
            subtitle={user.email}
          ></AppListItem>
        </View>
        <View style={styles.container}>
          <FlatList
            data={itemMenu}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => {
              return (
                <AppListItem
                  title={item.title}
                  AppImageComponent={
                    <AppIcon
                      name={item.icon.name}
                      backgroundColor={item.icon.backgroundColor}
                    />
                  }
                  onPress={()=>navigation.navigate(item.targetScreen)}
                />
              );
            }}
            ItemSeparatorComponent={AppListItemSeparator}
          />
        </View>
        <View>
          <AppListItem
            title="Logout"
            onPress={handleLoggout}
            AppImageComponent={
              <AppIcon name="logout" backgroundColor="#ffe66d" />
            }
          />
        </View>
      </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.graylight
    },
    container:{
        marginVertical:20
    }
})
