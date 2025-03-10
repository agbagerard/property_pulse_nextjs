import Link from 'next/link';

const PropertiesPage = () => {
	return (
		<div>
			<h1 className='text-3xl'>Welcome</h1>
			<Link href='/properties'>Go To Properties</Link>
		</div>
	);
};

export default PropertiesPage;
