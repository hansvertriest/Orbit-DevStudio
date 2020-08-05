import React from 'react';


const WorkListItem = (props) => {
	return (
		<li className="work-list-item" >
			<div className="work-list-item__bullet"></div>
			{props.children}
		</li>
	);
}

export default WorkListItem;
