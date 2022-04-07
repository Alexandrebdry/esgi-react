import eslint from "vite-plugin-eslint";

export default {
  "plugins": [
    eslint()
  ],
  "server": {
    "port": 8000,
    "host": "0.0.0.0"
  }
};
