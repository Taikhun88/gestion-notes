"use client";
import { useAppSelector } from '@/store/hooks';
import React from 'react'

export default function NoteCard() {
  const notes = useAppSelector((state) => state.notes.notes);
  return (
    <div>
    {notes.map((note) => (
      <div className={`NoteCard ${note.category.color}`} key={note.id}>
        <h2 className="CardTitle">{note.title}</h2>
        <p className="CardContent">{note.content}</p>
        {/* <div className={`bg-${note.category.color}-500`}>COLOR</div> */}
        {/* TODO Utiliser une map manuelle avec le Record. Cf GPT */}
    </div>
    ))}
    </div>
  )
}
