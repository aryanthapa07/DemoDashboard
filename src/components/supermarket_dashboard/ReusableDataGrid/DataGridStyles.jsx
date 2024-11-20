  export const dataGridStyles = { 
    '& .MuiDataGrid-columnHeaders': {
      color: 'white',
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      color: 'white',
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-cell': {
      fontWeight: 'normal',
      textAlign: 'center',
      fontSize: '0.9em',
    },
    '& .MuiDataGrid-sortIcon': {
      color: '#ffffff', // Changes the color of the sort icon
      fontSize: '1.5rem', // Increases the icon size
      marginLeft: '8px', // Adjusts spacing
    },
      
    
    '& .super-app-theme--col1': {
      backgroundColor: '#6a5183',
      color: 'white',
      fontWeight: 'bold',
      display: 'flex', // Ensures proper alignment
      flexDirection: 'row-reverse', // Moves the sort icon to the left
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .super-app-theme--col2': {
      backgroundColor: '#30124e',
      color: 'white',
      fontWeight: 'bold',
      display: 'flex', // Ensures proper alignment
      flexDirection: 'row-reverse', // Moves the sort icon to the left
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .negative-value': {
      color: 'red', // For negative GOLY values
      fontWeight: 'bold',
    },
    '& .positive-value': {
      color: 'green', // For positive GOLY values
      fontWeight: 'bold',
    },
    '@media (max-width: 768px)': {
      '& .MuiDataGrid-root': {
        margin: '5px',
        padding: '3px',
      },
      '& .MuiDataGrid-columnHeaderTitle, & .MuiDataGrid-cell': {
        fontSize: '0.8em',
      },
    },
  };
