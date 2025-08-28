export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white text-gray-900 font-sans">
      <section className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Minimalist Website</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl text-center">
          A clean, modern, and elegant single-page site. Built with Next.js & Tailwind CSS.
        </p>
      </section>
      <footer className="w-full py-4 border-t text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Minimalist. Powered by Next.js & Vercel.
      </footer>
    </main>
  );
}
