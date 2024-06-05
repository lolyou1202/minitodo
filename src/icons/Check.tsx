export const Check = ({ color = '#000000' }: { color?: string }) => {
	return (
		<svg
			width='16'
			height='12'
			viewBox='0 0 16 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14 2L5.75 10L2 6.36364'
				stroke={color}
				strokeWidth='1'
				strokeLinecap='square'
			/>
		</svg>
	)
}
