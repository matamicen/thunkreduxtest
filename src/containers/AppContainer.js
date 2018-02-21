import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet } from '../actions'


//export default class AppContainer extends Component 
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
    this.fetchRandomPeopleAPI();
  }

  render() {
    let content = <PeopleList people={this.state.people} />;
    if (this.state.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
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
      count1: state.count1
    }
  }
  
  const mapDispatchToProps = {
    counterIncrement, counterDecrement, counterClear, counterSet
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);