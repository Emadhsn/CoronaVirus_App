const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getPercentageNumber = (n1, n2) => {
  return Math.floor((n1 / n2) * 100)?.toFixed(2);
};

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const getRandomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
};

export {isDev, sleep, getBase64, getRandomColor, getPercentageNumber};
