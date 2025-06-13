"use client";
import { useAppSelector } from '@/store/hooks';
import React from 'react'

export default function NoteCard() {
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <div>
    {notes.map((note) => (
      <div className="NoteCard" key={note.id}>
        <h2 className="CardTitle">{note.title}</h2>
        <p className="CardContent">{note.content}</p>
    </div>
    ))}
    </div>
  )
}
