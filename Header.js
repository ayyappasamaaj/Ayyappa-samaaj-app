import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class Header extends Component {
  state = {
    headerTitle: 'Sharanam Ayappa'
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
    height:100,
    padding:30,
    backgroundColor: '#222'
  },
  headerTextStyle: {
  	fontSize:40,
  	color: "#FFD700"
  }
});