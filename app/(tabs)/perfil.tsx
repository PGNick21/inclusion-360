import { StyleSheet, View, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

export default function PerfilScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
               <IconSymbol name="person.crop.circle.fill" size={80} color="#E14F4F" />
            </View>
            <ThemedText style={styles.userName}>Nick Payano</ThemedText>
            <ThemedText style={styles.userEmail}>nick.payano@ejemplo.com</ThemedText>
            
            <Pressable style={styles.editBtn}>
               <ThemedText style={styles.editBtnText}>Editar Perfil</ThemedText>
            </Pressable>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>AJUSTES DE ACCESIBILIDAD</ThemedText>
            
            <ProfileRow icon="ear.fill" title="Asistencia Auditiva" value="Activado" />
            <ProfileRow icon="hand.raised.fill" title="Traductor de Señas" value="Nivel 2" />
            <ProfileRow icon="figure.roll" title="Mapa Inclusivo" value="Cargar AR" />
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>CUENTA</ThemedText>
            <ProfileRow icon="bell.fill" title="Notificaciones" />
            <ProfileRow icon="message.fill" title="Seguridad" />
          </View>

          <Pressable style={styles.logoutBtn} onPress={handleLogout}>
             <ThemedText style={styles.logoutText}>Cerrar Sesión</ThemedText>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

function ProfileRow({ icon, title, value }: { icon: any, title: string, value?: string }) {
  return (
    <Pressable style={styles.row}>
      <View style={styles.rowLeft}>
        <View style={styles.rowIcon}>
          <IconSymbol name={icon} size={20} color="#666666" />
        </View>
        <ThemedText style={styles.rowTitle}>{title}</ThemedText>
      </View>
      <View style={styles.rowRight}>
        {value && <ThemedText style={styles.rowValue}>{value}</ThemedText>}
        <IconSymbol name="chevron.right" size={16} color="#A0A0A0" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F8',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  editBtn: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  editBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#A0A0A0',
    marginBottom: 12,
    marginLeft: 4,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowValue: {
    fontSize: 14,
    color: '#E14F4F',
    fontWeight: 'bold',
  },
  logoutBtn: {
    marginTop: 10,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#E14F4F',
    fontWeight: 'bold',
  }
});
