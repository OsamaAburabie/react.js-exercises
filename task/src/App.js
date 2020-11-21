// import './App.css';
import React from 'react';
import Card from './components/Card';
import './style.css';
import Students from './Students';

function App() {
	const Names = Students.map((item) => (
		<Card
			key={item.id}
			job={item.job}
			location={item.location}
			img={item.img}
			name={item.name}
			facebook={item.facebook}
			github={item.github}
			linkedin={item.linkedin}
			about={item.about}
			cover={item.cover}
		/>
	));
	return <div className='container'>{Names}</div>;
}

export default App;
