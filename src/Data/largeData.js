// Generate large test data
export const generateLargeData = (numCategories, rowsPerCategory) => {
  const categories = Array.from({ length: numCategories }, (_, i) => ({
    category: `Category ${i + 1}`,
    rows: Array.from({ length: rowsPerCategory }, (_, j) => ({
      name: `Item ${j + 1}`,
      LYQtr: parseFloat((Math.random() * 100).toFixed(2)),
      TYQtr: parseFloat((Math.random() * 100).toFixed(2)),
      GOLY: `${Math.random() > 0.5 ? "" : "-"}${(Math.random() * 50).toFixed(1)}%`,
    })),
    total: {
      LYQtr: parseFloat((Math.random() * 100).toFixed(2)),
      TYQtr: parseFloat((Math.random() * 100).toFixed(2)),
      GOLY: `${Math.random() > 0.5 ? "" : "-"}${(Math.random() * 50).toFixed(1)}%`,
    },
  }));

  return categories;
};
