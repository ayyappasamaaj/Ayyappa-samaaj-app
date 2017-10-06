import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export default class AccordionSubList extends PureComponent {
  _isMounted = false;
  state = {
    index:{},
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
  };
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
    var accordionsublistrowdata = this.props.accordionsublistrowdata;
    // if(accordionsublistrowdata){
    // 	if(accordionsublistrowdata.hasSubCategory){
    //     this.setState({hasSubCategory:true});
    //     for(var i=0; i<accordionsublistrowdata.subCategoryList.length; i++){
    //       accordionsublistrow.push(accordionsublistrowdata.subCategoryList[i]);
    //     }
    //   }
    //   else{
    //     this.setState({hasSubCategory:false});
    //     for(var i=0; i<accordionsublistrowdata.length; i++){
    //       accordionsublistrow.push(accordionsublistrowdata[i]);
    //     }
    //   }
    // }
    if(accordionsublistrowdata.length && this.state.dataSource){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(accordionsublistrowdata),
      });
    }
  };
  _renderRow = index => {
    //this.setState({index:index});
      return(
          <TouchableHighlight onPress={()=>this._onPressRow(index)}>
            <View style={styles.parentrow}>
              <View style={styles.flowerbullet}>
                    <Ionicon name='ios-flower' size={15} reverse='true' color='#DAA520'/>
              </View>
              <View style={styles.sublistrow}>
                  <Text style={styles.text}>{index.itemTitle}</Text>
              </View>
              <View style={styles.flowerbullet}>
                    <Ionicon name='ios-flower' size={15} reverse='true' color='#DAA520'/>
              </View>
            </View>
          </TouchableHighlight>
      );
  	
  };
  _onPressRow = index => {
    console.log("krishnan");
    console.log(index);
    this.props.ontriggersublistPDF(index);
  }
  render() {
    return (
      <ListView
        {...this.props}
        removeClippedSubviews={true}
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        ref={el => (this._root = el)}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:8
  },
  parentrow:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  sublistrow: {
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8, 
    flexDirection: 'row',
    borderColor: '#740001',
    borderWidth: 1,
  },
  text: {
    fontSize : 18,
    color: '#740001',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    fontSize: responsiveFontSize(2),
    borderRadius: 10,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#DAA520',
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
    margin: 5,
    padding:0,
    alignItems: 'center',
    justifyContent: 'center',

  }
});