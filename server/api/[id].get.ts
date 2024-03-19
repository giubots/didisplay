import { getMessages } from "../utils/storage"

export default defineEventHandler(async (event) => {
    const id = (event.context.params?.id ?? "undefined").replace(/[^a-zA-Z0-9]/g, "")
    return getMessages(id)
})
