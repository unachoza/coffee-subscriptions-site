import { ReactNode } from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
