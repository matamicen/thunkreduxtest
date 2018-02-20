import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { counterIncrement2, counterDecrement2, counterClear2, counterSet2 } from '../actions'

 class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }

     
    onChangeText = (number) => {
        const count = parseInt(number);
        this.props.counterSet2(count);
       // this.setState({count});
      }   

      
  render() {
    //console.log(this.props);
    console.log("Render Hijo");
    const { container, countViewStyle, welcome } = styles;
    return (
      
      <View style={container}>
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1}}
            onChangeText={(text) => this.onChangeText(text)}
            value={this.props.count.toString()}
              //this.state.count.toString()}
           />
        <View style={countViewStyle}> 
        
          <Button onPress={ this.props.counterIncrement2}  title="+2" />
         
          <Text style={welcome}>
            {this.props.count}
          </Text>
          <Button onPress={ this.props.counterDecrement2} title="-2" />
        </View>
        
        
        <Button onPress={this.props.counterClear2} title="Clear2" /> 
       
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});


function mapStateToProps(state){
  return{
    count: state.count2
  }
}


export default connect(mapStateToProps,{ counterIncrement2, counterDecrement2, counterClear2, counterSet2 })(Counter);