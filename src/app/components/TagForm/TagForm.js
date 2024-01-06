import styles from './tagform.module.scss'

import React, { useState } from 'react';

export default function TagForm ({ onSubmit, onCancel }) {
  const [tagName, setTagName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/tags', { 
        method:  'POST',
        body: JSON.stringify({ tagName }),
    }); 
    onSubmit(tagName);
  };

  return (
    <form method="POST" onSubmit={handleSubmit} onReset={onCancel} className="bg-slate-400 mt-4 flex flex-row justify-center">
      <input
        type="text"
        placeholder="Введите название тега"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        className="p-2 m-2"
      />
      <button type="submit" className="p-2 m-2 bg-green-600">Добавить</button>
      <button type="reset" className="p-2 m-2 bg-red-700">Отмена</button>
    </form>
  );
};

