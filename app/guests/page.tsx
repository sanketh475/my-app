"use client";

import { useState } from "react";

const initialGuests = [
  { id: 1, name: "Srinivas Rao", count: 1, from: "Sanketh" },
  { id: 2, name: "Sridevi", count: 1, from: "Sanketh" },
  { id: 3, name: "Lakshman", count: 1, from: "Sanketh" },
  { id: 4, name: "Manasa", count: 1, from: "Sanketh" },
  { id: 5, name: "Vrinda", count: 1, from: "Sanketh" },
  { id: 6, name: "Nikith", count: 2, from: "Sanketh" },
  { id: 7, name: "Anirudh", count: 1, from: "Sanketh" },
  { id: 8, name: "Srinivas Sarsam", count: 2, from: "Sanketh" },
  { id: 9, name: "Abhilash Gargeya", count: 4, from: "Sanketh" },
  { id: 10, name: "Sandeep Anna", count: 2, from: "Sanketh" },
  { id: 11, name: "Kiran", count: 2, from: "Sanketh" },
  { id: 12, name: "Santhosh", count: 2, from: "Sanketh" },
  { id: 13, name: "Lalit", count: 2, from: "Sanketh" },
  { id: 14, name: "Aishwarya", count: 2, from: "Sanketh" },
  { id: 15, name: "Tasleem", count: 3, from: "Sanketh" },
  { id: 16, name: "Ashwath", count: 1, from: "Sanketh" },
  { id: 17, name: "Kc", count: 2, from: "Sanketh" },
  { id: 18, name: "Sai", count: 2, from: "Sanketh" },
  { id: 19, name: "Sreedhar", count: 2, from: "Sanketh" },
  { id: 20, name: "Tarini", count: 2, from: "Sanketh" },
  { id: 21, name: "Aditya Nagulapalli", count: 4, from: "Sanketh" },
  { id: 22, name: "Shanthan Nagulapalli", count: 4, from: "Sanketh" },
  { id: 23, name: "Vinay Gundamraj", count: 4, from: "Sanketh" },
  { id: 24, name: "Meena Gundamraj", count: 4, from: "Sanketh" },
  { id: 25, name: "Srikar", count: 2, from: "Sanketh" },
  { id: 26, name: "Manisha", count: 2, from: "Sanketh" },
  { id: 27, name: "Suresh", count: 2, from: "Sanketh" },
  { id: 28, name: "Preetham", count: 1, from: "Sanketh" },
  { id: 29, name: "Manohar Kotapati", count: 4, from: "Sanketh" },
  { id: 30, name: "Mohan", count: 2, from: "Sanketh" },
  { id: 31, name: "Nayan", count: 2, from: "Sanketh" },
  { id: 32, name: "Sharath", count: 2, from: "Sanketh" },
  { id: 33, name: "Vanka", count: 2, from: "Sanketh" },
  { id: 34, name: "Sai", count: 2, from: "Sanketh" },
  { id: 35, name: "Sandeep", count: 1, from: "Sanketh" },
  { id: 36, name: "Doli", count: 2, from: "Sanketh" },
  { id: 37, name: "Office", count: 11, from: "Sanketh" },
  { id: 38, name: "Saradhi", count: 4, from: "Sanketh" },
  { id: 39, name: "Manohar", count: 1, from: "Sanketh" },
  { id: 40, name: "Ramakka", count: 3, from: "Sanketh" },
  { id: 41, name: "Kavitha pinni", count: 2, from: "Sanketh" },
  { id: 42, name: "Krishna priya", count: 2, from: "Sanketh" },
  { id: 43, name: "Haritha Atha", count: 2, from: "Sanketh" },
  { id: 44, name: "Chandu pednana", count: 2, from: "Sanketh" },
  { id: 45, name: "Janu mama", count: 2, from: "Sanketh" },
  { id: 46, name: "Kittu Mama", count: 2, from: "Sanketh" },
  { id: 47, name: "Niha", count: 2, from: "Sanketh" },
  { id: 48, name: "Sanju, vaishu, Kalyan", count: 3, from: "Sanketh" },
  { id: 49, name: "Abhinav", count: 1, from: "Sanketh" },
  { id: 50, name: "Raghav", count: 2, from: "Sanketh" },
];

