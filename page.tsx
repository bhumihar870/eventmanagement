"use client"
import { useState } from "react"

const EVENTS = [
  { id: 1, title: "Web Summit", date: "Mar 15", loc: "SF", cat: "Tech", price: 99 },
  { id: 2, title: "Business Meet", date: "Mar 22", loc: "NY", cat: "Network", price: 49 },
  { id: 3, title: "Marketing Talk", date: "Mar 28", loc: "LA", cat: "Marketing", price: 79 },
  { id: 4, title: "AI Conference", date: "Apr 5", loc: "Boston", cat: "Tech", price: 149 },
]

export default function App() {
  const [view, setView] = useState("home")
  const [events, setEvents] = useState(EVENTS)
  const [filter, setFilter] = useState("All")
  const [form, setForm] = useState({ title: "", date: "", location: "" })
  const [regForm, setRegForm] = useState({ name: "", email: "" })
  const [selectedEvent, setSelectedEvent] = useState(null)

  const cats = ["All", ...new Set(EVENTS.map((e) => e.cat))]
  const filtered = filter === "All" ? events : events.filter((e) => e.cat === filter)

  // HOME PAGE
  if (view === "home") {
    return (
      <div>
        <nav
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>EventHub</h1>
          <button
            onClick={() => setView("admin")}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "16px" }}
          >
            Admin
          </button>
        </nav>

        <div style={{ textAlign: "center", background: "#1e40af", color: "white", padding: "30px" }}>
          <h2 style={{ margin: "0 0 10px 0", fontSize: "32px" }}>Find Events</h2>
          <p style={{ margin: 0 }}>Discover amazing events near you</p>
        </div>

        <div style={{ padding: "20px", textAlign: "center", borderBottom: "1px solid #e5e7eb" }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "8px 15px",
                margin: "5px",
                background: filter === c ? "#2563eb" : "#e5e7eb",
                color: filter === c ? "white" : "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          style={{
            padding: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((e) => (
            <div
              key={e.id}
              style={{
                border: "1px solid #e5e7eb",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedEvent(e)
                setView("details")
              }}
            >
              <span
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "3px 8px",
                  borderRadius: "3px",
                  fontSize: "12px",
                }}
              >
                {e.cat}
              </span>
              <h3 style={{ margin: "10px 0 5px 0" }}>{e.title}</h3>
              <p style={{ margin: "3px 0", fontSize: "14px", color: "#666" }}>📅 {e.date}</p>
              <p style={{ margin: "3px 0", fontSize: "14px", color: "#666" }}>📍 {e.loc}</p>
              <p style={{ margin: "10px 0 0 0", fontSize: "18px", fontWeight: "bold", color: "#2563eb" }}>${e.price}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // EVENT DETAILS PAGE
  if (view === "details") {
    return (
      <div>
        <nav
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0 }}>EventHub</h1>
          <button
            onClick={() => setView("home")}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "16px" }}
          >
            Back
          </button>
        </nav>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px 20px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{selectedEvent.title}</h2>
          <div style={{ background: "#f3f4f6", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
            <p>
              <strong>Date:</strong> {selectedEvent.date}
            </p>
            <p>
              <strong>Location:</strong> {selectedEvent.loc}
            </p>
            <p>
              <strong>Price:</strong> ${selectedEvent.price}
            </p>
          </div>

          <h3 style={{ marginBottom: "15px" }}>Register Now</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("✓ Registered!")
              setRegForm({ name: "", email: "" })
              setView("home")
            }}
            style={{ background: "#f9fafb", padding: "20px", borderRadius: "8px" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={regForm.name}
              onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #e5e7eb",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={regForm.email}
              onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #e5e7eb",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ADMIN PAGE
  if (view === "admin") {
    return (
      <div>
        <nav
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ margin: 0 }}>EventHub</h1>
          <button
            onClick={() => setView("home")}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "16px" }}
          >
            Back
          </button>
        </nav>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "30px 20px" }}>
          <h2 style={{ marginBottom: "20px" }}>Admin Dashboard</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <div style={{ background: "#dbeafe", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ margin: "0 0 10px 0", fontWeight: "bold", fontSize: "24px", color: "#1e40af" }}>
                {events.length}
              </p>
              <p style={{ margin: 0, color: "#666" }}>Total Events</p>
            </div>
          </div>

          <h3 style={{ marginBottom: "15px" }}>Add New Event</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (form.title) {
                setEvents([...events, { id: events.length + 1, ...form, cat: "Other", price: 99 }])
                setForm({ title: "", date: "", location: "" })
              }
            }}
            style={{
              background: "#f9fafb",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "30px",
              display: "grid",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Event Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={{ padding: "10px", border: "1px solid #e5e7eb", borderRadius: "5px" }}
            />
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              style={{ padding: "10px", border: "1px solid #e5e7eb", borderRadius: "5px" }}
            />
            <input
              type="text"
              placeholder="Location"
              required
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              style={{ padding: "10px", border: "1px solid #e5e7eb", borderRadius: "5px" }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Add Event
            </button>
          </form>

          <h3 style={{ marginBottom: "15px" }}>All Events</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#1e40af", color: "white" }}>
                <tr>
                  <th style={{ padding: "10px", textAlign: "left" }}>Title</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Location</th>
                  <th style={{ padding: "10px", textAlign: "left" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr key={e.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "10px" }}>{e.title}</td>
                    <td style={{ padding: "10px" }}>{e.date}</td>
                    <td style={{ padding: "10px" }}>{e.location || e.loc}</td>
                    <td style={{ padding: "10px" }}>${e.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
