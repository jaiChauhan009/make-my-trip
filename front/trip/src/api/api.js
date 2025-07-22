import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to add JWT token if present
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (data) => instance.post("/auth/signup", data);
export const login = (data) => instance.post("/auth/login", data);
export const getBookings = () => instance.get("/booking");
export const createBooking = (data) => instance.post("/booking", data);
export const getBookingById = (id) => instance.get(`/booking/${id}`);

export default instance;
