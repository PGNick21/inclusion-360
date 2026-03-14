import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ActionCardProps {
  title: string;
  icon: string;
  onPress?: () => void;
}

export function ActionCard({ title, icon, onPress }: ActionCardProps) {
  const surface = useThemeColor({}, 'surface');
  
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card, 
        { backgroundColor: surface, opacity: pressed ? 0.9 : 1 }
      ]} 
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <IconSymbol name={icon} size={24} color="#E14F4F" />
      </View>
      <ThemedText style={styles.title}>{title}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    minHeight: 140,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF5F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
