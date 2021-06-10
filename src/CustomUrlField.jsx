import * as React from "react";
import { useRecordContext } from 'react-admin';

const CustomUrlField = (props) => {
    console.log('CustomUrlField props: ', props)
    // const record = useRecordContext();
    // console.log('CustomUrlField record: ', record)
    return props.record ? (
        <a href={props.record[props.source]}>
            {`${props.record[props.source]}_CUSTOM`}
            {/*{`${props.record[props.source]}_${props.record.username}`}*/}
        </a>
    ) : null;
}

export default CustomUrlField;