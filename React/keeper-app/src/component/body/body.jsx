import React from 'react';

function Body(){
	return (
		<div className='note'>
			<h1 contentEditable='true'>Title</h1>
			<p contentEditable='true'> content of Note</p>
		</div>
		);
};

export default Body;