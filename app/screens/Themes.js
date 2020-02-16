import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { ScrollView, StatusBar,  } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { changePrimaryColor } from '../actions/theme'

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
})
class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }
  handleThemePress = (color) => {
    const { dispatch, navigation} = this.props;
    dispatch(changePrimaryColor(color));
    navigation.goBack(null);
  }
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='dark-content'/>
        <ListItem
          text='Blue' onPress={()=>this.handleThemePress(styles.$blue)}
          selected
          checkMark={false}
          iconBackground={styles.$blue}
        />
        <Separator/>
        <ListItem
          text='Orange' onPress={()=>this.handleThemePress(styles.$orange)}
          selected
          checkMark={false}
          iconBackground={styles.$orange}
        />
        <Separator/>
        <ListItem
          text='Green' onPress={()=>this.handleThemePress(styles.$green)}
          selected
          checkMark={false}
          iconBackground={styles.$green}
        />
        <Separator/>
        <ListItem
          text='Purple' onPress={()=>this.handleThemePress(styles.$purple)}
          selected
          checkMark={false}
          iconBackground={styles.$purple}
        />
        <Separator/>
      </ScrollView>
    )
  }
}

export default connect()(Themes);