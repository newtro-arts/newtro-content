import EdTutorials from "./components/EdTutorials";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex mt-24 gap-8 items-center sm:items-start">
        <EdTutorials/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
