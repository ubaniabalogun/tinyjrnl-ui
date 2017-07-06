/*
react-navigation screen configuration
*/
import HomeScreen from './HomeScreen'
import NewJrnlScreen from './NewJrnl'
import EditJrnlScreen from './EditJrnl'


const navigationOptions = {
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 20
  }
}

export const routeConfig = {
  mode: 'modal',
  navigationOptions
}

const screens = {
  Home: {
    screen: HomeScreen
  },
  NewJrnl: {
    screen: NewJrnlScreen
  },
  EditJrnl: {
    screen: EditJrnlScreen
  }
}

export default screens
