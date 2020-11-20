// import './App.css';
import React from 'react';
import Person from './components/Person';
import './style.css';
import Students from './Students';

function App() {
	const Names = Students.map((item) => (
		<Person
			key={item.id}
			job={item.job}
			location={item.location}
			img={item.img}
			name={item.name}
			facebook={item.facebook}
			github={item.github}
			linkedin={item.linkedin}
			about={item.about}
		/>
	));
	return <div className='container'>{Names}</div>;
}

export default App;
