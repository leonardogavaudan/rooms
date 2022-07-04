import React from 'react';

interface PageProps {
	children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
	return <div className="container mx-auto max-w-6xl">{children}</div>;
};

export default Page;
