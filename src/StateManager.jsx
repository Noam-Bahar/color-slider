import { atom, selector } from 'recoil';
import convert from 'color-convert';

export const textColor = selector({
  key: 'textColor',
  get: ({ get }) => {
    const { r, g, b } = get(rgbArray);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma >= 165 ? '00' : '100';
  },
});

export const hslArray = selector({
  key: 'hslArray',
  get: ({ get }) => {
    const { r, g, b } = get(rgbArray);
    const [h, s, l] = convert.rgb.hsl(r, g, b);
    return { h, s, l };
  },
});

export const rgb = selector({
  key: 'rgb',
  get: ({ get }) => {
    const { r, g, b } = get(rgbArray);
    return `rgb(${r} ${g} ${b})`;
  },
});

export const rgbArray = selector({
  key: 'rgbArray',
  get: ({ get }) => {
    const r = get(redState);
    const g = get(greenState);
    const b = get(blueState);
    return { r, g, b };
  },
});

export const redState = atom({
  key: 'redState',
  default: 40,
});

export const greenState = atom({
  key: 'greenState',
  default: 44,
});

export const blueState = atom({
  key: 'blueState',
  default: 52,
});
