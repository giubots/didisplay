import { data } from "../utils/storage"


export default defineEventHandler(async (event) => {
    const id = event.context.params?.id ?? "undefined"
    const message = data[id] ?? ""
    return message
})