export default defineEventHandler(async (event) => {
    const id = event.context.params?.id ?? "undefined"
    return getConversation(id)
})
