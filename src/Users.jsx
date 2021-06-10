import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => {
    console.log('UserList props: ', props)
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                {/*<EmailField source="email" />*/}
                <TextField source="address.geo.lat" />
                {/*<TextField source="phone" />*/}
                {/*<TextField source="website" />*/}
                {/*<TextField source="company.name" />*/}
            </Datagrid>
        </List>
    )
}