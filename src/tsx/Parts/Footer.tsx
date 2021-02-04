import React from 'react';
import { Typography } from '@material-ui/core';

import customStyles from '../MuiStyles';

const Footer: React.FunctionComponent = () => {
	const classes = customStyles();

	return (
		<footer className={classes.footer}>
			<Typography variant="h6" align="center" gutterBottom>
				Footer
			</Typography>
			<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
				Work in progress...
			</Typography>
			<Typography variant="body2" color="textSecondary" align="center">
				{new Date().getFullYear()}
			</Typography>
		</footer>
	);
}
export default Footer;