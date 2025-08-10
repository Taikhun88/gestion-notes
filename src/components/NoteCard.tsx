"use client";
import { useAppSelector } from '@/store/hooks';
import React from 'react'
import NoteCategoryDropdown from '@/components/NoteCategoryDropdown';

export default function NoteCard() {
  const notes = useAppSelector((state) => state.notes.notes);
  const categoryColors: Record<string, string> = {
    neutral: 'bg-neutral-400',
    red: 'bg-red-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };

  return (
    <div>
      {notes.map((note) => (
        <div className={"NoteCard " + categoryColors[note.category.color]} key={note.id}>
          <div className="flex items-center items-baseline justify-between mb-3">
            <h2 className="CardTitle">{note.title}</h2>
            <NoteCategoryDropdown idNote={note.id} idCategory={note.category.id}/>
          </div>
          <p className="CardContent">{note.content}</p>
        </div>
      ))}
    </div>
  )
}
