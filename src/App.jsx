import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./Users";
import {PostList, PostEdit, PostCreate} from "./Posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log('all todos: ', json))

const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" list={UserList} />
</Admin>

export default App;