/* @flow */

import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator, Image, Dimensions, Linking, TouchableHighlight } from 'react-native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth  } from 'react-native-responsive-dimensions';
var {width,height} = Dimensions.get('window');
export default class AboutUsView extends PureComponent {
  render() {
    return (
      <View style={styles.parentrow}>
        <Text style={styles.aboutheader}>Support Ayyappa Samaaj</Text>
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
            style={{width:responsiveWidth(100),height:responsiveHeight(25)}}
            resizeMode = 'contain'
            source={require('./css/donate_banner.jpg')}
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
        <Text style={styles.aboutparagraph2}>
           Ayyappa Samaaj is a volunteer driven IRS recognized 501c(3) organization (Tax ID: # (EIN) 45-1061428)  that conducts events using funds that are donated to the organization by the general public. All your donations to Ayyappa Samaaj are tax deductible to the extent allowed by the IRS for 501(c)3 organizations.
        </Text>
        <View style={styles.aboutparagraph1}>
            <Text style={styles.addressparagraph}>Ayyappa Samaaj,</Text>
            <Text style={styles.addressparagraph}>P.O. Box 2723, San Ramon,</Text> 
            <Text style={styles.addressparagraph}>CA 94583</Text> 
        </View>
        <View style={styles.buttonparentcontainer}>
          <TouchableHighlight
            onPress={ ()=>{ Linking.openURL('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4M73DVTGB3BNY ')}}
            accessibilityLabel="Learn more about this purple button">
            <View style={styles.buttoncontainer}>
              <Text
                style={styles.buttonStyle}>Donate Now
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.paypalcontainer}>
            <Text style={styles.paypaltext}>Powered By</Text>
            <Image
            style={{width:responsiveWidth(15),height:responsiveHeight(2)}}
            resizeMode = 'contain'
            source={require('./css/paypal.png')}
          />
          </View>
        </View>
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
    flexDirection :"column",
    backgroundColor:"#f8f5ed"
  },
  buttonStyle:{
    borderColor: '#DAA520',
    textAlign: 'center',
    color: '#740001',
    padding: 10,
    fontWeight: 'bold',
    fontSize:responsiveFontSize(2)
  },
  paypaltext:{
    color: '#740001',
    fontWeight: 'bold',
    fontSize:responsiveFontSize(1),
    lineHeight:18
  },
  imagecontainer:{
    justifyContent:'center',
    padding:responsiveWidth(1),
    flexDirection:'row',
    alignItems: 'center',
  },
  paypalcontainer:{
    padding:responsiveWidth(1),
    flexDirection:'row',
    flex:0.1
  },
  buttoncontainer:{
    borderRadius: 100,
    padding:responsiveWidth(1),
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#DAA520',
    borderColor: '#740001',
    borderWidth:1,
    width:responsiveWidth(50),
    justifyContent:'center'
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
    fontSize: responsiveFontSize(2.5),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(3),
    textAlign:'center'
  },
  secondcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8, 
    width: 60
  },
  addressparagraph:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    textAlign:'justify'
  },
  aboutparagraph1:{
    flexDirection:'column',
    padding:responsiveWidth(3)
  },
  aboutparagraph2:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(4),
    textAlign:'justify'
  },
  aboutparagraph3:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    padding:responsiveWidth(4),
    width:responsiveWidth(80),
    textAlign:'justify'
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
    padding:responsiveWidth(1),
  },
  flowercontainer2:{
    flexDirection: 'column',
    padding:responsiveWidth(2),
  },
  bulletcontainer:{
    flexDirection: 'row',
    padding:responsiveWidth(3),
    alignItems: 'center',
  },
  contactcontainer:{
    flexDirection: 'row',
    padding:responsiveWidth(2),
    alignItems: 'center',
  },
  flowericon:{
    justifyContent: 'center',
  },
  flowericonrow:{
    justifyContent: 'center',
    padding:2
  },
  flowericonrowbullet:{
    justifyContent: 'center',
    padding:responsiveWidth(2)
  },
  contacticonrow:{
    justifyContent: 'center',
    padding:10,
  },
  buttonparentcontainer:{
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    width:responsiveWidth(100),
    padding:responsiveWidth(2)
  },
  contactrowtext:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
    padding:10,
  },
  contactrowtextcontainer:{
    flexDirection: 'column',
    padding:10,
  },
  ccontactrowtextcontainertext:{
    fontSize: responsiveFontSize(2),
    color: '#740001',
    fontWeight: 'bold',
  },
  flowerbullet:{
    margin: 0,
    padding:0,

  }
});