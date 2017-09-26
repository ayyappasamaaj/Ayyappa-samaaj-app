import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
var {width,height} = Dimensions.get('window');
export default class Header extends Component {
  state = {
    headerTitle: 'Ayyappa Samaaj'
  };
  render() { 
  	return (
  		<View style={styles.headerViewStyle}>
  			<Image
          style={{flex:0.5, height: height, width: width}}
          resizeMode = 'contain'
          source={require('./css/aysa_logo.png')}
        />
  		</View>
  	);
  }
}
const styles = StyleSheet.create({
  headerViewStyle: {
    alignItems: 'center',
    backgroundColor: '#8D0001',
    justifyContent: 'center',
    height:responsiveHeight(10),
  },
  headerTextStyle: {
  	fontSize:responsiveFontSize(2.5),
  	color: "#FFD700",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stretch:{

  }
});