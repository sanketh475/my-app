const events = [
  { name: "Lagna Patrika", date: "June 17th, 2026", time: "Morning" },
  { name: "Pasupu Kottadam", date: "June 21st, 2026", time: "Morning" },
  { name: "Odugu", date: "September 6th, 2026", time: "Morning" },
  { name: "Kotnam + Pelli Koduku", date: "October 28th, 2026", time: "Morning" },
  { name: "Haldi", date: "October 29th, 2026", time: "Morning" },
  { name: "Mehandi", date: "October 29th, 2026", time: "Evening" },
  { name: "Snathakam", date: "October 30th, 2026", time: "Morning" },
  { name: "Edurukollu", date: "October 30th, 2026", time: "Afternoon" },
  { name: "Cricket Match", date: "October 30th, 2026", time: "Evening" },
  { name: "Pelli", date: "October 31st, 2026", time: "Morning" },
  { name: "Reception / Sangeeth", date: "October 31st, 2026", time: "Evening" },
  { name: "Vratham", date: "November 1st, 2026", time: "Morning" },
  { name: "Vratham Pelli Koduku", date: "1st Week of November, 2026", time: "To be decided" },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#3b1f1f]">

      <nav className="sticky top-0 z-50 flex justify-center gap-8 py-5 text-lg font-medium border-b bg-[#fff8f0]/90 backdrop-blur">
        <a href="/">Home</a>
        <a href="/events" className="text-[#b7791f] font-bold">Events</a>
        <a href="/guests">Guest List</a>
        <a href="/outfits">Outfits</a>
        <a href="/gifts">Return Gifts</a>
        <a href="/pictures">Pictures</a>
        <a href="/budget">Budget</a>
        <a href="/rsvp">RSVP</a>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b7791f] mb-4">
            Srivalli to Siruvolu
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Wedding Events
          </h1>

          <p className="text-lg text-[#6b4f4f]">
            A celebration of love, family, tradition, and togetherness
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-[#d6a85f]" />

          <div className="space-y-10">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="absolute left-2 md:left-1/2 top-8 h-5 w-5 -translate-x-1/2 rounded-full bg-[#b7791f] border-4 border-[#fff8f0]" />

                <div className="ml-10 md:ml-0 w-full md:w-[45%] rounded-3xl bg-white p-6 shadow-lg border border-[#f0dfc8]">
                  <p className="text-sm font-semibold text-[#b7791f] mb-2">
                    {event.date}
                  </p>

                  <h2 className="text-2xl font-bold mb-3">
                    {event.name}
                  </h2>

                  <div className="inline-block rounded-full bg-[#fff1dc] px-4 py-2 text-sm font-medium text-[#7a4a12]">
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}