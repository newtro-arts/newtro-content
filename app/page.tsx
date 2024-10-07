import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
