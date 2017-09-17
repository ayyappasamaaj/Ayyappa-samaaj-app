import React, { PureComponent } from 'react';
import { ListView, View, Text, StyleSheet, ActivityIndicator, TouchableHighlight, TextInput } from 'react-native';
import AccordionSubList from './AccordionSubList';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export default class AccordionList extends PureComponent {
  _isMounted = false;
  state = {
    index:{},
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }),
    hasSubCategory : false,
    sections :[]  // Initial value for opacity: 0
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
    var accordionlistrowdata = this.props.accordionlistrowdata;
    var accordionlistrow = [];
    if(accordionlistrowdata){
    	if(accordionlistrowdata.hasSubCategory){
        this.setState({hasSubCategory:true});
        for(var i=0; i<accordionlistrowdata.subCategoryList.length; i++){
          accordionlistrow.push(accordionlistrowdata.subCategoryList[i]);
        }
      }
      else{
        this.setState({hasSubCategory:false});
        for(var i=0; i<accordionlistrowdata.items.length; i++){
          accordionlistrow.push(accordionlistrowdata.items[i]);
        }
      }
    }
    if(this.state.sections.length == 0){
      this.setState({
        sections : accordionlistrow
      });
    }
  };

  _renderHeader = (section) => {
    if(this.state.hasSubCategory){
      return (
        <View style={styles.rowwrapper}>
          <View style={styles.flowerbullet}>
              <Ionicon name='ios-flower' size={20} reverse='true' color='#DAA520'/>
          </View>
          <View style={styles.subrow2}>
            <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
           
            <Text style={styles.text}>{section.title}</Text>
            
            <Ionicon name='md-flower' style={styles.flowericon}  size={15} reverse='true' color='#DAA520' />
            
          </View>
          <View style={styles.flowerbullet}>
              <Ionicon name='ios-flower' size={20} reverse='true' color='#DAA520'/>
          </View>
        </View>
      );
    }
    else{
      return(
         <TouchableHighlight onPress={()=>this._onPressRow(section)}>
            <View style={styles.rowwrapper}>
              <View style={styles.flowerbullet}>
                <Ionicon name='ios-flower' size={20} reverse='true' color='#DAA520'/>
              </View>
              <View style={styles.subrow1}>
                <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
               
               
                  <Text style={styles.subtext}>{section.itemTitle}</Text>
               
                
                <Ionicon name='md-flower' style={styles.flowericon}  size={10} reverse='true' color='#DAA520' />
              </View>
              <View style={styles.flowerbullet}>
                <Ionicon name='ios-flower' size={20} reverse='true' color='#DAA520'/>
              </View>
            </View>
          </TouchableHighlight>
        );
    }
  }

  _renderContent = (section) => {
    if(this.state.hasSubCategory){
      return(
        <AccordionSubList accordionsublistrowdata = {section.items} ontriggersublistPDF={this.triggersublistPDF}> </AccordionSubList>
      );
    }
  }
  _renderRow = index => {
    this.setState({index:index});
    if(this.state.hasSubCategory){
      return(
        <View>
          <Text>{index.title}</Text>
          <AccordionSubList accordionsublistrowdata = {index.items} ontriggersublistPDF={this.triggersublistPDF}> </AccordionSubList>
        </View>
      );
    }
    else{
      return(
        <View>
          <TouchableHighlight onPress={()=>this._onPressRow(index)}>
            <Text>{index.itemTitle} - {index.fileUrl}</Text>
          </TouchableHighlight>
        </View>
      );
    }
  	
  };
  _onPressRow = index => {
    console.log("krishnan");
    console.log(index);
    this.props.ontriggerPDF(index);
  }
  triggersublistPDF = index => {
    this.props.ontriggerPDF(index);
  }
  
  render() {
    return (
        <Accordion 
          sections={this.state.sections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
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
  subrow1: {
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9, 
    flexDirection: 'row',
    borderColor: '#740001',
    borderWidth: 1,
  },
  subrow2: {
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9, 
    flexDirection: 'row',
    borderColor: '#740001',
    borderWidth: 1,
  },
  text: {
    fontSize: responsiveFontSize(2.5),
    color: '#740001',
    fontWeight: 'bold',
    textAlign: 'center',
    padding:5,
  },
  subtext: {
    fontSize: responsiveFontSize(2.5),
    color: '#740001',
    fontWeight: 'bold',
    textAlign: 'center',
    padding:10,
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
    padding:1,
  },
  flowerbullet:{
    margin: 5,
    padding:0,

  }
});