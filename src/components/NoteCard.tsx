"use client";
import { useAppSelector } from '@/store/hooks';
import React from 'react'

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
          <h2 className="CardTitle">{note.title}</h2>
          <p className="CardContent">{note.content}</p>
        </div>
      ))}
    </div>
  )
}
