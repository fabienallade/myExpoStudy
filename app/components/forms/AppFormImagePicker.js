import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppImageInputList from '../AppImageInputList'
import AppErrorsMessage from './AppErrorsMessage'
import { useFormikContext } from "formik";

export default function AppFormImagePicker({ name }) {
    const {
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext();
    const handleAdd = (uri) => {
        setFieldValue(name,[...values[name], uri])
    }
    const handleRemove = (uri) => {
        setFieldValue(name,values[name].filter((imageUri) => imageUri !== uri))
    }
    return (
        <>
        <AppImageInputList
            imageUris={values[name]}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />
        <AppErrorsMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

