import { DateTime } from 'luxon';

export const getRelativeCalendar = (dateTimeIso: string) => {
  const relativeCalendar = DateTime.fromISO(dateTimeIso).toRelativeCalendar({
    locale: 'pt-BR'
  });

  const capitalizedRelativeCalendar =
    (relativeCalendar?.[0].toUpperCase() ?? '') + relativeCalendar?.slice(1) ??
    '';

  return capitalizedRelativeCalendar;
};
