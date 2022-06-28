import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardDeck extends Component {
  render() {
    const { cardDeck, deleteCard } = this.props;

    return (
      <div>
        {
          cardDeck.map((element, idx) => (
            <>
              <Card
                key={ idx }
                cardName={ element.name }
                cardDescription={ element.description }
                cardAttr1={ element.attr1 }
                cardAttr2={ element.attr2 }
                cardAttr3={ element.attr3 }
                cardImage={ element.image }
                cardRare={ element.rare }
                cardTrunfo={ element.trunfo }
              />
              <button
                id={ idx }
                type="button"
                data-testid="delete-button"
                onClick={ deleteCard }
              >

                Excluir

              </button>
            </>))
        }
      </div>
    );
  }
}

CardDeck.propTypes = {
  cardDeck: PropTypes.arrayOf.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardDeck;
