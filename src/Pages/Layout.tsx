import { ReactNode } from "react";
import Navigation from "../Components/Navigation/Navigation";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
		</>
	);
};

export default Layout;
