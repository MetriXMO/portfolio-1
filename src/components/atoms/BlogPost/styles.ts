import styled from 'styled-components';

const StyledBlogPost = styled.article`
	margin: 3rem 0;

	a {
		color: ${({ theme }) => theme.headline};
		text-decoration: none;
	}

	h1 {
		font-size: 1.5rem;
		margin: 0;
	}

	p {
		margin: 0;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Tags = styled.ul`
	display: flex;
	color: ${({ theme }) => theme.grey};
	margin-top: 0.5rem;

	li {
		margin-right: 1rem;
		font-size: 0.9rem;
	}
`;

export { Flex, StyledBlogPost, Tags };
