import { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export const Cat = ({ style }) => {
  const name = 'Maru';
  return (
    <Text style={style}>Hello, my name is {name}. I am your const cat😼!</Text>
  );
};

Cat.propTypes = {
  style: PropTypes.object.isRequired,
};

export class ClassCat extends PureComponent {
  name = 'Maru';

  render() {
    return <Text>Hello, my name is {this.name}. I am your class cat😼!</Text>;
  }
}
