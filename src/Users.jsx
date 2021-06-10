import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import CustomUrlField from "./CustomUrlField";

export const UserList = props => {
    console.log('UserList props: ', props)
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <CustomUrlField source="website" />
                <TextField source="name" />
                <TextField source="username" />
                <TextField source="address.geo.lat" />
                <UrlField source="website" />
            </Datagrid>
        </List>
    )
}