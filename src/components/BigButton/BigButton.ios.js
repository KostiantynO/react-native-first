import { Button } from 'react-native';

export const BigButton = ({ ...props }) => {
  return <Button styles={{ height: 40 }} {...props} />;
};
