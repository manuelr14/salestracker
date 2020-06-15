import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date', type: 'date' },
      { title: 'Name', field: 'name' },
      { title: 'Last Name', field: 'lastname' },
      { title: 'Phone', field: 'phone', type: 'numeric' },
      { title: 'Stock Number', field: 'stock' },
      { title: 'Vehicle', field: 'vehicle' },
      { title: 'Split', field: 'partner' },
      { title: 'We owe', field: 'weowe' },
      { title: 'Financed by', field: 'bank' },
      { title: 'Stkr price', field: 'discount' },
      { title: 'Bonus', field: 'bonus', type: 'numeric' }
      

    ],
    data: [
      { date: '15.06.2020', name: 'luis', lastname: 'Baran', phone: 6784347584, stock: 'HD455434', vehicle: '2018 4runner', partner: 'Juliana',weowe:'front bumper', bonus: '50'  },
      { date: '15.06.2020', name: 'ricardo', lastname: 'arismendi', phone: 6784347584, stock: 'HD455434', vehicle: '2018 F150'  },
   
    ],
  });

//   function getcount(){
// var totaldeals= 0
//     {state.data.length} = totaldeals

//   }

  return (
    <MaterialTable
    title= {'Total Deals: '+ state.data.length } 
    columns={state.columns}
    data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
