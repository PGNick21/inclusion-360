import { Alert, Platform } from 'react-native';

export function showAlert(title: string, message?: string, buttons?: Array<{ text: string; style?: string; onPress?: () => void }>) {
  if (Platform.OS === 'web') {
    if (buttons && buttons.length > 1) {
      const destructive = buttons.find((b) => b.style === 'destructive');
      if (destructive) {
        const confirmed = window.confirm(`${title}\n${message ?? ''}`);
        if (confirmed) destructive.onPress?.();
        return;
      }
    }
    window.alert(`${title}${message ? `\n${message}` : ''}`);
    return;
  }
  Alert.alert(title, message, buttons as any);
}
