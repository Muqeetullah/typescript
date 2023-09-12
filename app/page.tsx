"use client";
import React, {useEffect, useState} from "react";

import ReminderList from "@/components/reminderList";
import Reminder from "@/entities/reminder";
import reminderService from "@/api/reminderService";
import AddNote from "@/components/addReminder";

const Page = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);
  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  const removeReminder = async (id: number) => {
    console.log(id);
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };
  const addReminder = async (title: string) => {
    const reminder = await reminderService.addReminder(title);
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="mx-16">
      <h2 className="text-3xl font-extrabold  my-8">Todo List</h2>
      <AddNote onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
};

export default Page;
