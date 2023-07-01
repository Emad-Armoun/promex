import { styled } from '@deliveryhero/armor';
import React, { useState, useEffect } from 'react';

const CustomInput = styled.input`
  background-color: white;
  color: black;
  border: 1px solid #DDD;
  border-radius: 15px;
  padding: 4px 10px;
  max-width: 50px;
  font-family: 'Inria Sans', sans-serif;
  font-size: 18px;
  outline: none;
  transition: all 0.5s ease-in-out;

  :focus {
    max-width: 90px;
  }
`;

const NormalText = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const DynamicName: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoadingName, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
      setText(savedText);
    }
    setIsLoading(false);
  }, []);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const saveText = (text: string) => {
    setIsEditing(false);
    localStorage.setItem('savedText', text);
    setText(text);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveText(event.currentTarget.value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  }

  return (
    <span>
      {isEditing ? (
        <CustomInput
          type="text"
          autoFocus
          defaultValue={text}
          onKeyUp={handleKeyDown}
          onBlur={handleBlur}
        />
      ) : (
        <NormalText onClick={handleTextClick}>{isLoadingName ? '...' : text || '<No Name>'}</NormalText>
      )}
    </span>
  );
};

export default DynamicName;
