import {StyleSheet, Text, View} from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>GREEN</Text>
        </View>
        
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    padding:8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },

  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
