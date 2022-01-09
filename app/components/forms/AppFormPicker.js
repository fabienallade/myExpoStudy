import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import AppErrorsMessage from "./AppErrorsMessage";

export default function AppFormPicker({ name,width,PickerItemComponent,numberOfColums, ...otherProps }) {
  const {
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppPicker
        {...otherProps}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
        numberOfColums={numberOfColums}
        onSelectedItem={(item) => {
          setFieldValue(name, item);
        }}
      />
      <AppErrorsMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
