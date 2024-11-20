export const columns = [
    {
      field: 'supermarket',
      headerClassName: 'super-app-theme--col1',
      headerName: 'Supermarkets',
      flex: 4,
    },
    {
      field: 'lyQtr',
      headerClassName: 'super-app-theme--col2',
      headerName: 'LY Qtr',
      flex: 2,
    },
    {
      field: 'prevQtr',
      headerClassName: 'super-app-theme--col2',
      headerName: 'Prev Qtr',
      flex: 2,
    },
    {
      field: 'tyQtr',
      headerClassName: 'super-app-theme--col2',
      headerName: 'TY Qtr',
      flex: 2,
    },
    {
      field: 'goly',
      headerClassName: 'super-app-theme--col2',
      headerName: 'GOLY',
      flex: 2,
      renderCell: (params) => {
        const isNegative = parseFloat(params.value) < 0;
        return (
          <span className={isNegative ? 'negative-value' : 'positive-value'}>
            {params.value}%
          </span>
        );
      },
    },
  ];
  
  export const rows = [
    { id: 1, supermarket: 'Revathi Supermart', lyQtr: 34.9, prevQtr: 34.9, tyQtr: 35, goly: 2 },
    { id: 2, supermarket: 'Srivari Traders', lyQtr: 34.9, prevQtr: 34.8, tyQtr: 35, goly: 3 },
    { id: 3, supermarket: 'Friends Supermart', lyQtr: 5.3, prevQtr: 5.3, tyQtr: 5.5, goly: 2 },
    { id: 4, supermarket: 'New Smart', lyQtr: 0.1, prevQtr: 0.1, tyQtr: 0.2, goly: 30 },
    { id: 5, supermarket: 'Galaxy Mart', lyQtr: 0.1, prevQtr: 0.1, tyQtr: 0.1, goly: 11 },
    { id: 6, supermarket: 'Saravana Big Bazaar', lyQtr: 0.5, prevQtr: 0.2, tyQtr: 0.4, goly: -10 },
    { id: 7, supermarket: 'Big Mart', lyQtr: 12.1, prevQtr: 11.9, tyQtr: 12.3, goly: 3 },
    { id: 8, supermarket: 'Reliance Fresh', lyQtr: 23.4, prevQtr: 23.1, tyQtr: 24.0, goly: 4 },
    { id: 9, supermarket: 'DMart', lyQtr: 45.2, prevQtr: 44.8, tyQtr: 45.5, goly: 2 },
    { id: 10, supermarket: 'More Superstore', lyQtr: 15.0, prevQtr: 14.8, tyQtr: 15.3, goly: 3 },
    { id: 11, supermarket: 'FreshCo', lyQtr: 9.1, prevQtr: 8.9, tyQtr: 9.4, goly: 5 },
    { id: 12, supermarket: 'SmartBuy', lyQtr: 7.6, prevQtr: 7.5, tyQtr: 7.8, goly: 2 },
    { id: 13, supermarket: 'Everyday Mart', lyQtr: 18.3, prevQtr: 18.0, tyQtr: 18.5, goly: 1 },
    { id: 14, supermarket: 'Urban Fresh', lyQtr: 3.4, prevQtr: 3.2, tyQtr: 3.6, goly: 6 },
    { id: 15, supermarket: 'Metro Wholesale', lyQtr: 25.0, prevQtr: 24.7, tyQtr: 25.3, goly: 3 },
    { id: 16, supermarket: 'Nilgiris', lyQtr: 4.5, prevQtr: 4.4, tyQtr: 4.7, goly: 4 },
    { id: 17, supermarket: 'Reliance Mart', lyQtr: 30.2, prevQtr: 29.9, tyQtr: 30.5, goly: 2 },
    { id: 18, supermarket: 'SuperValue', lyQtr: 11.0, prevQtr: 10.8, tyQtr: 11.2, goly: 2 },
    { id: 19, supermarket: 'Value Bazaar', lyQtr: 6.7, prevQtr: 6.6, tyQtr: 6.9, goly: 3 },
    { id: 20, supermarket: 'Big Bazaar', lyQtr: 50.1, prevQtr: 49.8, tyQtr: 50.5, goly: 1 },
    { id: 21, supermarket: 'Mega Mart', lyQtr: 22.1, prevQtr: 21.8, tyQtr: 22.3, goly: 1 },
    { id: 22, supermarket: 'Daily Needs', lyQtr: 14.3, prevQtr: 14.0, tyQtr: 14.6, goly: 2 },
    { id: 23, supermarket: 'Family Store', lyQtr: 8.9, prevQtr: 8.7, tyQtr: 9.2, goly: 3 },
    { id: 24, supermarket: 'Super Duper Mart', lyQtr: 19.5, prevQtr: 19.1, tyQtr: 19.9, goly: 4 },
    { id: 25, supermarket: 'Grocery King', lyQtr: 17.6, prevQtr: 17.4, tyQtr: 17.8, goly: 1 },
    { id: 26, supermarket: 'Fresh Mart', lyQtr: 5.8, prevQtr: 5.6, tyQtr: 5.9, goly: 2 },
    { id: 27, supermarket: 'HyperCity', lyQtr: 33.2, prevQtr: 33.0, tyQtr: 33.5, goly: 1 },
    { id: 28, supermarket: 'SuperSave', lyQtr: 10.4, prevQtr: 10.2, tyQtr: 10.6, goly: 2 },
    { id: 29, supermarket: 'SmartCart', lyQtr: 12.9, prevQtr: 12.7, tyQtr: 13.2, goly: 3 },
    { id: 30, supermarket: 'Economy Mart', lyQtr: 7.2, prevQtr: 7.0, tyQtr: 7.4, goly: 2 },
    { id: 31, supermarket: 'Green Basket', lyQtr: 3.7, prevQtr: 3.5, tyQtr: 3.9, goly: 5 },
    { id: 32, supermarket: 'FairPrice', lyQtr: 21.5, prevQtr: 21.1, tyQtr: 21.9, goly: 3 },
    { id: 33, supermarket: 'City Super', lyQtr: 13.4, prevQtr: 13.2, tyQtr: 13.6, goly: 1 },
    { id: 34, supermarket: 'Quick Buy', lyQtr: 4.1, prevQtr: 4.0, tyQtr: 4.3, goly: 4 },
    { id: 35, supermarket: 'MegaSave', lyQtr: 16.3, prevQtr: 16.0, tyQtr: 16.6, goly: 2 },
    { id: 36, supermarket: 'FreshLine', lyQtr: 9.7, prevQtr: 9.5, tyQtr: 9.9, goly: 3 },
    { id: 37, supermarket: 'Grocery Hub', lyQtr: 18.8, prevQtr: 18.4, tyQtr: 19.1, goly: 2 },
    { id: 38, supermarket: 'UrbanMart', lyQtr: 11.5, prevQtr: 11.3, tyQtr: 11.8, goly: 3 },
    { id: 39, supermarket: 'SuperCart', lyQtr: 26.7, prevQtr: 26.5, tyQtr: 27.0, goly: 1 },
    { id: 40, supermarket: 'Daily Fresh', lyQtr: 8.3, prevQtr: 8.1, tyQtr: 8.6, goly: 4 },
    // Entries 41-100000 follow the same pattern
    ...Array.from({ length: 1000000 }, (_, i) => ({
      id: 41 + i,
      supermarket: `Supermarket ${41 + i}`,
      lyQtr: (Math.random() * 50).toFixed(1),
      prevQtr: (Math.random() * 50).toFixed(1),
      tyQtr: (Math.random() * 50).toFixed(1),
      goly: (Math.random() * 40 - 20).toFixed(1),
    })),
  ];
  