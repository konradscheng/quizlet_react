import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
  {
    term: "Scope",
    definition: "An awesome CS club at USC"
  },
  {
    term: "Linear Algebra",
    definition: "My hardest class this semester"
  },
  {
    term: "CS109",
    definition: "My easiest class this semester"
  },
  {
    term: "Birnkrant",
    definition: "The dorm I'm living in this year"
  },
  {
    term: "Aqua",
    definition: "My favorite color?"
  }
];

class App extends Component {
  // Fill this out
  state = {
    cards: DEFAULT_CARDS,
    modalVisible: false
  }

  /*
    Toggles the new card modal
  */
    _toggleModal = () => {
  this.setState({
    modalVisible: !this.state.modalVisible
  });
}

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _definition) => {
    // Fill this out
  const cards = this.state.cards;

  cards.push({
    term: _term,
    definition: _definition
  });

  this.setState({
    cards: cards,
    modalVisible: false
  });
}

_delCard = (_term, _definition) => {
  // Fill this out
const cards = this.state.cards;

cards.splice({
  term: _term,
  definition: _definition
});

this.setState({
  cards: cards,
  modalVisible: false
});
}

  render() {
    // Loop through the cards array in state and create Card component for each card
    const cards = this.state.cards.map((card, index) => {
      // Fill this out
      return (
  <Card cardData={card} key={index} />
)
    });


    return (
  <View style={styles.container}>
    <NewCardModal
  modalVisible={this.state.modalVisible}
  toggleModal={this._toggleModal}
  addCard={this._addCard}
/>
  <Text style={styles.title}>***QUIZLET***</Text>
    <ScrollView>
      {cards}
    </ScrollView>
    <TouchableHighlight
  style={styles.addButton}
  onPress={this._toggleModal}
  underlayColor='#128040'
>
  <Text style={styles.addButtonText}>Add Card</Text>
</TouchableHighlight>
  </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    paddingTop: 20,
    paddingBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Arial'
  },
  title: {
    color: 'pink',
    backgroundColor: 'yellow',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '900',
    fontFamily: 'Arial',
    paddingTop: 30
  }
});

export default App;
