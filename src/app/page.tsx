export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-semibold mb-4 tracking-wide">
        Kanato Goto
      </h1>
      <p className="text-lg mb-8">
        Assistant Professor / Runner / Researcher
      </p>

      <nav className="space-x-6">
        <a href="#about" className="underline hover:text-neutral-500 transition">About</a>
        <a href="#research" className="underline hover:text-neutral-500 transition">Research</a>
        <a href="#running" className="underline hover:text-neutral-500 transition">Running</a>
        <a href="#contact" className="underline hover:text-neutral-500 transition">Contact</a>
      </nav>
    </main>
  )
}
