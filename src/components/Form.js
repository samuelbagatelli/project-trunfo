import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input data-testid="name-input" type="text" name="nome" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea data-testid="description-input" name="descricao" />
        </label>
        <label htmlFor="forca">
          Força
          <input data-testid="attr1-input" type="number" name="forca" />
        </label>
        <label htmlFor="attr1">
          Velocidade
          <input data-testid="attr2-input" type="number" name="attr1" />
        </label>
        <label htmlFor="attr2">
          Resistência
          <input data-testid="attr3-input" type="number" name="attr2" />
        </label>
        <label htmlFor="attr3">
          Imagem
          <input data-testid="image-input" type="text" name="attr3" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" name="rare">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input data-testid="trunfo-input" type="checkbox" name="trunfo" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Forms;
