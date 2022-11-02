export const getStatSize = (number) => {
  if (number < 2) {
    return 'mini';
  } else if (number < 5) {
    return 'tiny';
  } else if (number < 10) {
    return 'small';
  } else if (number < 20) {
    return 'large';
  } else {
    return 'huge';
  }
};
