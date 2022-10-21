import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {postsObject} from './redux/reducers';
// export type Navigation = {

//     navigation: NavigationProp<ParamListBase>;
//   };
export type Navigation = {
  navigate: (scene?: string, routes?: postsObject) => postsObject | void;
};
export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Dummy_posts: undefined;
  Post_Detail: postsObject;
};
