import { Platform, View, StyleSheet } from 'react-native';
import { forwardRef, useEffect, useRef } from 'react';

type Props = {
  html: string;
  onMessage?: (event: any) => void;
  style?: any;
};

const MapWebView = forwardRef<any, Props>(({ html, onMessage, style }, ref) => {
  if (Platform.OS === 'web') {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
      if (!onMessage) return;
      const handler = (e: MessageEvent) => {
        if (iframeRef.current?.contentWindow === e.source) {
          onMessage({ nativeEvent: { data: e.data } });
        }
      };
      window.addEventListener('message', handler);
      return () => window.removeEventListener('message', handler);
    }, [onMessage]);

    return (
      <View style={[{ flex: 1 }, style]}>
        <iframe
          ref={iframeRef}
          srcDoc={html}
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: 20 }}
        />
      </View>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { WebView } = require('react-native-webview');

  return (
    <WebView
      ref={ref}
      source={{ html }}
      style={style}
      onMessage={onMessage}
      scrollEnabled={false}
      javaScriptEnabled
      domStorageEnabled
    />
  );
});

MapWebView.displayName = 'MapWebView';
export default MapWebView;
