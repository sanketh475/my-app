"use client";

import { useState } from "react";

const events = [
  "Lagna Patrika",
  "Pasupu Kottadam",
  "Odugu",
  "Kotnam + Pelli Koduku",
  "Haldi",
  "Mehandi",
  "Snathakam",
  "Edurukollu",
  "Cricket Match",
  "Pelli",
  "Reception / Sangeeth",
  "Vratham",
  "Vratham Pelli Koduku",
];

const groups = {
  sankethValli: ["Sanketh", "Valli"],
  sankethFamily: ["Amma", "Nanna", "Anna", "Vadina", "Vrinda"],
  valliFamily: ["Amma", "Nanna", "Krishna"],
};

export default function Outfits() {
  const [activeTab, setActiveTab] = useState("sankethValli");
  const [outfits, setOutfits] = useState<Record<string, string>>({});

  function updateOutfit(person: string, event: string, value: string) {
    const key = `${activeTab}-${person}-${event}`;

    setOutfits({
      ...outfits,
      [key]: value,
    });
  }

  function getOutfit(person: string, event: string) {
    const key = `${activeTab}-${person}-${event}`;
    return outfits[key] || "";
  }

  const people = groups[activeTab as keyof typeof groups];

  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#3b1f1f]">
      <nav className="sticky top-0 z-50 flex justify-center gap-8 py-5 text-lg font-medium border-b bg-[#fff8f0]/90 backdrop-blur">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/guests">Guest List</a>
        <a href="/outfits" className="text-[#b7791f] font-bold">Outfits</a>
        <a href="/gifts">Return Gifts</a>
        <a href="/pictures">Pictures</a>
        <a href="/budget">Budget</a>
        <a href="/rsvp">RSVP</a>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b7791f] mb-4">
            Srivalli to Siruvolu
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Outfit Planner
          </h1>

          <p className="text-lg text-[#6b4f4f]">
            Track planned outfits for each wedding event
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("sankethValli")}
            className={`rounded-full px-6 py-3 font-semibold ${
              activeTab === "sankethValli"
                ? "bg-[#b7791f] text-white"
                : "bg-white border border-[#f0dfc8]"
            }`}
          >
            Sanketh and Valli
          </button>

          <button
            onClick={() => setActiveTab("sankethFamily")}
            className={`rounded-full px-6 py-3 font-semibold ${
              activeTab === "sankethFamily"
                ? "bg-[#b7791f] text-white"
                : "bg-white border border-[#f0dfc8]"
            }`}
          >
            Sanketh&apos;s Family
          </button>

          <button
            onClick={() => setActiveTab("valliFamily")}
            className={`rounded-full px-6 py-3 font-semibold ${
              activeTab === "valliFamily"
                ? "bg-[#b7791f] text-white"
                : "bg-white border border-[#f0dfc8]"
            }`}
          >
            Valli&apos;s Family
          </button>
        </div>

        <div className="rounded-3xl bg-white shadow-lg border border-[#f0dfc8] overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="bg-[#b7791f] text-white">
                <th className="text-left px-6 py-4">Event</th>
                {people.map((person) => (
                  <th key={person} className="text-left px-6 py-4">
                    {person}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {events.map((event) => (
                <tr key={event} className="border-b border-[#f0dfc8]">
                  <td className="px-6 py-4 font-semibold bg-[#fffaf3]">
                    {event}
                  </td>

                  {people.map((person) => (
                    <td key={person} className="px-6 py-4">
                      <input
                        type="text"
                        placeholder="Outfit details"
                        value={getOutfit(person, event)}
                        onChange={(e) =>
                          updateOutfit(person, event, e.target.value)
                        }
                        className="w-full rounded-xl border border-[#f0dfc8] px-4 py-3 outline-none focus:border-[#b7791f]"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}