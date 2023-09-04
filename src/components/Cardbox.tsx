import React from "react";
import Card from "./Card";
import img1 from "/public/images/testimg.jpeg";

type CardboxProps = {
  buttonCol: string; // 0 = red, 1 = blue, 2 = green
};

const Cardbox: React.FC<CardboxProps> = ({ buttonCol }) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 w-screen scrollbar-thin scrollbar-width-{2px} scrollbar-track-rounded-full scrollbar-thumb-[#6161616c] scrollbar-track-[#000000]">
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        imagePath={img1}
        buttonColour={buttonCol}
        headerText="FireShip"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* Add more Card components as needed */}
    </div>
  );
};

export default Cardbox;
