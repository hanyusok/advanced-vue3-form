import { defineStore } from "pinia"
import { Timestamp } from 'firebase/firestore'

export const useLeadStore = defineStore({
  id: "lead",
  state: () => ({
    formData: {
      timestamp: Timestamp.now()
    }
  })
})
