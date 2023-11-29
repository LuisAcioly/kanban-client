import React, { useState, useContext, useEffect  } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useApi } from '../hooks/useApi';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function UsersSelect({ wkUsers, onSelect }) {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(wkUsers);
  const api = useApi();

  useEffect(() => {

    const getUsers = async () => {
        const result = await api.getUsers();
        console.log(result.data)
        setUsers(result.data)
    }
    
    getUsers();
}, [])

  useEffect(() => {
    setSelectedUsers(wkUsers)
    console.log(wkUsers)
  }, [wkUsers])

  const handleChange = (event) => {
    setSelectedUsers(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="multiple-select-label">Selecionar Usuários</InputLabel>
        <Select
          labelId="multiple-select-label"
          id="multiple-select"
          multiple
          value={selectedUsers}
          onChange={handleChange}
          renderValue={(selected) => selected.map((user) => user.username).join(', ')}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user}>
              <Checkbox checked={selectedUsers.findIndex(val => val.id == user.id) > -1} />
              <ListItemText primary={user.username} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
