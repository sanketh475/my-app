export default function Home() {
  return (
     <div className="min-h-screen bg-[#fff8f0] text-[#3b1f1f]">

      {/* NAVBAR */}
      <nav className="flex justify-center gap-8 py-6 text-lg font-medium border-b">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/guests">Guest List</a>
        <a href="/outfits">Outfits</a>
        <a href="/gifts">Return Gifts</a>
        <a href="/pictures">Pictures</a>
        <a href="/budget">Budget</a>
        <a href="/rsvp">RSVP</a>
      </nav>

      {/* HERO SECTION */}
      <section className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4">
            Srivalli to Siruvolu
          </h1>
          <h2 className="text-6xl font-bold">
            October 31st, 2026
          </h2>
        </div>
      </section>

    </div>
  );
}