enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY) {
    return true;
  }
  return false;
};
