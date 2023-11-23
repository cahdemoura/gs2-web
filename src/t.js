import React, { useState } from 'react';
 
function Home() {
  const [message, setMessage] = useState('');
  
  // Função para definir uma mensagem no sessionStorage
  const setSessionMessage = () => {
    const message = 'Esta é uma mensagem de exemplo na sessionStorage';
    sessionStorage.setItem('exampleMessage', message);
    setMessage(message);
  };
 
  // Função para obter uma mensagem da sessionStorage
  const getSessionMessage = () => {
    const message = sessionStorage.getItem('exampleMessage');
    setMessage(message || 'Nenhuma mensagem encontrada na sessionStorage');
  };
 
  // Função para limpar a mensagem da sessionStorage
  const clearSessionMessage = () => {
    sessionStorage.removeItem('exampleMessage');
    setMessage('Mensagem na sessionStorage foi removida');
  };
 
  return (
    <div>
      <h1>Exemplo de sessionStorage em Next.js</h1>
      <button onClick={setSessionMessage}>Definir Mensagem</button>
      <button onClick={getSessionMessage}>Obter Mensagem</button>
      <button onClick={clearSessionMessage}>Limpar Mensagem</button>
      <p>{message}</p>
    </div>
  );
}
 
export default Home;