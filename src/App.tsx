import React from 'react';
import Card from './components/Cards/Cards';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='cards'>
      <Card 
        imageSrc='https://via.placeholder.com/150'
        imageAlt='Image cap'
        title='Card Title'
        link='#'
      >
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card>
      <Card 
        title='Special title treatment'
        link='#'
      >
        With supporting text below as a natural lead-in to additional content
      </Card>
    </div>
  );
};

export default App;
