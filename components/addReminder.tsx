"use client";
import React, {useState} from "react";

interface NewReminder {
  onAddReminder: (title: string) => void;
}
const AddNote = ({onAddReminder}: NewReminder) => {
  const [noteText, setNoteText] = useState("");

  const handleAddClick = () => {
    if (noteText.trim() !== "") {
      onAddReminder(noteText);
      // Call the onAddNote function to add the new note
      //   onAddNote(noteText);
      // Clear the input field
      setNoteText("");
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <h2 className="text-xl font-semibold mb-2 text-center">Add New Note</h2>
      <div className="flex">
        <input
          type="text"
          className="w-full border p-2 rounded-md"
          placeholder="Enter your note"
          value={noteText}
          onChange={e => {
            setNoteText(e.target.value);
          }}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          type="submit"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNote;
