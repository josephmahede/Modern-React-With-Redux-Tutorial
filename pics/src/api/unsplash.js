import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID hqcu9q8EKzaVAfqhJNQ8NkjZVNpo9L1oW83QcDz1sFE",
  },
});
