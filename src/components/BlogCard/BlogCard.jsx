import readingTime from 'reading-time';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { StyledBlogCard } from './BlogCard.styled';

export default function BlogCard({ blogDetails }) {
	const { title, description, published_on, content } = blogDetails?.attributes;
	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);
	const readingStats = readingTime(content);
	const router = useRouter();

	const [onAllBlogsPage, setOnAllBlogsPage] = useState(false);

	useEffect(() => {
		router.asPath === '/blogs' ? setOnAllBlogsPage(true) : setOnAllBlogsPage(false);
	}, [router.asPath, onAllBlogsPage]);

	return (
		<StyledBlogCard allBlogsList={onAllBlogsPage ? true : false}>
			<div className='summary'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			{onAllBlogsPage && (
				<div className='stats'>
					<time className='publishingDate'>{blogPublishingDate}</time>
					<div>
						<svg width='15' height='15' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.4676 21.1151C16.9905 21.1151 21.4676 16.638 21.4676 11.1151C21.4676 5.59226 16.9905 1.11511 11.4676 1.11511C5.94477 1.11511 1.46762 5.59226 1.46762 11.1151C1.46762 16.638 5.94477 21.1151 11.4676 21.1151Z'
								stroke='black'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path d='M11.4676 5.11511V11.1151L15.4676 13.1151' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
						</svg>
						<span>{readingStats.text}</span>
					</div>
				</div>
			)}
		</StyledBlogCard>
	);
}
