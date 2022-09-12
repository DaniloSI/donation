import { range } from 'ramda';

import items from './items';

const numberBelowThreshold = (value: number, threshold: number) =>
  (Math.trunc(value) % threshold) + 1;

const getMonthFromValue = (value: number) =>
  numberBelowThreshold(value, new Date().getMonth() + 1)
    .toString()
    .padStart(2, '0');

const getDayFromValue = (value: number) => {
  const currentMonth = new Date().getMonth() + 1;
  const month = numberBelowThreshold(value, currentMonth);

  return numberBelowThreshold(
    value,
    month >= currentMonth ? new Date().getMonth() + 1 : 30
  )
    .toString()
    .padStart(2, '0');
};

const getDateCreatedFromPrice = (price: number) => {
  const month = getMonthFromValue(price);
  const day = getDayFromValue(price);
  return `2022-${month}-${day}T00:00:00.000Z`;
};

const getIdFromNumber = (number: number) =>
  `56528b15-1245-4894-af42-99e9150a23${number}`;

export const getMockedItems = (amount: number) =>
  range(0, amount).map((number) => {
    const itemMock = items[number % items.length];
    const price = Math.abs(Math.tan(number + 1)) * 1000;
    const dateCreated = getDateCreatedFromPrice(price);
    const id = getIdFromNumber(number);

    return {
      id,
      price,
      dateCreated,
      ...itemMock
    };
  });
