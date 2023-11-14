import Footer from "./templates/Footer";
import Header from "./templates/Header";
import "@/styles/globals.css";

export const metadata = {
	title: "Troybilt Builds",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Header />
					<link
						rel="stylesheet"
						href="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/en_US/v1686589540276/css/global.css"
					/>
					<link
						rel="stylesheet"
						href="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/en_US/v1685444750308/css/product/detail.css"
					/>
				</header>
				{children}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
