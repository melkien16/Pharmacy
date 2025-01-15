export const sortData = (data, key, ascending = true) => {
  return data.sort((a, b) => {
    let valueA = key === "distance" ? parseFloat(a[key]) : a[key];
    let valueB = key === "distance" ? parseFloat(b[key]) : b[key];

    if (ascending) {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};
