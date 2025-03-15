// Ts advace types - index types

type DataHub = {
  [properties: string]: number | boolean; // insex type - dynamic objects with dynamic props
};

let store: DataHub = {};

store.id = 10; // adding properties dynamically
store.isOpen = true;

//store.name = "Hero"  !!! ERROR - property value cannot be string !!!
