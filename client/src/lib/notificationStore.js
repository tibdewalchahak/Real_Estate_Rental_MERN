import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
  try {
    const res = await apiRequest.get("/users/notification");
    set({ number: res.data });
  } catch (err) {
    console.error("Notification fetch failed:", err.response?.data || err.message);
    if (err.response?.status === 401) {
      console.warn("Unauthorized — maybe token missing or expired?");
    }
  }
},

}));
