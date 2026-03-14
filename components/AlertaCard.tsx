import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

export function AlertaCard() {
  const surface = useThemeColor({}, 'surface');
  
  return (
    <View style={[styles.container, { backgroundColor: surface }]}>
      <View style={styles.iconContainer}>
        <IconSymbol name="bell.fill" size={20} color="#E14F4F" />
      </View>
      <View style={styles.content}>
        <ThemedText style={styles.title}>Sonido de Timbre</ThemedText>
        <ThemedText style={styles.time}>Hace 2 minutos</ThemedText>
      </View>
      <IconSymbol name="chevron.right" size={20} color="#666666" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF5F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#666666',
  },
});
