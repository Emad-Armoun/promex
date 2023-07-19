import React, { useState } from 'react';
import { PredefinedUser as User } from '../../../types/users';
import { ContainerDiv, ListUl } from './styled';

type Props = {
  predefinedUsers: User[];
}

const AutocompleteTextInput: React.FC<Props> = ({ predefinedUsers }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userList, setUserList] = useState<User[]>(predefinedUsers);
  const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSelectedUser(null);

    console.log('userList', userList);
    const matched = userList.filter((user) =>
      user.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setMatchedUsers(matched);
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setInputValue(user.name);
    setMatchedUsers([]);
  };

  const handleAddUser = () => {
    if (inputValue.trim() === '') return;

    const newUser: User = {
      id: Date.now(),
      name: inputValue,
    };
    setUserList([...userList, newUser]);
    setSelectedUser(newUser);
    setInputValue('');
    setMatchedUsers([]);
  };

  return (
    <ContainerDiv>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />

      {matchedUsers.length > 0 && (
        <ListUl>
          {matchedUsers.map((user) => (
            <li key={user.id} onClick={() => handleSelectUser(user)}>
              {user.name}
            </li>
          ))}
        </ListUl>
      )}

      {/* {selectedUser && <p>Selected User: {selectedUser.name}</p>} */}

      {/* <button onClick={handleAddUser}>Add New User</button> */}
    </ContainerDiv>
  );
};

export default AutocompleteTextInput;
