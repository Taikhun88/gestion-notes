"use client";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotes, fetchCategories } from '@/store/notesSlice';
import NoteCard from './NoteCard';

export default function NotesList() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.notes.loading);

  useEffect(() => {
    dispatch(fetchNotes());
    dispatch(fetchCategories());
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
