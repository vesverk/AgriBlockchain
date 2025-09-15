import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Leaf } from 'lucide-react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Leaf size={28} color="#24753e" style={styles.logo} />
        <Text style={styles.title}>TrueHarvest</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Menu clicked')}>
        <Image
          source={require('../resources/dropdown.png')}   
          style={styles.menuIcon}
        />
      </TouchableOpacity>       
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#DEE8CE',
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
});
