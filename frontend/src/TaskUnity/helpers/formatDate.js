
export const formatDate = (date) => {
  const objDate = new Date(date);
  console.log(objDate)

  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC'
  };

  return objDate.toLocaleDateString('es-MX', options);
}