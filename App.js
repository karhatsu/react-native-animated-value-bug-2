import React from 'react';
import { AppState, Button, StyleSheet, Text, Share, View } from 'react-native'
import TextToggle from './TextToggle';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { appState: AppState.currentState }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>App state: {this.state.appState}</Text>
        <TextToggle useNativeDriver={true} />
        <TextToggle useNativeDriver={false} />
        <Button title="Open share dialog" onPress={this.openShareDialog} />
        <View style={styles.instructions}>
          <Text>Instructions:</Text>
          <Text>1. Hide both texts.</Text>
          <Text>2. Open the share dialog.</Text>
          <Text>3. See how the text that was animated with native driver appears.</Text>
        </View>
      </View>
    )
  }

  openShareDialog = () => {
    Share.share({ message: 'Test sharing', url: 'https://facebook.github.io' })
  }

  componentDidMount() {
    AppState.addEventListener('change', appState => {
      this.setState({ appState })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  instructions: {
    marginTop: 16,
  },
})
