import React from "react";
import Card from "./Card";
type CardboxProps = {
  buttonCol: string; // 0 = red, 1 = blue, 2 = green
  resData: any;
  btnText: string;
};

const Cardbox: React.FC<CardboxProps> = ({ buttonCol, resData, btnText }) => {
  return (
    <div className="flex lg:flex-row sm:flex-col">
      {resData.map((data: any, i: any) => {
        return (
          <Card
            key={i}
            imagePath={data.imgSrc}
            buttonColour={buttonCol}
            headerText={data.title}
            content={data.content}
            link={data.link}
            btnText={btnText}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cardbox;
