import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class Card extends React.Component {
  state = {
    showTerm: false
  }
  /*
    Flips the showTerm flag in our state
  */
    // Fill this out
    flipCard = () => {
  this.setState({
    showTerm: !this.state.showTerm
  });
  }

  render() {
    // Fill this out
    const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
    return (
  <TouchableWithoutFeedback onPress={this.flipCard}>
    <View style={[styles.container]}>
      <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
      <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
    </View>
  </TouchableWithoutFeedback>
);
  }
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300
  },
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20,
    textShadowColor: 'blue',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2}
  },
  termText: {
    fontSize: 50,
    fontFamily: 'Georgia-Bold',
    fontWeight: '700',
    textShadowColor: 'green',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2}
  },
  definitionText: {
    fontSize: 30,
    fontFamily: 'Georgia',
    color: 'grey',
    textShadowColor: 'yellow',
    textShadowRadius: 3,
    textShadowOffset: {width: 2, height: 2}
  }
});
