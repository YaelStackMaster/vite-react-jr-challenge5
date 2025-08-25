// login fake, manejo de localStorage
// TAREA JR: Explicar cómo funciona y de manera opcional qué mejoras se pueden implementar
// mejorarlo o cambiarlo a gusto. No es necesario usar un JWT real, solo simular
export const login = ({ username, password }) => {
  if(username === 'admin' && password === '1234'){
    localStorage.setItem('fake-jwt-token', 'fake-jwt-token');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('fake-jwt-token');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('fake-jwt-token');
};
