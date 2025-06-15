"use client";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotes } from '@/store/notesSlice';
import NoteCard from './NoteCard';

export default function NotesList() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
  const loading = useAppSelector((state) => state.notes.loading);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Chargement...</p>}
      <div className="ListNotes">
        <NoteCard/>
      </div>
    </div>
  );
}
