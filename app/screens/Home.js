import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurreny = () => {
    console.log('press base');
  }
  handlePressQuoteCurreny = () => {
    console.log('press quote');
  }
  handleTextChange = (text) => {
    console.log('texy change ', text);
  }
  handleSwapCurrency = () => {
    console.log('press swap')
  }
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurreny}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurreny}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton
          text={"Reverse Currencies"}
          onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;