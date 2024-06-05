export const Enter = ({ color = '#000000' }: { color?: string }) => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.99999 6.66669L2.66666 10M2.66666 10L5.99999 13.3334M2.66666 10L10.6667 10C11.3739 10 12.0522 9.71907 12.5523 9.21897C13.0524 8.71888 13.3333 8.0406 13.3333 7.33335V2.66669'
				stroke={color}
				strokeLinecap='square'
			/>
		</svg>
	)
}
