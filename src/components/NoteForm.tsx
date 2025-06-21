// src/components/NoteForm.tsx
'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { addNote } from '@/store/notesSlice';
import { useRouter } from 'next/navigation';
import { log } from 'console';

export default function NoteForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(category);
    fetch("http://localhost:8000/api/category/" + category)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de la catégorie');
        }
        return response.json();
      })
      .then(data => {
        const fetchedCategory = data;
        const newNote = {
          id: "",
          title,
          content,
          createdAt: "",
          category: fetchedCategory
        };

        dispatch(addNote(newNote));
        router.push('/notes'); // redirection
      })
      .catch(error => {
        console.error("Erreur :", error);
      });



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

      <div>
        <label htmlFor="category" className="block text-sm font-medium noteFormLabel">
          Catégorie
        </label>
        <select
          name="category"
          id="category"
          className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="1">Par défaut</option>
          <option value="2">Todo list</option>
          <option value="3">Mémo perso</option>
          <option value="4">Planning</option>
        </select>
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
