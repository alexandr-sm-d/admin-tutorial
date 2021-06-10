import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log('all data', json))
console.log('dataProvider', dataProvider)

const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
</Admin>

export default App;