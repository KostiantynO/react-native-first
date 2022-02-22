import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export const AnimatedLabel = ({
  isFocusedElem,
  animValues,

  style,
  initValue = 0,
  children,
}) => {
  const translateYAnimated = useRef(new Animated.Value(initValue)).current;

  useEffect(() => {
    const shouldGoUp = isFocusedElem ? true : false;
    console.log('Hi');

    const animation = Animated.timing(translateYAnimated, {
      toValue: shouldGoUp ? animValues.top : animValues.bottom,
      duration: 250,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    });

    animation.start();

    return () => {
      animation.stop();
    };
  }, [animValues.bottom, animValues.top, isFocusedElem, translateYAnimated]);

  const dynamicLabel = [
    style,
    { transform: [{ translateY: translateYAnimated }] },
  ];

  return <Animated.View style={dynamicLabel}>{children}</Animated.View>;
};

AnimatedLabel.propTypes = {
  isFocusedElem: PropTypes.bool.isRequired,
  animValues: PropTypes.object.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  initValue: PropTypes.number,
  children: PropTypes.node,
};
