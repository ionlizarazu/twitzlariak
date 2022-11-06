export const getStatSize = (number) => {
  if (number < 20) {
    return 'mini';
  } else if (number < 50) {
    return 'tiny';
  } else if (number < 75) {
    return 'small';
  } else if (number < 100) {
    return 'large';
  } else {
    return 'huge';
  }
};
