// src/lib/axios.ts
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ⚠️ remplace par l'URL de ton API Symfony
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
