import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import PropTypes from 'prop-types';

const DonateSingleItem = props => {
  return (
    <View style={{margin: 20}}>
      <TouchableOpacity onPress={() => props.onPress(props.donationItemId)}>
        <Image
          resizeMode="cover"
          style={style.image}
          source={{uri: props.uri}}
        />
      </TouchableOpacity>
      <View style={{position: 'absolute', zIndex: 100, top: 8, left: -13}}>
        <Badge title={props.badgeTitle} />
      </View>
      <Header title={props.donationTitle} type={2} numberOfLines={1} />
      <Header title={'$' + props.price.toFixed(2)} type={3} />
    </View>
  );
};

DonateSingleItem.defaultProps = {
  onPress: () => {},
};

DonateSingleItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default DonateSingleItem;
