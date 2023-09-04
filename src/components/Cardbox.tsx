import React from 'react';
import Card from './Card';
import img1 from "/public/images/cat.png";

type CardboxProps = {
    buttonColour: number,
};

const Cardbox:React.FC<CardboxProps> = (buttonColour) => {
    return (
        <div className='flex p-4 overflow-x-auto'>
            <Card 
            imagePath={img1}  
            buttonColour={buttonColour}
            headerText="FireShip"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <Card 
            imagePath={img1}  
            buttonColour={buttonColour}
            headerText="FireShip"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <Card 
            imagePath={img1}  
            buttonColour={buttonColour}
            headerText="FireShip"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          
        </div>
    );
}
export default Cardbox;