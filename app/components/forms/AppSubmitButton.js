import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik';
import AppButton from '../AppButtons';


export default function AppSubmitButton({title,color}) {
    const {handleSubmit}=useFormikContext()
    return <AppButton title={title} color={color} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({})
