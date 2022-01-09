import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import AppScreen from "./AppScreen";
import AppPickerListItem from "./AppPickerListItem";

export default function AppPicker({ icon,placeholder,items,onSelectedItem,selectedItem,width="100%",numberOfColums=1,PickerItemComponent=AppPickerListItem }) {
    const [showModal,setShowModal] = useState(false)
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container,{width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              color={colors.graytitle}
              size={25}
            />
          )}
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.graytitle}
            size={25}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <AppScreen>
          <Button title="close" onPress={() => setShowModal(false)}></Button>
          <FlatList
              data={items}
              numColumns={numberOfColums}
              keyExtractor={item=>item.value.toString()}
              renderItem={
                  ({item})=>{
                      return <PickerItemComponent
                      item={item}
                          label={item.label}
                          onPress={()=>{
                              setShowModal(false)
                              onSelectedItem(item)
                          }}
                      />
                  }
              }
          />
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    color: colors.graytitle,
  },
  icon: {
    marginRight: 10,
  },
});
