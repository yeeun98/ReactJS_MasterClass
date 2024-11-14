import { atom, selector } from 'recoil';

export const minuteState = atom<number>({
  key: 'minutes',
  default: 0
});

export const hourSelector = selector<number>({
  key: 'hoursSelector',
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  }
});