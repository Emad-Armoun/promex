import { useState, useEffect } from 'react';
import { CustomInput, NormalText } from './styled';
import LoadingComponent from '../LoadingComponent';

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
        <NormalText onClick={handleTextClick}>{isLoadingName ? <LoadingComponent /> : text || '<No Name>'}</NormalText>
      )}
    </span>
  );
};

export default DynamicName;
