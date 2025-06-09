import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Note = {
  title: string
  content: string
}

type NotesState = {
  notes: Note[]
}

const initialState: NotesState = {
  notes: [],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload)
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload
    },
  },
})

export const { addNote, setNotes } = notesSlice.actions
export default notesSlice.reducer
