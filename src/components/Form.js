import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr1">
          Força
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr2">
          Velocidade
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="attr3">
          Resistência
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
            required
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
            required
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Forms;
