import React from 'react';

import {
	Typography
} from '@material-ui/core';
import customStyles from './CustomStyles';

export default function Footer() {
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