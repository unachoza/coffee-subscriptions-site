import { ReactNode } from "react";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import "./Pages.css";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation />
			<main className="page-container">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
