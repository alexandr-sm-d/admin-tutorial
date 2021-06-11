import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
} from "react-admin"
import CustomTextField from "./CustomTextField";

export const PostList = (props) => {
    console.log('PostList props: ', props)
    return (
        <List {...props}>
            <Datagrid>
                <ReferenceField source="userId" reference="users">
                    <CustomTextField source="name"/>
                </ReferenceField>
                <TextField source="body"/>
                <EditButton/>
            </Datagrid>
        </List>
    )
}

export const PostEdit = (props) => {
    console.log('PostEdit props: ', props)
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput source="name"/>
                </ReferenceInput>
                <TextInput source="body"/>
            </SimpleForm>
        </Edit>
    )
}

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);