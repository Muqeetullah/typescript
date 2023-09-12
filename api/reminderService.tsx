import axios from "axios";
import Reminder from "@/entities/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders(): Promise<Reminder[]> {
    try {
      const response = await this.http.get<Reminder[]>("/todos");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async addReminder(title: string): Promise<Reminder> {
    try {
      const response = await this.http.post<Reminder>("/todos", {
        title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async removeReminder(id: number): Promise<void> {
    try {
      const response = await this.http.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
const reminderServiceInstance = new ReminderService();
export default reminderServiceInstance;
