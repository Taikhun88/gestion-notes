import NoteForm from "@/components/NoteForm";

export default function NewNote() {
  return (
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center p-6">Créer une nouvelle note</h1>
        <NoteForm/>
      </div>
  );
}
