import {NavigationProp, ParamListBase} from '@react-navigation/native';

// export type Navigation = {

//     navigation: NavigationProp<ParamListBase>;
//   };
export type Navigation = {
    navigate: (scene: string) => void;
  };