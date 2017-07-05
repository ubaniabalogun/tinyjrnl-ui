import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import ModalWrapper from 'react-native-modal-wrapper'
import { connect } from 'react-redux'
import { saveEntry, cancelEntry } from '../actions/entryActions'

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  modalContainer: {
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalHeader:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    margin: 0,
    height: 50
  },
  text: {
    fontSize: 20
  }
})

function NewEntry({title,increment, isVisible, onCancel}){
  return (
    <ModalWrapper
      style={styles.modal}
      containerStyle={styles.modalContainer}
      animationType="slide"
      animateOnMount={true}
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
      shouldCloseOnOverlayPress
      >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Button title="Cancel" onPress={onCancel}/>
          <Text style={styles.text}>Bottles of Water</Text>
          <Button title="Save" onPress={onCancel}/>
        </View>
        <TextInput style={styles.input}>{increment}</TextInput>
        <TextInput style={styles.input} >{increment}</TextInput>


      </View>
    </ModalWrapper>
  )
}

const mapStateToProps = state => ({
  isVisible: state.entryModal.isVisible
})

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(cancelEntry())
})

export default connect(mapStateToProps,mapDispatchToProps)(NewEntry)
