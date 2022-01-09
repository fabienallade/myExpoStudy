import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AppScreen from '../components/AppScreen'
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms'
import AppPicker from '../components/AppPicker';
import AppFormPicker from '../components/forms/AppFormPicker';
import * as Yup from "yup";
import ListingApi from "../api/listings";
import * as Location from "expo-location"
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import UploadSCreen from './UploadSCreen';

const categories = [
  {
    label: "furniture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "clothing",
    value: 2,
    backgroundColor: "blue",
    icon: "lan",
  },
  {
    label: "pantalon",
    value: 3,
    backgroundColor: "green",
    icon: "lock",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.object().required().nullable(true).label("Category"),
  description: Yup.string().required().label("Description"),
  images: Yup.array().min(1, "Selectionner au moins une image").label("Images")
});
export default function ListEditScreen() {
  const userLocation= useLocation()
  const [uploadVisible, setuploadVisible] = useState(false)
  const [progress, setprogress] = useState(0)

  const handleSubmit =async (listing,{resetForm})=>{
    setprogress(0)
    setuploadVisible(true)
   const result = await ListingApi.addListing({...listing,userLocation},(progress) => setprogress(progress))
   if(!result.ok){
    setuploadVisible(false)
   }
   resetForm()
  }
  return (
    <AppScreen style={styles.container}>
      <ScrollView>
      <UploadSCreen onDone={() => setuploadVisible(false)} progress={progress} visible={uploadVisible} />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <AppFormField
            name="title"
            placeholder="Title"
            autoCorrect={true}
            autoCapitalize="none"
            maxLength={255}
          />
          <AppFormField
            name="price"
            placeholder="price"
            maxLength={8}
            autoCorrect={true}
            keyboardType="numeric"
            width={"30%"}
          />
          <AppFormPicker
            name="category"
            title="category"
            placeholder="category"
            PickerItemComponent={AppCategoryPickerItem}
            items={categories}
            width={"50%"}
            numberOfColums={categories.length}
          />
          <AppFormField
            name="description"
            placeholder="Description"
            autoCorrect={true}
            multiline={true}
            numberOfLines={3}
            keyboardType="default"
          />
          <AppSubmitButton color="danger" title="Post" />
        </AppForm>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
})
