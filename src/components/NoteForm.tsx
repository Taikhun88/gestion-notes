// src/components/NoteForm.tsx
'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addNote } from '@/store/notesSlice';
import { useRouter } from 'next/navigation';

export default function NoteForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote = {
      title,
      content,
    };

    dispatch(addNote(newNote));
    router.push('/notes'); // redirection
  };

  return (
<form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-6">
  <div>
    <label htmlFor="title" className="block text-sm font-medium noteFormLabel">
      Titre
    </label>
    <input
      id="title"
      className="mt-1 block w-full rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring noteFormInput"
      value={title}
      onChange={e => setTitle(e.target.value)}
      required
    />
  </div>

  <div>
    <label htmlFor="content" className="block text-sm font-medium noteFormLabel">
      Contenu
    </label>
    <textarea
      id="content"
      className="mt-1 block w-full rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring noteFormTextArea"
      rows={5}
      value={content}
      onChange={e => setContent(e.target.value)}
      required
    />
  </div>

  <button
    type="submit"
    className="w-full font-semibold py-2 px-4 rounded-md transition duration-200 noteBtnForm"
  >
    Créer
  </button>
</form>


  );
}
