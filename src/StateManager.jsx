import { atom, selector } from 'recoil';

export const colorState = selector({
  key: 'colorState',
  get: ({ get }) => {
    const r = get(redState);
    const g = get(greenState);
    const b = get(blueState);
    return [r, g, b];
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
