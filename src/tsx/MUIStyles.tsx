import { makeStyles } from '@material-ui/core';

const customStyles = makeStyles((theme) => ({
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
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	taskForm: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	taskItem: {
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		padding: '0px 14px 0px 10px'
	},
	taskContent: {
		flexGrow: 1,
		padding: theme.spacing(1)
	},
	taskComplete: {
		textDecoration: 'line-through',
		opacity: 0.5
	},
	cardList: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		position: 'relative',
		paddingBottom: 'unset',
		backgroundColor: theme.palette.grey[700],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		'&::after': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			backgroundColor: theme.palette.grey[700],
			opacity: 0,
			transition: 'ease-out opacity 0.2s'
		},
		'&.loading::after': {
			opacity: 1
		}
	},
	cardMediaList: {
		paddingTop: '56.25%', // 16:9
	},
	cardMediaSolo: {
		paddingTop: '35%',
		[theme.breakpoints.down('md')]: {
			paddingTop: '56.25%', // 16:9
		}
	},
	cardContent: {
		flexGrow: 1,
		'& br': {
			display: 'block',
			marginTop: '5px'
		}
	},
	cardActions: {
		justifyContent: 'center'
	},
	cardLink: {
		textDecoration: 'none'
	},
	cardButton: {
		padding: '4px 8px'
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.grey[800]
	},
	alert: {
		padding: theme.spacing(1),
		margin: theme.spacing(1),
		backgroundColor: 'rgba(255, 0, 0, 0.25)',
		border: '1px solid darkred',
		borderRadius: '4px',
		textAlign: 'center'
	},
	form: {
		'& .MuiOutlinedInput-root:hover fieldset': {
			borderColor: 'darkgray'
		},
		'& .MuiOutlinedInput-root.Mui-focused fieldset': {
			borderColor: 'gray'
		},
		'& .MuiFormLabel-root.Mui-focused': {
			color: 'gray'
		}
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .body': {
			position: 'relative',
			maxWidth: '450px',
			outline: 'none',
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(3, 4),
			'& h5': {
				textAlign: 'center',
				wordBreak: 'break-all'
			},
			'& button': {
				margin: theme.spacing(3) + 'px ' + theme.spacing(1) + 'px auto'
			}
		}
	},
	modalClose: {
		position: 'absolute',
		fill: 'white',
		top: '5px',
		right: '5px',
		opacity: 0.5,
		cursor: 'pointer',
		transition: 'ease-out opacity 0.2s',
		width: '24px',
		height: '24px',
		'&:hover': {
			opacity: 1
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

export default customStyles;