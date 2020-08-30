import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({album}) => {
  const {thumbnail_image, title, artist, image, url} = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    albumTitleStyle,
    albumImage,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={albumTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={albumImage} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPressfn={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumTitleStyle: {
    fontSize: 18,
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null,
  },
};
export default AlbumDetails;
