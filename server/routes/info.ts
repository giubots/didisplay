import { getDataLength } from "../utils/storage"

export default defineEventHandler(async (event) => {
  return {
    build: {
      name: "echoweb",
      version: "1.0.0",
    },
    instance: {
      size: getDataLength()
    }
  }
})
