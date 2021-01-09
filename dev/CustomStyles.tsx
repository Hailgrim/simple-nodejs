import {
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: theme.palette.grey[800]
	},
	toolbar: {
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
			fontSize: '20px',
			fontWeight: '500',
			marginRight: '15px'
		}
	},
	offset: theme.mixins.toolbar,
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8)
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.grey[800]
	}
}));

export default useStyles;