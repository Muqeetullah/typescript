import React from "react";
import Reminder from "@/entities/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({items, onRemoveReminder}: ReminderListProps) => {
  return (
    <ul className="mt-4 space-y-2">
      {items.map(item => (
        <li
          key={item.id}
          className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">
              {item.id} - {item.title}
            </span>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => onRemoveReminder(item.id)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
