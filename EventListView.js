/* @flow */

import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export default class EventListView extends PureComponent {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
    days : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    months : ['January','February','March','April','May','June','July','August','September','Octobar','November','December']
  };
  // var response = '{"status":"SUCCESS","message":"","events":[{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7b","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7c","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7a","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7d","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7e","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7f","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7g","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7h","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7i","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7j","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7k","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false},{"eventId":"99090506-32cd-4b8b-b6a3-cea3f3847e7l","eventName":"Weekly Bhajans during Mandalam Season","eventDesc":"","startDate":1510443000000,"endDate":1510455600000,"venue":"SVCC Temple, Fremont","registrationLink":"","recurring":false}]}';
  // response = JSON.parse(response);
  // this.state.data = response;
  // console.log(this.state.data);
  componentWillMount() {
    this._genRows();
  }

  _root: Object;

  _genRows = () => {
    var events = [];
    if(this.props.eventData)
      events = JSON.parse(this.props.eventData).events;
    events.forEach(function(index){
      index.startDateObject = new Date(index.startDate);
      index.endDateObject = new Date(index.endDate);
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(events),
    });
  };

  _renderRow = index => {
    return (
      <View style={styles.parentrow}>
        <View style={styles.flowerbullet}>
            <Ionicon name='ios-flower' size={30} reverse='true' color='#DAA520'/>
        </View>
        <View style={styles.row}>
          
          <View style={styles.firstcolumn}>
            <Text style={styles.firstcolumntext}>
              {index.startDateObject.toString().split(' ')[1]}
            </Text>
            <Text style={styles.firstcolumntext}>
              {index.startDateObject.getDate()}
            </Text>
          </View>
          <View style={styles.secondcolumn}>
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
            <Text style={styles.secondcolumntext}>
              {index.eventName}
            </Text>
            
            <Text style={styles.secondcolumntext}>
              {this.state.days[index.startDateObject.getDay()]} at {index.startDateObject.getHours()}:{(index.startDateObject.getMinutes()==0)?"00":index.startDateObject.getMinutes()} PST 
            </Text>
            <Text style={styles.secondcolumntext}>
              {index.venue}
            </Text>
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
          <View style={styles.thirdcolumn}>
            <Text style={styles.text}>
              <Materialicon name='add-alert' style={styles.icon} size={32} reverse='true' />
            </Text>
          </View>
        </View>
        <View style={styles.flowerbullet}>
              <Ionicon name='ios-flower' size={30} reverse='true' color='#DAA520' />
        </View>
      </View>
    );
  };

  scrollTo = (...args: any) => this._root.scrollTo(...args);

  render() {
    return (
      <ListView
        {...this.props}
        removeClippedSubviews={false}
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        onEndReached={this._genRows}
        ref={el => (this._root = el)}
        
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  parentrow:{
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
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
    padding:0
  },
  firstcolumn:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:0.2,
    width: 20
  },
  firstcolumntext:{
    fontSize: responsiveFontSize(2.5),
    color: '#740001',
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
    fontSize: responsiveFontSize(2),
    color: '#740001',
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