import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Leaf } from 'lucide-react-native';

const GetStartedpage: React.FC = () => {
  return (
    <ImageBackground 
      source={require('../resources/HeroImage.png')} 
      style={styles.container} 
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.logoBox}>
        <Leaf size={42} color="#24753e" />
      </View>
      <Text style={styles.title}>Bringing Transparency{'\n'}to</Text>
      <Text style={styles.titleBold}>Agriculture with{'\n'}Blockchain</Text>
      <Text style={styles.subtitle}>
        Track farm-to-table produce with trust and{'\n'}fairness.
      </Text>
      <TouchableOpacity style={styles.getStartedBtn}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exploreBtn}>
        <Text style={styles.exploreText}>Explore Features</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default GetStartedpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 40,
  },
  backgroundImage: {
    opacity: 0.7,
    resizeMode: 'cover',
  },
  logoBox: {
    backgroundColor: '#99e2b4',
    borderRadius: 16,
    padding: 10,
    marginBottom: 22,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,  
  },
  title: {
    fontSize: 23,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 28,
  },
  titleBold: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 29,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0faef',
    textAlign: 'center',
    marginBottom: 34,
  },
  getStartedBtn: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#79edbf',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  getStartedText: {
    color: '#1c3f27ff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  exploreBtn: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#2e9b66',
    opacity: 0.8,
    paddingVertical: 14,
    borderRadius: 12,
  },
  exploreText: {
    color: '#f2f9f5ff',
    fontSize: 16,
    fontWeight: '500',
  },
});
