import { atom, selector } from 'recoil';

export const textColor = selector({
  key: 'textColor',
  get: ({ get }) => {
    const { r, g, b } = get(rgbArray);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma >= 165 ? '00' : '100';
  },
});

export const hsvArray = selector({
  key: 'hsvArray',
  get: ({ get }) => {
    const { r, g, b } = get(rgbArray);

    const cmax = Math.max(r, g, b);
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;

    let h;
    if (!delta) {
      h = 0;
    } else if (r === cmax) {
      h = (60 * ((g - b) / delta) + 360) % 360;
    } else if (g === cmax) {
      h = (60 * ((b - r) / delta) + 120) % 360;
    } else if (b === cmax) {
      h = (60 * ((r - g) / delta) + 240) % 360;
    }
    h = Math.trunc(h);

    const s = Math.trunc(cmax !== 0 ? (delta / cmax) * 100 : 0);

    const v = Math.trunc((cmax / 255) * 100);

    return { h, s, v };
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
