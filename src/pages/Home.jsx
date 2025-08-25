import { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import PostList from '../components/PostList';
import { useUsers } from '../hooks/useUsers';

export default function Home() {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState(null);

  const handleUserSubmit = (userData) => {
    if (editingUser) {
      updateUser(userData);
      setEditingUser(null);
    } else {
      addUser(userData);
    }
  };

  const handleUserEdit = (user) => {
    setEditingUser(user);
  };

  const handleUserCancel = () => {
    setEditingUser(null);
  };

  const handleUserDelete = (userId) => {
    deleteUser(userId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto max-w-7xl p-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Panel de Administración
          </h1>
          <p className="text-lg text-gray-600">
            Gestiona usuarios y visualiza posts desde la API pública
          </p>
        </div>

        {/* Sección de Gestión de Usuarios */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              <h2 className="text-xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Gestión de Usuarios
              </h2>
            </div>
            <div className="p-6">
              <UserForm 
                user={editingUser}
                onSubmit={handleUserSubmit}
                onCancel={handleUserCancel}
              />
              <UserList 
                users={users}
                onEdit={handleUserEdit}
                onDelete={handleUserDelete}
              />
            </div>
          </div>
        </section>

        {/* Sección de Posts */}
        <section>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600">
              <h2 className="text-xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Posts desde API Pública
              </h2>
            </div>
            <div className="p-6">
              <PostList />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
