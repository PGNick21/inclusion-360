import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

export function HeaderProfile() {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <IconSymbol name="person.crop.circle.fill" size={48} color="#E14F4F" />
        </View>
        <View>
          <ThemedText style={styles.welcome}>Hola Nick Payano</ThemedText>
          <View style={styles.locationContainer}>
            <IconSymbol name="mappin.circle.fill" size={14} color="#666666" />
            <ThemedText style={styles.location}>Santo Domingo</ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.listeningContainer}>
         <View style={styles.listeningIcon}>
            <IconSymbol name="ear.fill" size={20} color="#E14F4F" />
         </View>
         <ThemedText style={styles.listeningText}>ESCUCHANDO</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 12,
    color: '#666666',
  },
  listeningContainer: {
    alignItems: 'center',
  },
  listeningIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listeningText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E14F4F',
    marginTop: 4,
  }
});
