import List from './List.jsx'

function App() {
  const fruits = [{id: 1, name: "Orange", calories: 95},
                {id: 2,name: "Apple", calories: 45},
                {id: 3,name: "Banana", calories: 150},
                {id: 4,name:"Pineapple", calories: 100},
                {id: 5,name: "Coconut", calories: 250}];

  const vegetables = [{id: 6, name: "Potatoe", calories: 110},
                {id: 7,name: "Carrot", calories: 60},
                {id: 8,name: "Cabbage", calories: 30},
                {id: 9,name:"Radish", calories: 10},
                {id: 10,name: "Pepper", calories: 45}];




  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
