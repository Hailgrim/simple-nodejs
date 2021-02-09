import React from 'react';
import { Box } from '@material-ui/core';

import customStyles from '../MuiStyles';

type AlertProps = {
	content: string
}

const Alert: React.FunctionComponent<AlertProps> = props => {
	const classes = customStyles();

	return (
		<Box className={classes.alert}>{props.content}</Box>
	);
}
export default Alert;