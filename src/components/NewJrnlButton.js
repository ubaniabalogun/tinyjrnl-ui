import React, { Component } from 'react'
import { TouchableHighlight,
          Alert, StyleSheet,
          Text, View, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  touchable: {
    display: 'flex',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 65
  }
})

function NewJrnlButton({createJrnl}){
  return (
    <TouchableHighlight onPress={createJrnl} style={styles.touchable}>
      <View>
        <Text style={styles.text}>
          Create New Jrnl
        </Text>
      </View>
    </TouchableHighlight>
  )
}

NewJrnlButton.propTypes = {
  createJrnl: PropTypes.func.isRequired
}


const mapDispatchToProps = dispatch => ({
  createJrnl: () => dispatch(NavigationActions.navigate({routeName: 'NewJrnl'}))
})

export default connect(undefined,mapDispatchToProps)(NewJrnlButton)
