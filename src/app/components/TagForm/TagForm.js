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
    <form method="POST" onSubmit={handleSubmit} onReset={onCancel} className={styles.tag_form}>
      <input
        type="text"
        placeholder="Введите название тега"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        className="p-2 m-2"
        pattern="^.{2,40}$"
        title="Название тега должно быть от 2 до 40 символов"
        required
      />
      <button type="submit" className={styles.tag_submit}>Добавить</button>
      <button type="reset" className={styles.tag_cancel}>Отмена</button>
    </form>
  );
};

