import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import Search from '../../components/Search/Search';
import DonateSingleItem from '../../components/DonateSingleItem/DonateSingleItem';
import Header from '../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/Donations';
import Tab from '../../components/Tab/Tab';
import {
  resetCategories,
  updateSelectedCategoryId,
} from '../../redux/reducers/Categories';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();
  const [donationItems, setDonationItems] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const categoryPageSize = 4;
  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Text style={style.introText}>Hello,</Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <Search />
        </View>
        <TouchableOpacity>
          <Image
            style={style.highLightedImage}
            source={require('../../assets/img/highLighted.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={style.categoryHeader}>
          <Header type={2} title={'Select category'} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newDate = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newDate.length > 0) {
                setCategoryList(prevState => [...prevState, ...newDate]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={categoryList}
            renderItem={({item}) => (
              <View key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => {
                    dispatch(updateSelectedCategoryId(value));
                  }}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItem}>
            {donationItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <DonateSingleItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonatioItem, {
                        categoryInformation,
                      });
                      // console.log(selectedDonationId);
                    }}
                    donationItemId={value.donationItemId}
                    donationTitle={value.name}
                    badgeTitle={categoryInformation.name}
                    uri={value.image}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
