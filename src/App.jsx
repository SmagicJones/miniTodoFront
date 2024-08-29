import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState({
    title: "",
    note: "",
  });

  const [notes, setNotes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (note.title != "" && note.note != "") {
      setNotes([...notes, note]);
      setNote({
        title: "",
        note: "",
      });
    }
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-2">
          <div className="bg-slate-500 rounded m-2 p-4">
            <h3 className="text-2xl">Add a note</h3>
            <form
              action=""
              onSubmit={handleSubmit}
              className="grid grid-cols-2 p-4"
            >
              <div>
                <label className="p-4" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="p-4 rounded"
                  value={note.title}
                  onChange={(e) =>
                    setNote((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
                <label className="p-4" htmlFor="note">
                  Note
                </label>
                <textarea
                  type="text"
                  name="note"
                  id="note"
                  className="p-4 rounded"
                  value={note.note}
                  onChange={(e) =>
                    setNote((prev) => ({ ...prev, note: e.target.value }))
                  }
                />
              </div>
              <div className="flex justify-end items-end">
                <button className="bg-lime-500 rounded p-4">Submit</button>
              </div>
            </form>
          </div>
          <div className="bg-slate-500 p-4 rounded m-2">
            <div className="grid grid-cols-4 gap-4">
              {notes.map((note) => {
                return (
                  <div className="bg-slate-200 p-4 rounded-xl">
                    <h3>{note.title}</h3>
                    <p>{note.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
}

export default App;
