import { defineEvlogHook } from "evlog/eve";

export default defineEvlogHook({
  init: {
    env: { service: "astrazen" },
    redact: false,
  },
  message: "full",
  redact: false,
  sessionEvent: true,
});
