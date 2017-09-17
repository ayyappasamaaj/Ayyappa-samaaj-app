/* @flow */

import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator, TouchableHighlight, ScrollView } from 'react-native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PDFView from './PDFView';
import AccordionList from './Accordionlist';
import Accordion from 'react-native-collapsible/Accordion';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
 

export default class HomeListView extends PureComponent {
  _isMounted = false;
  state = {
    index:{},
    isPDFInvoked : false,
    pdfurl : '',
    pdftitle: '',
    sections :[]
  };
  // var response = '{"status":"SUCCESS","message":"","events":[{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7b","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7c","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7d","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7e","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7f","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7g","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7h","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7i","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7j","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7k","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7l","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false}]}';
  // response = JSON.parse(response);
  // this.state.data = response;
  // console.log(this.state.data);
  componentWillMount() {
      this._genRows();
  }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }
  // componentDidMount() {
  //    this._isMounted = true;
  // }
  _root: Object;

  _genRows = () => {
      var homeData = {};
      var homeDataList = {};
      var homeDataCategoryNames = [];
      if(this.props.homeResponse){
        homeData = this.props.homeResponse;
        if(this.state.sections.length == 0){
          this.setState({
            sections:homeData
          });
        }
      }
    
  };
  _renderHeader = (section) => {
    return (
      <View style={styles.rowwrapper}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.flowercontainer}>
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={7} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={20} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={7} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
             
            </View>
            <Text style={styles.text}>{section.title}</Text>
            <View style={styles.flowercontainer}>
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={7} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={20} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={7} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              <Ionicon name='md-flower' style={styles.flowericon}  size={5} reverse='true' color='#DAA520' />
              
            </View>
          </View>
        </View>
      </View>
    );
  }

  _renderContent = (section) => {
    return (
       <AccordionList accordionlistrowdata = {section} ontriggerPDF={this.triggerPDF} />
    );
  }

  _renderRow = index => {
    this.setState({index:index});
    return (
      <View> 
        <TouchableHighlight onPress={()=>this._onPressRow(index)}> 
          <Text>
            {index.title}
          </Text>
        </TouchableHighlight>
        <AccordionList accordionlistrowdata = {index} ontriggerPDF={this.triggerPDF} />
      </View>
      
    );
    
  };
  _onPressRow = index => {
    console.log("***");
    console.log(index);
  }
  closePDF = () => {
    this.setState({isPDFInvoked : false});
  }
  triggerPDF = index => {
    console.log("ram");
    console.log(index);
    this.setState({isPDFInvoked : true,pdfurl:index.fileUrl,pdftitle:index.itemTitle});
  }
  scrollTo = (...args: any) => this._root.scrollTo(...args);

  render() {
    if(this.state.isPDFInvoked){
      return(
        <PDFView
          url={this.state.pdfurl}
          title = {this.state.pdftitle}
          closePDF = {this.closePDF} />
      );
    }
    else{
      return(
        <ScrollView
              style={[styles.page, { backgroundColor: '#f8f5ed' }]}
            >
        <Accordion 
          sections={this.state.sections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {

  },
  rowwrapper:{
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  row: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9, 
    flexDirection: 'row',
    borderColor: '#740001',
    borderWidth: 1,
    margin:8
  },
  
  text: {
    fontSize: responsiveFontSize(3),
    color: '#740001',
    fontWeight: 'bold',
    textAlign: 'center',
    padding:5,
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
    padding:0
  },
  firstcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.2,
    width: 20
  },
  firstcolumntext:{
    fontSize : 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8, 
    width: 60
  },
  secondcolumntext:{
    fontSize : 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  thirdcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2, 
    width: 20
  },
  flowercontainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  flowericon:{
    justifyContent: 'center',
    padding:1
  },
  flowerbullet:{
    margin: 0,
    padding:0,

  }
});