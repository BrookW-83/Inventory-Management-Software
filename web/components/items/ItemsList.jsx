import ItemCard from './ItemsCard';

const ItemsList = () => {
  const cardData = [
    {
    image: 'https://via.placeholder.com/150',
    name: 'Rear View Mirror',
    description: 'Rear view mirror for Toyota Corola'
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Helix Gear',
    description: 'For replacement in slidig mesh gearbox'
  },
  
  {
    image: 'https://via.placeholder.com/150',
    name: 'Sleave Bearing',
    description: 'Used while feating for crank shaft'
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Rachet',
    description: 'M-12 bolts screw size'
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Bearing',
    description: 'Roller bearing'
  },
  

];

  return (
    <div className="bg-gray-100">
      <h1 className="text-2xl p-4 mb-4 font-mono font-extrabold text-Primary border border-b-2 ml-2 w-1/2">Inventory Items</h1>
     <div className="min-h-screen p-4 bg-gray-100 flex flex-wrap justify-center items-center">
  
      {cardData.map((card, index) => (
        <ItemCard
        index = {index}
        image={card.image} 
        name={card.name} 
        description={card.description} 
      />
      ))}
    </div>
    </div>
  );
};

export default ItemsList;
