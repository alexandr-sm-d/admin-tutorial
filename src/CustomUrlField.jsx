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
    return props.record ? (
        <a href={props.record[props.source]} className={props.classes.link}>
            {`${props.record[props.source]}_CUSTOM`}
            <LaunchIcon className={props.classes.icon} />
        </a>
    ) : null;
}

export default withStyles(styles)(CustomUrlField);