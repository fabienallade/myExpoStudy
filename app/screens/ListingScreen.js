import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import AppScreen from '../components/AppScreen'
import AppCard from "../components/AppCard";
import ListingApi from '../api/listings'
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButtons';
import AppActivityIndicator from '../components/AppActivityIndicator';



export default function ListingScreen({navigation}) {
  const [listings,setListings] = useState([])
  const [errors,setErrors] = useState(false)
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    loadListings()
  }, [])
  const loadListings = async ()=>{
    const response = await ListingApi.getListings();
    setLoading(true)
    if (!response.ok){
      setLoading(false)
      setErrors(true);
    }else{
      setErrors(false);
      setLoading(false);
      setListings(response.data);
    }
  }
    return (
      <>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        {errors && (
          <>
            <View style={styles.errorMessage}>
              <AppText>Impossible de recevoir les informations</AppText>
              <AppButton title="Retry" onPress={loadListings}></AppButton>
            </View>
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => {
            return (
              <AppCard
                title={item.title}
                subtitle={"£" + item.price}
                image={item.images}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            );
          }}
        />
      </AppScreen>
      </>
    );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.graylight,
    padding: 20,
  },
  errorMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
