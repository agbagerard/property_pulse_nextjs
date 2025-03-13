import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Property Pulse',
	keywords: 'rental, property, real estate',
	description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<GlobalProvider>
				<html>
					{/* //Google GeoCoding API and Leaflet. */}
					<head>
						<link
							rel='stylesheet'
							href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
							integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
							crossOrigin=''
						/>
					</head>
					<body>
						<Navbar />
						<main>{children}</main>
						<Footer />
						<ToastContainer />
					</body>
				</html>
			</GlobalProvider>
		</AuthProvider>
	);
};

export default MainLayout;
