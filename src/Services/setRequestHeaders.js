export const setRequestHeaders = () => ({
  Authorization: `Bearer ${localStorage.token ?? ""}`,
  "Content-Type": "application/json",
  accept: "application/json",
});