export default function Guests() {
  const [guests, setGuests] = useState(initialGuests);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [guestFrom, setGuestFrom] = useState("Sanketh");

  const sankethGuests = guests.filter((guest) => guest.from === "Sanketh");
  const srivalliGuests = guests.filter((guest) => guest.from === "Srivalli");

  const sankethTotal = sankethGuests.reduce((sum, guest) => sum + guest.count, 0);
  const srivalliTotal = srivalliGuests.reduce((sum, guest) => sum + guest.count, 0);
  const totalGuests = sankethTotal + srivalliTotal;

  function addGuest() {
    if (!guestName || !guestCount) return;

    setGuests([
      ...guests,
      {
        id: Date.now(),
        name: guestName,
        count: Number(guestCount),
        from: guestFrom,
      },
    ]);

    setGuestName("");
    setGuestCount("");
    setGuestFrom("Sanketh");
  }

  function removeGuest(id: number) {
    setGuests(guests.filter((guest) => guest.id !== id));
  }

  function GuestTable({ title, guests, total }: any) {
    return (
      <div className="rounded-3xl bg-white shadow-lg border border-[#f0dfc8] overflow-hidden">
        <div className="bg-[#b7791f] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>Total: {total}</p>
        </div>

        <div className="grid grid-cols-3 bg-[#fff1dc] font-semibold px-6 py-3">
          <div>Guest</div>
          <div className="text-right">Number of People</div>
          <div className="text-right">Action</div>
        </div>

        {guests.map((guest: any) => (
          <div
            key={guest.id}
            className="grid grid-cols-3 px-6 py-4 border-b border-[#f0dfc8] last:border-b-0 items-center"
          >
            <div className="font-medium">{guest.name}</div>
            <div className="text-right font-semibold">{guest.count}</div>
            <button
              onClick={() => removeGuest(guest.id)}
              className="text-right text-red-600 text-sm font-semibold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#3b1f1f]">
      <nav className="sticky top-0 z-50 flex justify-center gap-8 py-5 text-lg font-medium border-b bg-[#fff8f0]/90 backdrop-blur">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/guests" className="text-[#b7791f] font-bold">
          Guest List
        </a>
        <a href="/outfits">Outfits</a>
        <a href="/gifts">Return Gifts</a>
        <a href="/pictures">Pictures</a>
        <a href="/budget">Budget</a>
        <a href="/rsvp">RSVP</a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b7791f] mb-4">
            Srivalli to Siruvolu
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">Guest List</h1>

          <p className="text-lg text-[#6b4f4f]">
            Total Guests: <span className="font-bold">{totalGuests}</span>
          </p>
        </div>

        <div className="rounded-3xl bg-white shadow-lg border border-[#f0dfc8] p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Add Guest</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Guest name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="border border-[#f0dfc8] rounded-xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="Total people"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="border border-[#f0dfc8] rounded-xl px-4 py-3"
            />

            <select
              value={guestFrom}
              onChange={(e) => setGuestFrom(e.target.value)}
              className="border border-[#f0dfc8] rounded-xl px-4 py-3"
            >
              <option value="Sanketh">Sanketh</option>
              <option value="Srivalli">Srivalli</option>
            </select>

            <button
              onClick={addGuest}
              className="rounded-xl bg-[#b7791f] text-white font-semibold px-4 py-3"
            >
              Add Guest
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <GuestTable
            title="Sanketh Side"
            guests={sankethGuests}
            total={sankethTotal}
          />

          <GuestTable
            title="Srivalli Side"
            guests={srivalliGuests}
            total={srivalliTotal}
          />
        </div>
      </main>
    </div>
  );
}