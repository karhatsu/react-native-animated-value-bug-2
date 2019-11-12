import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native'

// Notice that we use Component instead of PureComponent so that app state change in App re-renders TextToggle
export default class TextToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { textStatus: 1 }
    this.textAnimatedValue = new Animated.Value(this.state.textStatus)
  }

  render() {
    const buttonText = this.state.textStatus === 1 ? 'Hide text' : 'Show text'
    const header = `NATIVE DRIVER: ${this.props.useNativeDriver}`
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <Animated.View style={{ opacity: this.textAnimatedValue }}>
          <Text>Text with changing opacity</Text>
        </Animated.View>
        <Button title={buttonText} onPress={this.toggleText} />
      </View>
    )
  }

  toggleText = () => {
    const textStatus = this.state.textStatus === 1 ? 0 : 1
    Animated.timing(this.textAnimatedValue, {
      toValue: textStatus,
      duration: 300,
      useNativeDriver: this.props.useNativeDriver,
    }).start(() => {
      this.setState({ textStatus })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#888',
  },
  header: {
    color: '#ff9911',
    fontSize: 16,
  }
})
