import {View, Text, Image} from 'react-native';
import React from 'react';

const Item = props => {
  const {item} = props;
  return (
    <View>
      <Image source={item.image} style={{width: 342, resizeMode: 'contain'}} />
    </View>
  );
};

export default Item;
