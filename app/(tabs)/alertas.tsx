import { StyleSheet, View, ScrollView, Pressable, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useState } from 'react';

const MOCK_HISTORIAL = [
  { id: '1', title: 'Timbre de Puerta', time: '10:45 AM', date: 'Hoy', type: 'audio', severity: 'low', description: 'Se detectó una frecuencia rítmica de 440Hz típica de un timbre electrónico.' },
  { id: '2', title: 'Sirena de Emergencia', time: '09:12 AM', date: 'Hoy', type: 'warning', severity: 'high', description: 'Detección de sonido de alta intensidad (110dB). Posible ambulancia o estación de bomberos cercana.' },
  { id: '3', title: 'Alarma de Incendio', time: 'Ayer', date: '12 Mar', type: 'critical', severity: 'critical', description: 'Señal intermitente de alta frecuencia. Verificar entorno inmediatamente.' },
  { id: '4', title: 'Llanto de Bebé', time: 'Ayer', date: '12 Mar', type: 'audio', severity: 'medium', description: 'Sonido vocal detectado en la habitación continua.' },
];

export default function AlertasScreen() {
  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
            <ThemedText style={styles.headerTitle}>Historial de Alertas</ThemedText>
            <Pressable style={styles.filterBtn}>
                <IconSymbol name="slider.horizontal.3" size={20} color="#E14F4F" />
            </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {MOCK_HISTORIAL.map((item, index) => (
            <Animated.View 
              key={item.id} 
              entering={FadeInUp.delay(index * 100)}
            >
              <Pressable 
                style={styles.alertCard}
                onPress={() => setSelectedAlert(item)}
              >
                <View style={[styles.typeIndicator, { backgroundColor: getSeverityColor(item.severity) }]} />
                <View style={styles.alertContent}>
                  <View style={styles.alertTop}>
                    <ThemedText style={styles.alertTitle}>{item.title}</ThemedText>
                    <ThemedText style={styles.alertTime}>{item.time}</ThemedText>
                  </View>
                  <ThemedText style={styles.alertDate}>{item.date}</ThemedText>
                </View>
                <IconSymbol name="chevron.right" size={16} color="#A0A0A0" />
              </Pressable>
            </Animated.View>
          ))}
        </ScrollView>

        {selectedAlert && (
          <View style={styles.detailOverlay}>
            <Animated.View entering={FadeInUp} style={styles.detailCard}>
              <View style={styles.detailHeader}>
                <ThemedText style={styles.detailTitle}>{selectedAlert.title}</ThemedText>
                <Pressable onPress={() => setSelectedAlert(null)}>
                  <IconSymbol name="xmark" size={24} color="#1A1A1A" />
                </Pressable>
              </View>
              
              <View style={styles.detailBody}>
                <View style={styles.infoRow}>
                  <ThemedText style={styles.label}>Severidad:</ThemedText>
                  <ThemedText style={[styles.value, { color: getSeverityColor(selectedAlert.severity) }]}>
                    {selectedAlert.severity.toUpperCase()}
                  </ThemedText>
                </View>
                <View style={styles.infoRow}>
                  <ThemedText style={styles.label}>Hora:</ThemedText>
                  <ThemedText style={styles.value}>{selectedAlert.time} - {selectedAlert.date}</ThemedText>
                </View>
                <ThemedText style={styles.descriptionLabel}>Descripción:</ThemedText>
                <ThemedText style={styles.descriptionText}>{selectedAlert.description}</ThemedText>
              </View>

              <Pressable style={styles.closeBtn} onPress={() => setSelectedAlert(null)}>
                <ThemedText style={styles.closeBtnText}>Entendido</ThemedText>
              </Pressable>
            </Animated.View>
          </View>
        )}
      </SafeAreaView>
    </ThemedView>
  );
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case 'critical': return '#FF3B30';
    case 'high': return '#FF9500';
    case 'medium': return '#FFCC00';
    default: return '#34C759';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F8',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  scrollContent: {
    padding: 20,
    gap: 12,
  },
  alertCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  typeIndicator: {
    width: 6,
    height: '100%',
    borderRadius: 3,
  },
  alertContent: {
    flex: 1,
  },
  alertTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertTime: {
    fontSize: 12,
    color: '#E14F4F',
    fontWeight: '600',
  },
  alertDate: {
    fontSize: 12,
    color: '#A0A0A0',
    marginTop: 2,
  },
  detailOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  detailCard: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 30,
    paddingBottom: 40,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  detailBody: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 10,
  },
  label: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  closeBtn: {
    backgroundColor: '#E14F4F',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  closeBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});
