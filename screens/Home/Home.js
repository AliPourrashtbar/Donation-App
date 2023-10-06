import {
  View,
  Text,
  ScrollView,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import style from './style';
import Search from '../../components/Search/Search';
import DonateSingleItem from '../../components/DonateSingleItem/DonateSingleItem';
import Header from '../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <View style={style.container}>
      {/* <Search
        onSearch={value => {
          console.log(value);
        }}
      /> */}
      <Header title={user.firstName + ' ' + user.lastName} />
      <TouchableOpacity
        style={{borderWidth: 1, padding: 10}}
        onPress={() =>
          dispatch(updateFirstName({firstName: 'Ali', lastName: 'Rashtbar'}))
        }></TouchableOpacity>
      <ScrollView horizontal={true}>
        <DonateSingleItem
          uri="https://static.vecteezy.com/system/resources/thumbnails/000/347/962/small/Free-Cactus-Vector-.png"
          price={44}
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
        />
        <DonateSingleItem
          uri="https://static.vecteezy.com/system/resources/thumbnails/000/347/962/small/Free-Cactus-Vector-.png"
          price={44}
          badgeTitle="Environment"
          donationTitle="Tree Cactus"
        />
      </ScrollView>
    </View>
  );
};

export default Home;
