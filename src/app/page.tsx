import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-8 flex flex-col items-center justify-center min-h-screen bg-red-800">
      
      <main className="w-full max-w-lg flex flex-col items-center space-y-12">
        
        <div className="flex flex-col items-center space-y-8">

          <Image 
            src="/images/loups-garous-logo.png" 
            alt="Logo des Loups-garous de Thiercelieux" 
            width={200} 
            height={200} 
          />

          <div className="flex flex-col items-end font-bold text-stone-100">
            <h1 className="text-4xl uppercase">Loups-Garous</h1>
            <span>de Thiercelieux</span>
          </div>
          
          <p className="text-center text-stone-100 font-medium">
            Gérez vos parties de Loups-Garous efficacement et facilement !
          </p>

        </div>
        
        <div className="flex flex-col gap-4 w-full">
          <Link 
            href="/games/new" 
            className="flex flex-1 items-center justify-center bg-stone-100 text-stone-800 font-bold px-6 py-3 rounded-lg hover:bg-stone-300 transition"
          >
            Nouvelle partie
          </Link>
          
          <Link 
            href="/rules" 
            className="flex flex-1 items-center justify-center text-stone-100 font-bold px-6 py-3 rounded-lg text-center border-4 border-stone-100 hover:border-stone-300 hover:text-stone-300 transition"
          >
            Règles du jeu
          </Link>
        </div>
      </main>
    </div>
  );
};