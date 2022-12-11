export const dynamicSort = (property) => {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

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

export const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}-${parseInt(result[2], 16)}-${parseInt(
        result[3],
        16,
      )}`
    : null;
};

export const rgbToHex = (r, g, b) =>
  '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
