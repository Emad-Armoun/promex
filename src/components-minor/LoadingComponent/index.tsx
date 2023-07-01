import React, { useState, useEffect } from 'react';

type Props = {
  loadingText?: string,
  speed?: number,
}

const DEFAULT_SPEED = 100;

const LoadingComponent: React.FC<Props> = ({ loadingText = 'Loading...', speed = DEFAULT_SPEED}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => {
        if (prevText === loadingText) {
          return '';
        }
        const nextIndex = prevText.length + 1;
        return loadingText.substring(0, nextIndex);
      });
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{text}</div>;
};

export default LoadingComponent;
