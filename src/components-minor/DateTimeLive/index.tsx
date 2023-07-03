import React, { useState, useEffect } from 'react';
import LoadingComponent from '../LoadingComponent';
import { DateDiv, DateTimeDiv } from './styled';

const LiveDateTime: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setDate(formatDate(date));
      setTime(formatTime(date));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return date.toLocaleTimeString('en-US', options);
  };

  return <DateTimeDiv>{date ? (
    <>
      <DateDiv>{date}</DateDiv>
      <div>{time}</div>
    </>
  ) : <LoadingComponent speed={50} />}</DateTimeDiv>;
};

export default LiveDateTime;
