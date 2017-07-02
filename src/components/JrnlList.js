import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View,Text, StyleSheet, FlatList, TouchableHighlight, TouchableNativeFeedback, Alert } from 'react-native'
import { connect } from 'react-redux'
import { startEntry } from '../actions/entryActions'


const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  text: {
    fontSize: 20
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    'alignItems': 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderStyle: 'solid',
    'borderColor': 'black',
    'borderWidth': 1
  },
  list: {
    flex: 1
  }
})


export function JrnlListCount({count}){
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

function JrnlListText({text}){
  return (
    <Text style={styles.text}>{text}</Text>
  )
}


function JrnlListItem({item, onPress}){
  let {text, count } = item
  return (
    <TouchableHighlight onPress={onPress} >
      <View style={styles.item}>
        <JrnlListText text={text}/>
        <JrnlListCount count={count}/>
      </View>
    </TouchableHighlight>

  )
}


function JrnlList({data, onPressItem }){
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={ item => item.id }
        renderItem={ ({item, index}) => <JrnlListItem item={item} onPress={onPressItem}/>}/>
    </View>
  )
}

JrnlList.propTypes = {
  data: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  data: state.jrnls
})

const mapDispatchToProps = dispatch => ({
  onPressItem: () => dispatch(startEntry())
})


export default connect(mapStateToProps,mapDispatchToProps)(JrnlList)
