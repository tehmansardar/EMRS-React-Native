import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {Colors, Fonts, Images} from '../../assets/Theme';

import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

import CustomIcon from '../../components/CustomIcon';

import Feather from 'react-native-vector-icons/Feather';

const UploadDoc = () => {
  const [openGp, setOpenGp] = useState(false);
  const [valueGp, setValueGp] = useState(null);
  const [itemsGp, setItemsGp] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={styles.scrollview}>
      <View style={styles.background}>
        <ImageBackground
          source={Images.background}
          imageStyle={{height: '200%', resizeMode: 'cover'}}>
          <View style={styles.backgroundInner}>
            <View style={styles.top_nav}>
              <View style={styles.top_navInner}>
                <TouchableOpacity>
                  <CustomIcon
                    name="left-arrow"
                    size={18}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mainTitleUpperContainer}>
            <View style={styles.mainTitleContainer}>
              <Text style={styles.mainTitle}>Prescription</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.imgPickerContainer}>
        <View style={styles.imgPicker}></View>
      </View>
      <View style={styles.bodySection}>
        {/* Dropdown picker */}
        <View>
          <DropDownPicker
            placeholder="GP Name"
            open={openGp}
            value={valueGp}
            items={itemsGp}
            setOpen={setOpenGp}
            setValue={setValueGp}
            setItems={setItemsGp}
            showTickIcon={false}
            style={styles.dpStyle}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            textStyle={styles.textStyle}
            arrowIconStyle={styles.arrowIconStyle}
          />

          <DropDownPicker
            placeholder="GP Practice"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            showTickIcon={false}
            style={[styles.dpStyle, {zIndex: 1}]}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            textStyle={styles.textStyle}
            arrowIconStyle={styles.arrowIconStyle}
          />
        </View>

        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.bottomBtnText}>Upload Prescription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadDoc;
