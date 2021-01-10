import {
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	h1: {
		wordBreak: 'break-all'
	},
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
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		paddingBottom: 'unset'
	},
	cardContent: {
		flexGrow: 1
	},
	cardButton: {
		padding: '4px 8px'
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.grey[800]
	}
}));

export default useStyles;