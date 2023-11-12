
export const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 6);

  const formatDate = currentDate.toISOString().split('T')[0];
  return formatDate;
}