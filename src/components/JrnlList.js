import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, FlatList, TouchableHighlight,
         Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth: 1
  },
  list: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
})


export function JrnlListCount({count}){
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

function JrnlListText({title}){
  return (
    <Text style={styles.text}>{title}</Text>
  )
}


function JrnlListItem({item, onPress, onLongPress}){
  let { title, count } = item
  return (
    <TouchableHighlight onPress={onPress} onLongPress={onLongPress} >
      <View style={styles.item}>
        <JrnlListText title={title}/>
        <JrnlListCount count={count}/>
      </View>
    </TouchableHighlight>

  )
}


function JrnlList({data, onPressItem, onLongPressItem }){
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={ item => item.id }
        renderItem={ ({ item, index }) => <JrnlListItem item={item} onPress={() => onPressItem(item)} onLongPress={onLongPressItem}/>}/>
    </View>
  )
}

JrnlList.propTypes = {
  data: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired,
  onLongPressItem: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  data: state.jrnls
})

const mapDispatchToProps = dispatch => ({
  onPressItem: (item) => dispatch(startEntry(item)),
  onLongPressItem: () => dispatch(NavigationActions.navigate({routeName: 'EditJrnl'}))
})


export default connect(mapStateToProps,mapDispatchToProps)(JrnlList)
