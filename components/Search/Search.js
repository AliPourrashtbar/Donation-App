import {TouchableOpacity, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import style from './style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';

const Search = props => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = searchValue => {
    setSearch(searchValue), props.onSearch(searchValue);
  };
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={1}
      onPress={handleFocus}>
      <EvilIcons
        name="search"
        color="#000"
        size={25}
        style={{paddingBottom: 7}}
      />
      <TextInput
        ref={textInputRef}
        placeholder={props.placeholder}
        placeholderTextColor={'#000'}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </TouchableOpacity>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};
Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
