import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	h1: {
		wordBreak: 'break-all'
	},
	appBar: {
		backgroundColor: theme.palette.grey[800]
	},
	toolbar: {
		height: '64px',
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
			fontSize: '20px',
			marginRight: '32px'
		},
		'& .auth': {
			float: 'right',
			marginRight: 'unset',
			wordBreak: 'break-all',
			cursor: 'pointer'
		}
	},
	main: {
		marginTop: '64px'
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
		paddingBottom: 'unset',
		backgroundColor: theme.palette.grey[700]
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
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .body': {
			maxWidth: '500px',
			outline: 'none',
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(3, 4),
			'& button': {
				margin: theme.spacing(2) + 'px ' + theme.spacing(2) + 'px auto'
			}
		}
	},
	loader: {
		position: 'fixed',
		zIndex: 9999,
		display: 'block',
		width: '100%',
		top: 0,
		backgroundColor: 'transparent',
		'& div': {
			backgroundColor: theme.palette.grey[600]
		}
	}
}));

export default useStyles;