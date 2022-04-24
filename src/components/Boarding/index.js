import {useState, useRef} from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import React from 'react';

import {Colors, Images, Fonts} from '../../assets/Theme';

import Item from './Item';

import Paginator from './paginator';

const Boarding = props => {
  const {slides} = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={{justifyContent: 'center', paddingHorizontal: 8}}>
      <FlatList
        data={slides}
        renderItem={({item}) => <Item item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        ItemSeparatorComponent={() => <View style={{width: 2}} />}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View style={{flex: 1, marginTop: -150}}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Boarding;
