type Message = { type?: "left" | "right", name?: string, text: string }
type Conversation = { messages: Message[], metadata?: string }

const data: { [id: string]: Conversation } = {}

export const addMessage = (id: string, message: Message): void => {
    if (!data[id]) {
        data[id] = { messages: [] }
    }
    data[id].messages.push(message)
}

export const setMetadata = (id: string, metadata: string): void => {
    if (!data[id]) {
        data[id] = { messages: [] }
    }
    data[id].metadata = metadata
}

export const setConversation = (id: string, messages: Message[], metadata?: string): void => {
    data[id] = { messages, metadata }
}

export const getConversation = (id: string): Conversation => data[id] ?? { messages: [] }

export const getDataLength = (): number => Object.keys(data).length

export const clearConversation = (id: string): void => {
    delete data[id]
}