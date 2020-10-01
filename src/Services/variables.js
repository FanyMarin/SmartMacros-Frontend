export const isProd = process.env.NODE_ENV === "production";
export const base_url = isProd
  ? "https://smart-macros.herokuapp.com/api"
  : "http://localhost:3000/api";
