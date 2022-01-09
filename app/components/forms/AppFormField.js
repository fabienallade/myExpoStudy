import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppErrorsMessage from './AppErrorsMessage'
import { useFormikContext } from "formik"
import AppTextInput from '../AppTextInput'

export default function AppFormField({name,width,...otherProps}) {
    const {setFieldTouched,setFieldValue,handleChange,errors,touched,values} = useFormikContext()
    return (
      <>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={text => setFieldValue(name,text)}
          value={values[name]}
          width={width}
          {...otherProps}
        />
        <AppErrorsMessage error={errors[name]} visible={touched[name]} />
      </>
    );
}

const styles = StyleSheet.create({})
