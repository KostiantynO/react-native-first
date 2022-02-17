import { PureComponent } from 'react';
import { Text } from 'react-native';

export const Cat = () => {
  const name = 'Maru';
  return <Text>Hello, my name is {name}. I am your const cat😼!</Text>;
};

export class ClassCat extends PureComponent {
  name = 'Maru';

  render() {
    return <Text>Hello, my name is {this.name}. I am your class cat😼!</Text>;
  }
}
