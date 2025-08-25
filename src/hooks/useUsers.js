import { useState, useEffect } from 'react';

const USERS_STORAGE_KEY = 'users';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  // Cargar usuarios desde localStorage al inicializar
  useEffect(() => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsers) {
      try {
        setUsers(JSON.parse(storedUsers));
      } catch (error) {
        console.error('Error parsing stored users:', error);
        setUsers([]);
      }
    } else {
      // Usuarios de ejemplo si no hay ninguno
      const sampleUsers = [
        {
          id: '1',
          name: 'Juan Pérez',
          email: 'juan.perez@ejemplo.com',
          phone: '+34 123 456 789',
          role: 'admin'
        },
        {
          id: '2',
          name: 'María García',
          email: 'maria.garcia@ejemplo.com',
          phone: '+34 987 654 321',
          role: 'moderator'
        },
        {
          id: '3',
          name: 'Carlos López',
          email: 'carlos.lopez@ejemplo.com',
          phone: '+34 555 123 456',
          role: 'user'
        }
      ];
      setUsers(sampleUsers);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(sampleUsers));
    }
  }, []);

  // Guardar usuarios en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const addUser = (userData) => {
    const newUser = {
      ...userData,
      id: userData.id || Date.now().toString()
    };
    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  const updateUser = (userData) => {
    setUsers(prev => prev.map(user => 
      user.id === userData.id ? userData : user
    ));
    return userData;
  };

  const deleteUser = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  const searchUsers = (searchTerm) => {
    if (!searchTerm.trim()) return users;
    
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return {
    users,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    searchUsers
  };
};
