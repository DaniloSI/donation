import { DateTime } from 'luxon';

export const getRelativeCalendar = (dateTimeIso: string) => {
  const relativeCalendar = DateTime.fromISO(dateTimeIso).toRelativeCalendar({
    locale: 'pt-BR'
  });
  return (
    (relativeCalendar?.[0].toUpperCase() ?? '') + relativeCalendar?.slice(1) ??
    ''
  );
};
