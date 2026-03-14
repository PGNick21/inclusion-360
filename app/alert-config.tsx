import { StyleSheet, View, ScrollView, Switch, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';

export default function AlertConfigScreen() {
  const router = useRouter();
  const [enabled, setEnabled] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={24} color="#1A1A1A" />
          </Pressable>
          <ThemedText style={styles.headerTitle}>Configuración de Alerta</ThemedText>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.heroCard}>
            <View style={styles.iconCircle}>
               <IconSymbol name="bell.fill" size={40} color="#E14F4F" />
            </View>
            <ThemedText style={styles.alertName}>Sonido de Timbre</ThemedText>
            <ThemedText style={styles.alertType}>Alerta Ambiental Auditiva</ThemedText>
          </View>

          <View style={styles.section}>
            <View style={styles.row}>
               <View>
                  <ThemedText style={styles.rowTitle}>Activar Detección</ThemedText>
                  <ThemedText style={styles.rowSub}>Notificar cuando se detecte el timbre</ThemedText>
               </View>
               <Switch 
                  value={enabled} 
                  onValueChange={setEnabled} 
                  trackColor={{ false: '#DDD', true: '#FF7F7F' }}
                  thumbColor={enabled ? '#E14F4F' : '#F4F3F4'}
               />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>MÉTODO DE NOTIFICACIÓN</ThemedText>
            
            <View style={styles.optionRow}>
               <IconSymbol name="exclamationmark.triangle.fill" size={20} color="#666666" />
               <ThemedText style={styles.optionText}>Vibración Fuerte</ThemedText>
               <Switch value={true} trackColor={{ true: '#FF7F7F' }} />
            </View>

            <View style={styles.optionRow}>
               <IconSymbol name="bell.fill" size={20} color="#666666" />
               <ThemedText style={styles.optionText}>Flash de Cámara</ThemedText>
               <Switch value={false} trackColor={{ true: '#FF7F7F' }} />
            </View>
          </View>

          <Pressable style={styles.testBtn}>
             <ThemedText style={styles.testBtnText}>PROBAR DETECCIÓN</ThemedText>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  heroCard: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 40,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF5F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  alertName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  alertType: {
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A0A0A0',
    marginBottom: 16,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowSub: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
  },
  testBtn: {
    backgroundColor: '#1A1A1A',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  testBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});
