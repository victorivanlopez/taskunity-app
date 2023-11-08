
export const calculateDaysRemaining = (futureDate) => {
  const currentDate = new Date();
  const futureDateObj = new Date(futureDate);
  
  const timeDifference = futureDateObj - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysRemaining;
}