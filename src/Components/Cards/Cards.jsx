import { useLoaderData, useParams } from "react-router-dom";
import Card from "../../Pages/card";
import { useEffect, useState } from "react";

const Cards = () => {
  const [gadgets, setGadgets] = useState([]);
  const data = useLoaderData();
  const { cards } = useParams();

  useEffect(() => {
    if (cards) {
      const filterData = [...data].filter(
        (gadget) => gadget.category === cards
      );
      setGadgets(filterData);
    } else {
      setGadgets(data);
    }
  }, [cards, data]);

  return (
    <div className="grid grid-cols-3 gap-5">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default Cards;
