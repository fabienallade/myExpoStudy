import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import AppImageInput from './AppImageInput'

export default function AppImageInputList({imageUris=[],onRemoveImage,onAddImage}) {
    const scrollView = useRef()
    return (
      <View>
        <ScrollView
          ref={scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={styles.container}>
            {imageUris.length > 0 &&
              imageUris.map((uri) => (
                <View key={uri} style={styles.image}>
                  <AppImageInput
                    imageUri={uri}
                    onChangeImage={(uri) => onRemoveImage(uri)}
                  />
                </View>
              ))}
            <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },image:{
        marginRight:10
    }
})