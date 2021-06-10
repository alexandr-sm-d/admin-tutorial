import * as React from "react";

const CustomTextField = ({source, record}) => {
    // console.log(props)
    return record ? (
        <h4>
            {record[source]}
        </h4>
    ) : null;
}

export default CustomTextField;