import { getDataLength } from "../utils/storage";

export default defineEventHandler(async (event) => {
  return {
    build: {
      name: "DiDisplay",
      version: "1.0.1",
    },
    instance: {
      size: getDataLength(),
    },
  };
});
