import Main from "@/components/Main";
import { Imbue } from "next/font/google"

const imbue = Imbue({
  subsets: ['latin'],
  weight: ['400', '700'], // poids que tu veux
  display: 'swap',
})

export default function NewNote() {
  return (
    <Main className={imbue.className}>
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-center p-6">Créer une nouvelle note</h1>
      </div>
    </Main>
  );
}
