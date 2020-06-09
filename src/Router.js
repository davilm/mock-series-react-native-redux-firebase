import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetaiPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';


const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Main': {
    screen: SeriesPage,
    navigationOptions: {
      title: 'Series Page',
    }
  },
  'SerieForm': {
    screen: SerieFormPage,
    navigationOptions: {
      title: 'Nova série',
    }
  },
  'SerieDetail': {
    screen: SerieDetaiPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
        title: serie.title,
      }
    }
  },
}, {
  defaultNavigationOptions: {
    title: "Series",
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: "#fafafa",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
      color: 'black',
      fontSize: 30,
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;