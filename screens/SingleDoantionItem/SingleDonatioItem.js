import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

// selectors import
import {useSelector} from 'react-redux';

// components import
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonatioItem = ({navigation, route}) => {
  const selectedDonationInfo = useSelector(
    state => state.donations.selectedDonationInfo,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={style.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Image
            style={[style.image]}
            source={{uri: selectedDonationInfo.image}}
          />
        </View>
        <View style={{marginBottom: 16}}>
          <Badge title={categoryInformation.name} />
        </View>
        <View style={{paddingLeft: 16, paddingBottom: 10}}>
          <Header type={1} title={selectedDonationInfo.name} />
        </View>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
        <Text
          style={{
            color: '#000',
            paddingHorizontal: 16,
            textAlign: 'left',
            fontSize: 18,
          }}>
          {selectedDonationInfo.description}
        </Text>
      </ScrollView>
      <View style={{marginVertical: 20}}>
        <Button title={'Donate'} />
      </View>
    </>
  );
};

export default SingleDonatioItem;
