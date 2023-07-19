import React, { useState } from 'react';
import { ContainerDiv } from './styled';
import AutocompleteTextInput from '../../components/minor/AutocompleteTextInput';
import { PredefinedUser } from '../../types/users';

type ListItem = {
  id: number;
  description: string;
  responsible: string;
  registerDate: string;
};

const RESPONSIBLE_OPTIONS = ['Irsham', 'Anna', 'Amey', 'Santi', 'Ehsan', 'Sorin'];

const predefinedUsers: PredefinedUser[] = [
  { id: 0, name: 'Emad' },
  { id: 1, name: 'Irsham' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Amey' },
  { id: 4, name: 'Cihan' },
  { id: 5, name: 'Santi' },
  { id: 6, name: 'Ehsan' },
  { id: 7, name: 'Sorin' },
];

const WaitingListPage: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([]);
  const [completedItems, setCompletedItems] = useState<ListItem[]>([]);
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState(RESPONSIBLE_OPTIONS[0]);

  const handleCheckboxChange = (item: ListItem) => {
    if (items.includes(item)) {
      setItems(items.filter((i) => i !== item));
      setCompletedItems([...completedItems, item]);
    } else {
      setCompletedItems(completedItems.filter((i) => i !== item));
      setItems([...items, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: ListItem = {
      id: Date.now(),
      description,
      responsible,
      registerDate: new Date().toLocaleDateString(),
    };
    setItems([...items, newItem]);
    setDescription('');
  };

  return (
    <ContainerDiv>
      <h2>Waiting List</h2>

      <form onSubmit={handleSubmit}>
        <label>
          I'm waiting for{' '}
          <select value={responsible} onChange={(e) => setResponsible(e.target.value)}>
            {RESPONSIBLE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <AutocompleteTextInput predefinedUsers={predefinedUsers} />
        </label>

        <label>
          {' '}to{' '}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
        </label>

        {/* <button type="submit">Add</button> */}
      </form>

      {items.length === 0 ? (
        <p>No items.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item.responsible} is going to <span>{item.description}</span>
              </label>
              <div>
                <p>{item.registerDate}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>Completed Items</h2>
      {completedItems.length === 0 ? (
        <p>No completed items.</p>
      ) : (
        <ul>
          {completedItems.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => handleCheckboxChange(item)}
                />
                <span style={{ textDecoration: 'line-through' }}>{item.description}</span>
              </label>
              <div>
                <p>Responsible: {item.responsible}</p>
                <p>Register Date: {item.registerDate}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ContainerDiv>
  );
};

export default WaitingListPage;
