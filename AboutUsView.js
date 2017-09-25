/* @flow */

import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator, Image, Dimensions } from 'react-native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth  } from 'react-native-responsive-dimensions';
var {width,height} = Dimensions.get('window');
export default class AboutUsView extends PureComponent {
  
  render() {
    return (
      <View style={styles.parentrow}>
        <View style={styles.flowercontainer1}>
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={7} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={10} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={15} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={20} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={15} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={10} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={7} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
        </View>
        <View style={styles.imagecontainer}>
          
          <Image
            style={{flex:0.3}}
            resizeMode = 'contain'
            source={require('./css/ayyappan.png')}
          />
          
        </View>
        <View style={styles.flowercontainer1}>
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={7} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={10} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={15} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={20} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={15} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={10} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={7} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
            <Ionicon name='md-flower' style={styles.flowericonrow}  size={5} reverse='true' color='#DAA520' />
        </View>
          <Text style={styles.aboutparagraph1}>Ayyappa Samaaj is a registered 501 (c)3 non profit organization consisting of the devotees of Lord Ayyappa based out of the San Francisco Bay Area in California, USA. The group has hundreds of members and volunteers who have been actively conducting pujas and bhajans in praise of Lord Ayyappa since the turn of the millennium. Please mail all contributions/donations to:
          </Text>
          <Text style={styles.aboutheader}>
            Our address: 
          </Text>
          <Text style={styles.aboutparagraph2}>
            Ayyappa Samaaj, P.O. Box 2723, San Ramon, CA 94583
            Tax ID: # (EIN) 45-1061428
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  parentrow:{
    flex: 1,
    flexDirection :"column"
  },
  imagecontainer:{
    flex: 1,
    height:responsiveHeight(20),
    justifyContent:'center',
    alignItems:'center',
    padding:responsiveWidth(1),
    flexDirection:'row'
  },
  row: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
    flexDirection: 'row',
    borderColor: '#740001',
    borderWidth: 1,
    margin:10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#740001',
  },
  firstcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.2,
    width: 20
  },
  aboutheader:{
    fontSize: responsiveFontSize(3),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(3)
  },
  secondcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8, 
    width: 60
  },
  aboutparagraph1:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(3)
  },
  aboutparagraph2:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(3)
  },
  thirdcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2, 
    width: 20
  },
  flowercontainer1:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:responsiveWidth(3),
  },
  flowercontainer2:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:responsiveWidth(3)
  },
  flowericon:{
    justifyContent: 'center',
  },
  flowericonrow:{
    justifyContent: 'center',
    padding:2
  },

  flowerbullet:{
    margin: 0,
    padding:0,

  }
});