"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react'
import NoteCategoryDropdown from '@/components/NoteCategoryDropdown';
import { IoTrashBinOutline } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { deleteNote } from '@/store/notesSlice';

export default function NoteCard() {
  const notes = useAppSelector((state) => state.notes.notes);
  const categoryColors: Record<string, string> = {
    neutral: 'bg-neutral-400',
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };

  const dispatch = useAppDispatch();
function handleDeleteNote(id: string) {
  if (window.confirm(`Es-tu sûr de vouloir supprimer la note ${id} ?`)) {
    dispatch(deleteNote(id));
    console.log(id);    
  }
}

  return (
    <div>
      {notes.map((note) => (
        <div className={"NoteCard " + categoryColors[note.category.color]} key={note.id}>
          <div className="flex items-center items-baseline justify-between mb-3">
            <h2 className="CardTitle">{note.title}</h2>
            <NoteCategoryDropdown idNote={note.id} idCategory={note.category.id} />
          </div>
          <p className="CardContent">{note.content}</p>
          <div className="flex items-center items-baseline justify-start mb-3 gap-2">
            <button onClick={() => handleDeleteNote(note.id)} className='bg-purple-500 p-1 rounded'><IoTrashBinOutline /></button>
            <button className='bg-orange-500 p-1 rounded'><HiOutlinePencilSquare /></button>
          </div>

        </div>
      ))}
    </div>
  )
}
