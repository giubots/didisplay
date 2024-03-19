type Message = { type: "left" | "right" | null, name: string | null, text: string }
type Conversation = { messages: Message[] }

const data: { [id: string]: Conversation } = {}

export const addMessage = (id: string, text: string, name: string | null = null, type: "left" | "right"): void => {
    if (!data[id]) {
        data[id] = { messages: [] }
    }
    data[id].messages.push({ type, name, text })
}

export const addMessageSimple = (id: string, text: string): void => {
    data[id] = { messages: [{ type: null, name: null, text }] }
}

export const getMessages = (id: string): Conversation => data[id] ?? { messages: [] }

export const getDataLength = (): number => Object.keys(data).length

