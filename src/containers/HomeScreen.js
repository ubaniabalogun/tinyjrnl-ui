import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import CreateJrnlContainer from './CreateJrnlContainer'
import JrnlList, { JrnlItem } from '../components/JrnlItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  }
})

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Jrnls'
  }

  render(){
    return (
      <View style={styles.container}>
        <CreateJrnlContainer/>
        <JrnlList data={[
          {key: '1', text: 'Bottles of Water', count: 2},
          {key: '2', text: 'Calories', count: 9000 },
          {key: '3', text: 'Direct Approaches', count: 3 },
          {key: '4', text: 'Indirect Approaches', count: 4 },
          {key: '5', text: 'UBAGs', count: 9 },
          {key: '6', text: 'Contact to Close', count: 24 },
          {key: '7', text: 'HSH', count: 12 },
          {key: '8', text: 'Wall Climbs', count: 3 },
          {key: '9', text: 'Thoughts restructured', count: 5 },
          {key: '10', text: 'Pep talks', count: 3 },
          {key: '11', text: 'Social Events', count: 10 },
          {key: '12', text: 'onPress Climbs', count: 3 },
          {key: '13', text: 'onsights', count: 5 },
          {key: '14', text: 'talks', count: 3 },
          {key: '15', text: 'Events', count: 10 }
        ]}/>
      </View>
    )
  }
}
