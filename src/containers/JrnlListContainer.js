import React, { Component } from 'react'
import JrnlList from '../components/JrnlList'

export default class JrnlListContainer extends Component {

  _onPressItem(){

  }

  constructor(){
    super()
    this.state = {
      data: [
        {id: '1', text: 'Bottles of Water', count: 2},
        {id: '2', text: 'Calories', count: 9000 },
        {id: '3', text: 'Direct Approaches', count: 3 },
        {id: '4', text: 'Indirect Approaches', count: 4 },
        {id: '5', text: 'UBAGs', count: 9 },
        {id: '6', text: 'Contact to Close', count: 24 },
        {id: '7', text: 'HSH', count: 12 },
        {id: '8', text: 'Wall Climbs', count: 3 },
        {id: '9', text: 'Thoughts restructured', count: 5 },
        {id: '10', text: 'Pep talks', count: 3 },
        {id: '11', text: 'Social Events', count: 10 },
        {id: '12', text: 'onPress Climbs', count: 3 },
        {id: '13', text: 'onsights', count: 5 },
        {id: '14', text: 'Talks', count: 3 },
        {id: '15', text: 'Events', count: 10 }
      ]
    }
  }

  render(){
    return (
      <JrnlList data={this.state.data}/>
    )
  }

}
