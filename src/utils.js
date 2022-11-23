function dynamicSort(property) {
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
}

export { dynamicSort };

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
