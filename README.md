# React Native Animated.Value Bug (II)

This repo demonstrates the bug in React Native `Animated.Value` when

1. You use native driver in animations (`useNativeDriver: true`).
1. Make the app go to the background (by opening a share dialog).
1. And re-render the component that uses `Animated.Value`.

## Usage

Connect your phone to your computer, then run:

```
react-native run-android
```

More instructions inside the app.
