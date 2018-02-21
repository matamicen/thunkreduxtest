import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import PeopleList from "../components/PeopleList";
import { connect } from 'react-redux';
import { fetchPeople } from '../actions';

 class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      errorMessage: "",
      isFetching: true
    };
  }

  async fetchRandomPeopleAPI() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      this.setState({ people: json.results, isFetching: false });
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  }

  componentDidMount() {
   // this.fetchRandomPeopleAPI();
   console.log("Did Mount: "+ this.props.randompeople.isFetching)
   this.props.fetchPeople();
  }

  render() {
    console.log("Render "+ this.props.randompeople.isFetching + "error:" + this.props.randompeople.errorMessage);
  
    let content = <PeopleList people={this.props.randompeople.people} />;
    if (this.props.randompeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    if (this.props.randompeople.errorMessage === ""){ 
      console.log("no hay error");
      return  <View style={styles.container}>{content}</View>; }
     else  
     { console.log("SI hay error");
        return <View style={styles.container}> 
          <Text style={styles.container}>
          {this.props.randompeople.errorMessage.toString()}
          </Text>
        </View>;
      }
    
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});


function mapStateToProps(state){
    return{
      randompeople: state
    }
  }
  
  const mapDispatchToProps = {
   fetchPeople
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
