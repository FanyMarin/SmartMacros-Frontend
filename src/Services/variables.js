export const isProd = process.env.NODE_ENV === "production";
export const base_url = isProd
  ? "https://floating-everglades-70656.herokuapp.com/api"
  : "http://localhost:3000/api";
