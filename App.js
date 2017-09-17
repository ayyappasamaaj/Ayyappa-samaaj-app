import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, AppRegistry, Text, WebView, ActivityIndicator, NativeModules, TouchableHighlight } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import EventListView from './EventListView';
import HomeListView from './HomeListView';
import Header from './Header';
import PDFView from './PDFView';
//import { Icon } from 'react-native-elements';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicon from 'react-native-vector-icons/Ionicons';
let MFLReactNativePayPal = NativeModules.MFLReactNativePayPal;

export default class App extends PureComponent<void, *, State> {
  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'Home', icon: 'ios-book' },
      { key: '2', title: 'Schedule', icon: 'ios-calendar' },
      { key: '3', title: 'Donate Us', icon: 'logo-usd' },
      { key: '4', title: 'About Us', icon: 'ios-information-circle' },
    ],
    eventsResponse: '',
    homeResponse: '',
    routeIndex : '',
    isLoading : true,
    ispdf:true
  };
  constructor(props) {
    super(props);
    
  };
  componentWillMount() {
    if(this.state.homeResponse == "" || this.state.homeResponse == null || this.state.homeResponse == undefined){
      fetch('http://ec2-52-38-155-191.us-west-2.compute.amazonaws.com:8080/aysa/getEbooks')
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status == "SUCCESS1"){
            homeResponse = JSON.stringify(responseJson);
          }
          else{
            homeResponse = '{"status":"SUCCESS","message":"","ebooks":[{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"purushaoooooktham","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Mantras","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Mantras","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Vedam","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Vedam","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Vedam","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Bhajans","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Ayyappan","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ayyappan","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-","itemTitle":"pallikattu","category":"Bhajans","subCategory":"Ayyappan","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Ganesha","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ganesha","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ganesha","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]}]}';
          }
          homeResponse = JSON.parse(homeResponse).ebooks;
          this.setState({routeIndex:'1',homeResponse:homeResponse,isLoading:false});
        })
        .catch((error) => {
          console.error(error);
        }
      );
    }
  };
  componentDidMount() {
    console.log("Component did mount");
    MFLReactNativePayPal.initializePaypalEnvironment(0,
      "AWyPKtVl7ac7SOlIscEe-dONGB-oBYav2TwimOgB1FysVGcKneAkj_1O1LV-Vnr0PEeMk5NmweJfIiLm");
  }
  _first: Object;
  _second: Object;
  _third: Object;
  _fourth: Object;
  _handleIndexChange = index => {
    switch (index){
      case 0:
      default:
          var homeResponse;
            if(this.state.homeResponse == '' || this.state.homeResponse == null || this.state.homeResponse == undefined){
              this.setState({isLoading:true});
              fetch('http://ec2-52-38-155-191.us-west-2.compute.amazonaws.com:8080/aysa/getEbooks')
              .then((response) => response.json())
              .then((responseJson) => {
                if(responseJson.status == "SUCCESS1"){
                  homeResponse = JSON.stringify(responseJson);
                }
                else{
                  homeResponse = '{"status":"SUCCESS","message":"","ebooks":[{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"purushaoooooktham","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Slokas","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram1","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram2","category":"Slokas","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Slokas/Gayatri+Mantras.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Mantras","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Mantras","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Mantras","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Vedam","hasSubCategory":false,"items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Vedam","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Vedam","subCategory":"","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}],"subCategoryList":null},{"title":"Bhajans","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Ayyappan","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ayyappan","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-","itemTitle":"pallikattu","category":"Bhajans","subCategory":"Ayyappan","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Ganesha","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ganesha","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1},{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Bhajans","subCategory":"Ganesha","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]},{"title":"Songs","hasSubCategory":true,"items":null,"subCategoryList":[{"title":"Guru","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Gurudhyaee","category":"Songs","subCategory":"Guru","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shakthi","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shakthi","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Shiva","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Shiva","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]},{"title":"Krishna","items":[{"ebookId":"693d50f8-1949-4cb5-8308-29b72b4e610","itemTitle":"Rudram","category":"Songs","subCategory":"Krishna","fileUrl":"https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf","language":"sanksrit","sequence":1}]}]}]}';
                }
                homeResponse = JSON.parse(homeResponse).ebooks;
                this.setState({index:index,routeIndex:'1',homeResponse:homeResponse,isLoading:false});
              })
              .catch((error) => {
                console.error(error);
              });
            }
            else{
              this.setState({index:index,routeIndex:'1',isLoading:false});
            }
            
        break;
      case 1: 
            var eventsResponse;
            if(this.state.eventsResponse == '' || this.state.eventsResponse == null || this.state.eventsResponse == undefined){
              this.setState({isLoading:true});
              fetch('http://ec2-52-38-155-191.us-west-2.compute.amazonaws.com:8080/aysa/getEvents')
              .then((response) => response.json())
              .then((responseJson) => {
                if(responseJson.status == "SUCCESS"){
                  eventsResponse = JSON.stringify(responseJson);
                }
                else{
                  eventsResponse = '{"status":"SUCCESS","message":"","events":[{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7b","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7c","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7d","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7e","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7f","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7g","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7h","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7i","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7j","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7k","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7l","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false}]}';
                }
                this.setState({index:index,routeIndex:'2',eventsResponse:eventsResponse,isLoading:false});
              })
              .catch((error) => {
                console.error(error);
              });
            }
            else{
              this.setState({index:index,routeIndex:'2',isLoading:false});
            }
         // var eventsResponse = '{"status":"SUCCESS","message":"","events":[{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7b","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7c","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7d","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7e","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7f","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7g","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7h","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7i","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7j","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7k","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7l","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false}]}';
          break;
      case 2:
          this.setState({index:index,routeIndex:'3',isLoading:false});
        break;
      case 3:
          this.setState({index:index,routeIndex:'4',isLoading:false});
        break;
    }
  };

  _renderIndicator = props => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

