
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import search from '../assets/SearchIcon.png'


const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      ></TextInput>
      <Button title="Search" onPress={handleSearch} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:20
  },
  input: {
    flex: 1,
    backgroundColor:'#fff',
    borderRadius:20,
    padding: 5,
    width: 35,
    height: 40,
  },
  
});

export default SearchBar;
