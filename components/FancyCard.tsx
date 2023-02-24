import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Services</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://miamihighnews.com/wp-content/uploads/2022/01/astrology-sun-moon-rising-signs-1-copy-900x599.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lorem Ipsum</Text>
          <Text style={styles.cardLabel}>Lorem ipsum dolor</Text>
          <Text style={styles.cardDiscription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text style={styles.cardFooter}>12 USD</Text>
        </View>
      </View>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://trifocusfitnessacademy.co.za/wp-content/uploads/2019/02/shutterstock_622780112-e1549266698875.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lorem Ipsum</Text>
          <Text style={styles.cardLabel}>Lorem ipsum dolor</Text>
          <Text style={styles.cardDiscription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Text>
          <Text style={styles.cardFooter}>10 USD</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius:6,
    borderTopRightRadius: 6
  },

  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,

  },

  cardTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom:4,
  },
  cardDiscription: {
    color: '#242B2E',
    fontSize:12,
    marginTop:6,
    marginBottom:12,
    flexShrink:1
  },
  cardFooter: {
    color: '#000',

  },
});
