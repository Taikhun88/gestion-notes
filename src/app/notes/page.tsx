import Main from "@/components/Main";
import { Barriecito } from "next/font/google";

const barriecito = Barriecito({
  subsets: ['latin'],
  weight: ['400'], // poids que tu veux
  display: 'swap',
})

export default function Notes() {   
  return (
    <Main className={barriecito.className}>
      <div className="min-h-screen p-6 text-center">
        <p>Mes notes</p>
      </div>
    </Main>
  );
}
