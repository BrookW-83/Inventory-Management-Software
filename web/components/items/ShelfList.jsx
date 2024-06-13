import ShelfCard from "./ShelfCard"

const App = () => {
  const orderData = [
    { title: 'Shelf A', description: 'Gear shelf with management and Insightful', buttonText: 'View Items' },
    { title: 'Shelf B', description: 'Bearing and track all your pending orders in one place.', buttonText: 'View Items' },
    { title: 'Shelf C', description: 'Shaft and analyze your completed orders with ease.', buttonText: 'View Items' },
    { title: 'Shelf D', description: 'Joints the details of your cancelled orders.', buttonText: 'View Items' },
    { title: 'Shelf D', description: 'Revets a comprehensive view of all your orders.', buttonText: 'View Items' }
  ];

  return (
    <div className="">
    <h1 className="text-Primary text-2xl font-mono font-extrabold p-4 border border-b-2 ml-2 w-1/2">Shelves</h1>
    <div className="min-h-screen bg-gray-100 grid grid-rows-1 w-full items-center">
      {orderData.map((order, index) => (
        <ShelfCard 
          key={index}
          title={order.title} 
          description={order.description} 
          buttonText={order.buttonText} 
        />
      ))}
    </div>
    </div>
  );
};

export default App;
