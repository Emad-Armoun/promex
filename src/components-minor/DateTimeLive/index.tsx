import React, { useState, useEffect } from 'react';
import LoadingComponent from '../LoadingComponent';
import { DateTimeDiv } from './styled';

const LiveDateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedDateTime = formatDate(date) + ' ' + formatTime(date);
      setDateTime(formattedDateTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return date.toLocaleTimeString('en-US', options);
  };

  return <DateTimeDiv>{dateTime || <LoadingComponent speed={50} />}</DateTimeDiv>;
};

export default LiveDateTime;
