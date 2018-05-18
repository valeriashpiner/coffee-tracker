import React from 'react';
import { Text, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { filter } from '../../assets';
import mapStyle from '../../data/map';
import { currentPlace } from '../../assets';
import { styles } from './style';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO    = width / height;
const LATITUDE        = 37.78825;
const LONGITUDE       = -122.4324;
const LATITUDE_DELTA  = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE           = 0.01;

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        permissionState: false,
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      place: [],
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            accuracy: position.coords.accuracy
          }
        });
      },
      (error) => alert(error.message),
      {timeout: 10000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        accuracy: position.coords.accuracy
      }
      this.setState({newRegion});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  openSearchModal(place) {
    RNGooglePlaces.getAutocompletePredictions('Lagos', {
      type: 'cities',
      country: 'NG'
    })
      .then((place) => { return place })
      .catch(error => console.log(error.message));
  }

    render() {
      let latitude = this.state.region.latitude;
      let longitude = this.state.region.longitude;
 
      return (
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            style={styles.map}
            region={this.state.region}
            followUserLocation={true}
          >
            <MapView.Marker
              coordinate={{ latitude, longitude }}>
              <Image source={currentPlace} style={{ width: 40, height: 40 }} />
            </MapView.Marker>
          </MapView>
          <View style={styles.allNonMapThings}>
          <TouchableOpacity style={styles.inputContainer} onPress={() => this.openSearchModal()}>
            <TextInput
              placeholder='Enter cafe name, street, etc.'
              style={styles.input}
            />
          </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.openSearchModal()}>
                <Image source={filter} style={styles.filterImage} />
            </TouchableOpacity>
          </View> 

          <KeyboardSpacer/> 
        </View>
      );
    }
  }