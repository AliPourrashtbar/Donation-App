import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
const Button = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}>
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};
Button.default = {
  isDisabled: false,
  onPress: () => {},
};
Button.protoTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Button;
