export default defineEventHandler(async (event) => {
  const id = event.context.params?.id ?? "undefined"
  clearConversation(id)
  return id
})
