import React from 'react';

type Props = {
  title: string,
  paragraph?: string  // the paragraph is optional
}

// No need to define the defaultProps property
const Card: React.FC<Props> = ({ title, paragraph = 'Hello World' }) => {
  return (
	<aside>
	  <h2>{ title }</h2>
	  <p>
		{ paragraph }
	  </p>
	</aside>
  );
};

export default Card;
