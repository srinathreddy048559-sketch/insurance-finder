export function slugifyStateName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function stateTitle(name: string) {
  return `${name} Car Insurance — State Minimums + Smarter Comparison`;
}
