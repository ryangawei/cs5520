import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header(props) {
  const { height, width } = useWindowDimensions();
  // console.log(height, width)
  const paddingVerticalDynamic = height < 400 ? 0: 10; 
  const marginVerticalDynamic = height < 400 ? 20: 0; 

  // console.log(props);
  return (
    <View>
      <Text style={[styles.header, {paddingVertical: paddingVerticalDynamic, marginTop: marginVerticalDynamic}]}>{props.appName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderColor: "mediumorchid",
    borderWidth: Platform.select({
      ios: 5,
      andriod: 5,
      default: 0,
    }),
    padding: 10,
    color: "mediumorchid",
    fontSize: windowWidth < 380 ? 20: 26,
    width:350, 
    maxWidth:'90%'
  }
})