_renderIcon = ({ route }) => {
    return <Ionicon name={route.icon} style={styles.icon} size={32} reverse='true' />;
  };

  _renderBadge = ({ route }) => {
    if (route.key === '2') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>18</Text>
        </View>
      );
    }
    return null;
  };

  _renderFooter = props => {
    return (
      <TabBar
        {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this._renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
      default:
     
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator />
            </View>
          );
        }
        else if(this.state.routeIndex == '1'){
          return (

              <HomeListView
                ref={el => (this._first = el)}
                style={[styles.page, { backgroundColor: '#f8f5ed' }]}
                homeResponse={this.state.homeResponse}
              />
          );
        }
        break;
      case '2':
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator />
            </View>
          );
        }
        else if(this.state.routeIndex == '2'){
          return (
              <EventListView
                ref={el => (this._second = el)}
                style={[styles.page, { backgroundColor: '#f8f5ed' }]}
                initialListSize={1}
                eventData={this.state.eventsResponse}
              />
          );
        }
        break;
      case '3':
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator />
            </View>
          );
        }
        else if(this.state.routeIndex == '3'){
          return (
            <View style={[styles.page, { backgroundColor: '#f8f5ed' }]}>
              <Text style={styles.text} >Support Ayyappa Samaaj</Text>
                <View style={styles.donatebutton}>
                  <TouchableHighlight onPress={this._onPressButton}>
                    <Text style={styles.donatebuttontext}>
                      Donate
                    </Text>
                  </TouchableHighlight>
                </View>
                <Text style={styles.instructions}>
                    Use test user "bacon@react.com" password "Password!".
                  </Text>
            </View>
          );
        }
        break;
      case '4':
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator />
            </View>
          );
        }
        else if(this.state.routeIndex == '4'){
          return (
            <PDFView
              />
          );
        }
        break;
    }
  };
  _onPressButton() {
    MFLReactNativePayPal.preparePaymentOfAmount("1.00", "USD", "Ayy");
    MFLReactNativePayPal.prepareConfigurationForMerchant("Bacon Truck", true, "bacon@bacon.com");
    MFLReactNativePayPal.presentPaymentViewControllerForPreparedPurchase((error, payload) => {
      if (error) {
         //Handle Error
         return;
       } else {

        console.log("payload: " + payload);
        if (payload.status == 1) {
           console.log(payload.confirmation);
        } else {
           alert("User cancelled payment");
        }
       }
    });
  }

  //  _handleChangeTab = index => {
  //   this.setState({ index });
  // }
  render() {
    
    
    return (
      <View style={styles.container} >
        <Header />
          <TabViewAnimated
            style={[styles.container, this.props.style]}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderFooter={this._renderFooter}
            onIndexChange={this._handleIndexChange}
            //onRequestChangeTab={this._handleChangeTab}
            lazy
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page: {
    flex: 1
  },
  donatebutton:{
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#740001',
    borderWidth: 1,
    margin:5
  },
  tabbar: {
    backgroundColor: '#222'
  },
  tab: {
    padding: 0
  },
  label:{
    color:'white',
    fontSize: 10,
    fontWeight:'bold',
    padding:3
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
    height: 30,
    width: 30,
    padding:0
  },
  indicator: {
    flex: 1,
    backgroundColor: '#DAA520',
    margin: 4,
    borderRadius: 2,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 18,
    width: 18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: -2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text:{
    fontSize: responsiveFontSize(3),
    color: '#740001',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  donatebuttontext:{
    fontSize: responsiveFontSize(3),
    color: '#740001',
    textAlign: 'center',
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  }
});