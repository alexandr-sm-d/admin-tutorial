import * as React from "react";
import LaunchIcon from '@material-ui/icons/Launch';
import {withStyles} from "@material-ui/core/styles";

const styles = {
    link: {
        textDecoration: 'none',
        backgroundColor: 'yellow'
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    },
}

const CustomUrlField = (props) => {
    // console.log('CustomUrlField props: ', props)
    // const record = useRecordContext();
    // console.log('CustomUrlField record: ', record)
    return props.record ? (
        <a href={props.record[props.source]} className={props.classes.link}>
            {`${props.record[props.source]}_CUSTOM`}
            {/*{`${props.record[props.source]}_${props.record.username}`}*/}
            <LaunchIcon className={props.classes.icon} />
        </a>
    ) : null;
}

export default withStyles(styles)(CustomUrlField);