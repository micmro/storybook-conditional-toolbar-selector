export function config(entry = []) {
  return [...entry, require.resolve("./defaultParameters")];
}

export function managerEntries(entry = []) {
  return [...entry, require.resolve("./register.tsx")]; //👈 addon implementation
}
