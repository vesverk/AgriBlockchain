import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const ChooseAgripage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Choose AgriChain?</Text>
      <Text style={styles.subheading}>
        Revolutionary blockchain technology meets sustainable{'\n'}agriculture
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardRow}
      >
        <View style={[styles.card, styles.cardGreen]}>
          <View style={styles.iconBox}>
            <Image
              source={require('../resources/Verified.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.cardTitle}>Verified Origin</Text>
          <Text style={styles.cardDesc}>
            Track every product from farm{'\n'}to table with complete{'\n'}transparency
          </Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <View style={styles.iconBox}>
            <Image
              source={require('../resources/Pricing.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.cardTitle}>Fair Pricing</Text>
          <Text style={styles.cardDesc}>
            Transparent pricing for all stakeholders
          </Text>
        </View>
        <View style={[styles.card, styles.cardYellow]}>
          <View style={styles.iconBox}>
            <Image
              source={require('../resources/Immutable.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.cardTitle}>Immutable Records</Text>
          <Text style={styles.cardDesc}>
            Blockchain-secured transaction history
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseAgripage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcf3',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 15,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 26,
    lineHeight: 21,
  },
  cardRow: {
    paddingHorizontal: 12,
  },
  card: {
    width: 230,              
    height: 170,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,         
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cardGreen: {
    backgroundColor: '#32c972',
  },
  cardBlue: {
    backgroundColor: '#1862ab',
    opacity: 0.9,
  },
  cardYellow: {
    backgroundColor: '#F6C542',
  },
  iconBox: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 14,
    padding: 13,
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDesc: {
    fontSize: 14,
    color: '#ecffee',
    textAlign: 'center',
  },
});
