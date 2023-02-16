export const stringToHsl = (str: string, s: number = 80, l: number = 30) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  const t = l > 70 ? "#555" : "#fff";
  return { h, s, l, t };
};
