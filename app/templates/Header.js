import React from "react";
function Header() {
	return (
		<nav className="bg-primary">
			<div
				className="wrapper ml-auto mr-auto"
				style={{ padding: "20px", maxWidth: "1400px" }}>
				<img
					className="icon logo "
					src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwe37a0561/images/svg-icons/logo.svg"
					alt="Troy-Bilt"
				/>
			</div>
		</nav>
	);
}

export default Header;
