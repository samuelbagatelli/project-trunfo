import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardDeck extends Component {
  render() {
    const { cardDeck } = this.props;

    return (
      <div>
        {
          cardDeck.map((element, idx) => (<Card
            key={ idx }
            cardName={ element.name }
            cardDescription={ element.description }
            cardAttr1={ element.attr1 }
            cardAttr2={ element.attr2 }
            cardAttr3={ element.attr3 }
            cardImage={ element.image }
            cardRare={ element.rare }
            cardTrunfo={ element.trunfo }
          />))
        }
      </div>
    );
  }
}

CardDeck.propTypes = {
  cardDeck: PropTypes.arrayOf.isRequired,
};

export default CardDeck;
