import EdTutorials from "./components/EdTutorials";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar/>
      <main className="flex  lg:mx-8 mt-24 gap-8 items-center sm:items-start">
        <Sidebar/>
        <EdTutorials/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
