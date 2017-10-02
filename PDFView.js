// 
//  PDFExample.js 
//  
// 
//  Created by Wonday on 17/4/21. 
//  Copyright (c) wonday.org All rights reserved. 
// 
 
import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    View,
    Text
} from 'react-native';
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import Pdf from 'react-native-pdf';
import Ionicon from 'react-native-vector-icons/Ionicons';
export default class PDFView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageCount: 1,
        };
        this.pdf = null;
    }
 
    componentDidMount() {
    }
 
    prePage=()=>{
        if (this.pdf){
            let prePage = this.state.page>1?this.state.page-1:1;
            this.pdf.setNativeProps({page: prePage});
            this.setState({page:prePage});
            console.log(`prePage: ${prePage}`);
        }
    }
 
    nextPage=()=>{
        if (this.pdf){
            let nextPage = this.state.page+1>this.state.pageCount?this.state.pageCount:this.state.page+1;
            this.pdf.setNativeProps({page: nextPage});
            this.setState({page:nextPage});
            console.log(`nextPage: ${nextPage}`);
        }
 
    }

    closePDF=()=>{
        this.props.closePDF();
    }
 
    render() {
        //let source = {uri:'https://s3-us-west-2.amazonaws.com/ayyappasamaajdrive/Bhajans/Ayyappan/Sharana+Ghosham.pdf',cache:true};
        //let source = {uri:'bundle-assets://test.pdf'}; 
        //let source = require('./test.pdf'); //ios only 
        //let source = {uri:"data:application/pdf;base64, ..."}; // this is a dummy 
        let source = {uri:this.props.url,cache:true};
        return (
            <View style={styles.container}>
                <View style={styles.rowcontainer}>
                    <View style={styles.row1}>
                        <TouchableHighlight  disabled={this.state.page==1} style={this.state.page==1?styles.btnDisable:styles.btn} onPress={()=>this.prePage()}>
                        <Text style={styles.btnText}><Ionicon name="ios-arrow-dropleft-circle" size={25} color="#DAA520" style={styles.iconSize} /></Text>
                        </TouchableHighlight>
                        <Text style={styles.firstcolumntext}> {this.props.title} </Text>
                        <TouchableHighlight  disabled={this.state.page==this.state.pageCount} style={this.state.page==this.state.pageCount?styles.btnDisable:styles.btn}  onPress={()=>this.nextPage()}>
                            <Text style={styles.btnText}><Ionicon name="ios-arrow-dropright-circle" size={25} color="#DAA520" style={styles.iconSize} /></Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.row2}>
                        <TouchableHighlight style={this.state.page==1?styles.btnDisable:styles.btn} refs="true" onPress={()=>this.closePDF()}>
                            <Text style={styles.btnText}><Ionicon name="ios-close-circle" size={25} color="#DAA520" style={styles.iconSize} /></Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <Pdf ref={(pdf)=>{this.pdf = pdf;}}
                    source={source}
                    page={1}
                    horizontal={false}
                    onLoadComplete={(pageCount)=>{
                        this.setState({pageCount: pageCount});
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onPageChanged={(page,pageCount)=>{
                        this.setState({page:page});
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#222",
    },
    btn: {
        margin: 5,
        padding:5,
        backgroundColor: "#222",
        borderRadius:50,
    },
    btnDisable: {
        margin: 5,
        padding:5,
        backgroundColor: "#222",
        borderRadius:50,
    },
    btnText: {
        color: "#FFF",
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    },
    arrowContainer:{
        backgroundColor: "#222",
    },
    iconSize: {
        width: 32,
        height: 32
    },
    firstcolumntext:{
        fontSize : responsiveHeight(2),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    rowcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row',
        height: responsiveHeight(5),
    },
    row1:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row2:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});