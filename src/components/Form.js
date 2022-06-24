import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            data-testid="description-input"
            name="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="forca">
          Força
          <input
            data-testid="attr1-input"
            type="number"
            name="forca"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="velocidade">
          Velocidade
          <input
            data-testid="attr2-input"
            type="number"
            name="velocidade"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="resistencia">
          Resistência
          <input
            data-testid="attr3-input"
            type="number"
            name="resistencia"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
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
          type="button"
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
