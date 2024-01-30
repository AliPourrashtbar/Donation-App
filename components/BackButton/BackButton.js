import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackButton = props => {
  return (
    <TouchableOpacity style={style.backButton} onPress={() => props.onPress()}>
      <AntDesign color="#000" name="arrowleft" size={25} />
    </TouchableOpacity>
  );
};

BackButton.prototype = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
