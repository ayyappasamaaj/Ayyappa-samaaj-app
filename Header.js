import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
export default class Header extends Component {
  state = {
    headerTitle: 'Ayyappa Samaaj'
  };
  render() { 
  	return (
  		<View style={styles.headerViewStyle}>
  			<Text style={styles.headerTextStyle}>{this.state.headerTitle}</Text>
  		</View>
  	);
  }
}
const styles = StyleSheet.create({
  headerViewStyle: {
    alignItems: 'center',
    height:responsiveHeight(10),
    padding:responsiveHeight(1),
    backgroundColor: '#740001'
  },
  headerTextStyle: {
  	fontSize:responsiveFontSize(3),
  	color: "#FFD700",
    fontWeight: 'bold',
    textAlign: 'center',
    padding:responsiveHeight(2),
  }
});