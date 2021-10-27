export default {
	baseStyle: {
		fontFamily: 'Button',
		lineHeight: '0px',
		borderRadius: '4px',
		_focus: {
			boxShadow: '0 0 0 3px #7b7ce0',
		},
	},
	variants: {
		solid: () => ({
			color: '#fff',
			textTransform: 'uppercase',
			backgroundImage: 'linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)',
			_hover: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				_disabled: {
					background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
				},
			},
			_active: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				opacity: '0.7',
			},
			_disabled: {
				color: '#fff',
				background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
			},
		}),
		solidRounded: () => ({
			color: '#fff',
			textTransform: 'uppercase',
			borderRadius: '12px',
			backgroundImage: 'linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)',
			_hover: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				_disabled: {
					background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
				},
			},
			_active: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				opacity: '0.7',
			},
			_disabled: {
				color: '#fff',
				background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
			},
		}),
		solidRadial: () => ({
			color: '#fff',
			textTransform: 'uppercase',
			borderRadius: '9rem',
			backgroundImage: 'linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)',
			_hover: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				_disabled: {
					backgroundImage: 'linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)',
				},
			},
			_active: {
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				opacity: '0.7',
			},
			_disabled: {
				color: '#fff',
			},
		}),
		outline: () => ({
			color: '#fff',
			textTransform: 'uppercase',
			borderRadius: '12px',
			backgroundSize: '150%',
			backgroundImage: 'linear-gradient(90deg, rgb(255, 157, 219) 0%, rgb(38, 164, 254) 100%)',
			_hover: {
				backgroundSize: '150%',
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				_disabled: {
					backgroundSize: '150%',
					background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
				},
			},
			_active: {
				backgroundSize: '150%',
				backgroundImage: 'linear-gradient(90deg, rgb(254, 201, 254) 0%, rgb(56, 233, 253) 100%)',
				opacity: '0.7',
			},
			_disabled: {
				color: '#fff',
				backgroundSize: '150%',
				background: 'linear-gradient(90deg, rgb(128, 79, 110) 0%, rgb(4, 54, 89) 100%)',
			},
		}),
		link: () => ({
			color: 'accent.200',
			height: 'auto',
    	padding: '0',
			_active: {
				color: 'accent.200',
				opacity: '0.8',
			},
			_hover: {
				textDecoration: 'none',
			},
		}),
		ghost: () => ({
			_hover: {
				background: 'transparent',
			},
			_active: {
				background: 'transparent',
			},
		}),
		ghostDark: () => ({
			color: '#4F4F4F',
			_hover: {
				background: 'transparent',
			},
			_active: {
				background: 'transparent',
			},
		}),
		ghostSelectable: () => ({
			p: '0',
			borderRadius: '0',
			_hover: {
				background: '#ffffff30',
			},
			_active: {
				background: '#ffffff50',
			},
			_focus: {
				background: '#ffffff30',
			},
		}),
		linkAccent: () => ({
			color: 'accent.100',
			height: 'auto',
    	padding: '0',
			_hover: {
				textDecoration: 'underline',
			},
			_active: {
				color: 'accent.100',
				opacity: '0.6',
			},
		}),
	},
}
