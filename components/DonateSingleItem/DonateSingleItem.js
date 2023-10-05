import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import PropTypes from 'prop-types';

const DonateSingleItem = props => {
  return (
    <View style={{margin: 20}}>
      <View>
        <View style={{position: 'absolute', zIndex: 100, top: 8, left: -13}}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image style={style.image} source={{uri: props.uri}} />
      </View>
      <Header title={props.donationTitle} type={3} />
      <Header title={'$' + props.price.toFixed(2)} type={3} />
    </View>
  );
};

DonateSingleItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DonateSingleItem;
