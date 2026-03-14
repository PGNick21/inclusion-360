import { StyleSheet, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { HeaderProfile } from '@/components/HeaderProfile';
import { ActionCard } from '@/components/ActionCard';
import { AlertaCard } from '@/components/AlertaCard';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderProfile />
        
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.suggestionSection}>
            <ThemedText style={styles.suggestionTitle}>
              Sugerencias: <ThemedText style={styles.suggestionHighlight}>Restaurante</ThemedText>
            </ThemedText>
            
            <View style={styles.accessibilityBanner}>
              <View style={styles.bannerIcon}>
                <IconSymbol name="figure.roll" size={24} color="#E14F4F" />
              </View>
              <View style={styles.bannerTextContainer}>
                <ThemedText style={styles.bannerLabel}>ESPACIOS</ThemedText>
                <ThemedText style={styles.bannerTitle}>100% Accesibles</ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.actionsGrid}>
            <ActionCard title="Soy alérgico" icon="exclamationmark.triangle.fill" />
            <ActionCard title="¿Dónde está el baño?" icon="questionmark.circle.fill" />
          </View>

          <View style={styles.alertasSection}>
            <View style={styles.sectionHeader}>
                <IconSymbol name="clock.arrow.circlepath" size={16} color="#666666" />
                <ThemedText style={styles.sectionTitle}>Última Alerta Detectada</ThemedText>
            </View>
            <Pressable onPress={() => router.push('/alert-config')}>
               <AlertaCard />
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
      
      <Pressable style={styles.fab} onPress={() => router.push('/alertas')}>
        <IconSymbol name="exclamationmark.triangle.fill" size={24} color="#FFF" />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  suggestionSection: {
    marginBottom: 24,
  },
  suggestionTitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 12,
  },
  suggestionHighlight: {
    color: '#E14F4F',
    fontWeight: 'bold',
  },
  accessibilityBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 3,
  },
  bannerIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF5F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A0A0A0',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  alertasSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E14F4F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  }
});
