import sanitizeHtml from 'sanitize-html';
import { data } from "../utils/storage";


export default defineEventHandler(async (event) => {
  const id = event.context.params?.id ?? "undefined"
  const body = await readBody(event)
  const sanitized = sanitizeHtml(body)
  data[id] = sanitized
  return {
    id,
    message: sanitized
  }
})