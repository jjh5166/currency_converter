import PropTypes from 'prop-types';
import React from 'react'
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({ checkMark, visible, iconBackground }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible)
  }
  if (iconBackground) {
    iconStyles.push({
      backgroundColor: iconBackground
    })
  }
  return (
    <View style={iconStyles}>
      {checkMark ? <Image style={styles.checkIcon} resizeMode='contain' source={require('./images/check.png')} /> : null}
    </View>
  )
}

Icon.propTypes = {
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string
}
export default Icon;