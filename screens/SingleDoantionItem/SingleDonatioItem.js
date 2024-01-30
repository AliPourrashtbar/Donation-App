import {View, Text} from 'react-native';
import React from 'react';

// selectors import
import {useSelector} from 'react-redux';

// components import
import BackButton from '../../components/BackButton/BackButton';
import style from './style';

const SingleDonatioItem = ({navigation}) => {
  const selectedDonationInfo = useSelector(
    state => state.donations.selectedDonationInfo,
  );
  console.log(selectedDonationInfo);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SingleDonatioItem;
