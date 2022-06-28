import React from 'react';
import Card from './components/Card';
import Forms from './components/Form';
import CardDeck from './components/CardDeck';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      button: true,
    };
  }

  validateEach = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
    } = this.state;

    const ninety = 90;
    const twoHundredTen = 210;

    const sum = (+attr1) + (+attr2) + (+attr3);

    if (
      (+attr1) > ninety
      || (+attr1) < 0
      || (+attr2) > ninety
      || (+attr2) < 0
      || (+attr3) > ninety
      || (+attr3) < 0
    ) return true;

    return !(
      name
      && description
      && image
      && sum <= twoHundredTen
    );
  }

  onSaveButtonClick = () => {
    this.setState(
      {
        name: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        image: '',
        rare: 'normal',
      },
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.setState({ button: this.validateEach() }),
    );
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      button,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div>
          <Forms
            onInputChange={ this.onInputChange }
            handleSubmit={ this.handleSubmit }
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            isSaveButtonDisabled={ button }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
          <CardDeck />
        </div>
      </div>
    );
  }
}

export default App;
