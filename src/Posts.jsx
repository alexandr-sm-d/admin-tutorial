import React from "react";
import {List, Datagrid, TextField, ReferenceField} from "react-admin"
import CustomTextField from "./CustomTextField";

export const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <ReferenceField source="userId" reference="users">
                    <CustomTextField source="name" />
                </ReferenceField>
                <TextField source="body"/>
            </Datagrid>
        </List>
    )
}