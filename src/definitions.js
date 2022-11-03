export const values = {
  MIN: 0,
  MID: 127,
  MAX: 255,
};

export const rgbString = (colors) => {
  const r = colors[0];
  const g = colors[1];
  const b = colors[2];

  return `rgb(${r} ${g} ${b})`;
};
