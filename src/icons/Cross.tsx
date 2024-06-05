export const Cross = ({ color = '#000000' }: { color?: string }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 12L8 8M8 8L12 4M8 8L12 12M8 8L4 4'
				stroke={color}
				strokeWidth='1'
				strokeLinecap='square'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
