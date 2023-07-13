import { useState, useEffect } from 'react';
import { CustomInput, NormalText } from './styled';
import LoadingComponent from '../LoadingComponent';
import { USER_NAME_KEY } from '../../../util/constants';

const DynamicName: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoadingName, setIsLoading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem(USER_NAME_KEY);
    if (savedName) {
      setName(savedName);
    }
    setIsLoading(false);
  }, []);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const saveName = (text: string) => {
    setIsEditing(false);
    localStorage.setItem(USER_NAME_KEY, text);
    setName(text);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveName(event.currentTarget.value);
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
          defaultValue={name}
          onKeyUp={handleKeyDown}
          onBlur={handleBlur}
        />
      ) : (
        <NormalText onClick={handleTextClick}>{isLoadingName ? <LoadingComponent /> : name || '<No Name>'}</NormalText>
      )}
    </span>
  );
};

export default DynamicName;
