// src/store/notesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '@/lib/axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  category: {
    id: string,
    color: string;
    name: string;
  };
  createdAt: string;
};

export type Category = {
  id: string;
  color: string;
  name: string;
};

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get<Note[]>('/notes');
  return response.data;
});

export const fetchCategories = createAsyncThunk('notes/fetchCategories', async () => {
  const response = await axios.get<Category[]>('/category');
  return response.data;
});

export const postNote = createAsyncThunk(
  'notes/postNote',
  async (newNote: Omit<Note, 'id' | 'createdAt'>) => {
    const response = await axios.post<Note>('/notes', newNote);
    return response.data;
  }
);

export const putNote = createAsyncThunk(
  'notes/putNote',
  async (putNote: Note) => {
    const response = await axios.put<Note>("/notes/"+`${putNote.id}`, putNote);
    return response.data;
  }
);

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [] as Note[],
    categories: [] as Category[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Erreur de chargement';
      })
      .addCase(postNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.push(action.payload);        
      })
      .addCase(putNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Erreur de chargement';
      })
      .addCase(putNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(putNote.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.push(action.payload);        
      })
      .addCase(postNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Erreur de chargement';
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; 
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Erreur de chargement';
      });
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
