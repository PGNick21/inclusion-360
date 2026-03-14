/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#E14F4F';
const tintColorDark = '#FF6B6B';

export const Colors = {
  light: {
    text: '#1A1A1A',
    background: '#FFF9F8',
    tint: tintColorLight,
    icon: '#666666',
    tabIconDefault: '#A0A0A0',
    tabIconSelected: tintColorLight,
    surface: '#FFFFFF',
    border: '#F0F0F0',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1A1A1A',
    tint: tintColorDark,
    icon: '#A0A0A0',
    tabIconDefault: '#666666',
    tabIconSelected: tintColorDark,
    surface: '#2D2D2D',
    border: '#3D3D3D',
  },
};
