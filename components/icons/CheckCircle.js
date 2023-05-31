export default function InStock({
	fill = "#000",
	className = "",
	style = null,
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			className={`w-100 ${className}`}
			style={style}>
			<path
				d="m420.522-287.283 293.282-293.521-56.913-56.392-236.369 236.37-118.609-118.609-56.152 56.392 174.761 175.76Zm59.053 224.479q-85.454 0-161.65-32.92-76.196-32.921-132.738-89.463-56.542-56.542-89.462-132.836-32.92-76.294-32.92-161.944 0-86.544 32.979-162.657 32.979-76.114 89.77-132.941 56.792-56.826 132.742-89.348 75.949-32.522 161.208-32.522 86.622 0 163.069 32.503 76.447 32.504 133.038 89.312 56.591 56.808 89.207 133.096 32.617 76.287 32.617 163.066 0 85.763-32.522 161.453-32.522 75.691-89.348 132.466-56.827 56.776-133.054 89.755-76.227 32.98-162.936 32.98Z"
				fill={fill}
			/>
		</svg>
	);
}
