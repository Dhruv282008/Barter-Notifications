import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';
import { View, Text, StyeSheet } from 'react-native';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: 'lightblue', fontSize: 20, fontWeight: "bold", } }}
      backgroundColor = "teal"
    />
  );
};

export default MyHeader;
