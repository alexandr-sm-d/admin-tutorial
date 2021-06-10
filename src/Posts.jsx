import React from "react";
import {List, Datagrid, TextField, ReferenceField, EditButton} from "react-admin"
import CustomTextField from "./CustomTextField";

export const PostList = (props) => {
    console.log('PostList props: ', props)
    return (
        <List {...props}>
            <Datagrid>
                <ReferenceField source="userId" reference="users">
                    <CustomTextField source="name" />
                </ReferenceField>
                <TextField source="body"/>
                <EditButton />
            </Datagrid>
        </List>
    )
}