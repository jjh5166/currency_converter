import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

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
  handleOptionsPress = () => {
    console.log('press options')
  }
  render() {
    return (
      <Container>
        <Header onPress={this.handleOptionsPress} />
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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton
          text={"Reverse Currencies"}
          onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;