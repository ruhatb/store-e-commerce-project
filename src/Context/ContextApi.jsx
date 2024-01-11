import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = () => {
  const [data, setData] = useState([]);

  fetch("https://workintech-fe-ecommerce.onrender.com/")
    .then((response) => response.json())
    .then((data) => setData(data));

  return <DataContext.Provider value={data} />;
};

const DataConsumer = () => {
  const data = useContext(DataContext);
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const ProductsItems = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h1>Urünler </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
