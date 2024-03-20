<template>
  <div>
    <h1>ECHOWEB</h1>
    <div>
      <p>
        Send your Message in the body of a PUT or POST request to /api/your-id.
        PUT will overwrite, POST will append the message to a list.
      </p>
      <p>
        Read the messages with a GET on /api/your-id and on the web at /your-id.
      </p>
      <p>
        A message is a string or an dictionary as follows:
        { type?: "left" | "right", name?: string, text: string }.
        You can provide also a metadata field, associated with the conversation and overridden also in POST requests.
      </p>
    </div>
  </div>
</template>