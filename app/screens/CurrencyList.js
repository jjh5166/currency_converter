import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, FlatList, View, StatusBar, ColorPropType } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
  }
  handlePress = (currency) => {
    const { route, navigation, dispatch } = this.props;
    const { type } = route.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote'){
      dispatch(changeQuoteCurrency(currency))
    }
    navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    const { type } = this.props.route.params;
    if (type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) =>
            <ListItem text={item}
              selected={item === comparisonCurrency}
              onPress={()=> this.handlePress(item)}
            />
          }
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
  };
}
export default connect(mapStateToProps)(CurrencyList);