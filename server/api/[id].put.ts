import { addMessage, addMessageSimple } from "../utils/storage"


export default defineEventHandler(async (event) => {
  const id = (event.context.params?.id ?? "undefined").replace(/[^a-zA-Z0-9]/g, "")
  const body = await readBody(event)

  if (typeof body === "string") {
    const text = sanitizeStatusMessage(body)
    addMessageSimple(id, text)
    return { id, text }
  }

  if (!body.text) {
    throw createError({ statusCode: 400, message: "Missing text attribute" })
  }
  const text = sanitizeStatusMessage(body.text)
  const name = sanitizeStatusMessage(body.name)

  if (!body.type || !["left", "right"].includes(body.type)) {
    throw createError({ statusCode: 400, message: "Attribute type must be left or right" })
  }

  addMessage(id, text, name, body.type)
  return { id, text, name, type: body.type }
})