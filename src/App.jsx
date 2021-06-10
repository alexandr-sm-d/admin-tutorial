import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./Users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log('all users: ', json))

const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
</Admin>

export default App;