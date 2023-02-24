import './App.css';

const products = [
  {id: 0, name: "Milk", price: "200"},
  {id: 1, name: "Candy", price: "100"},
  {id: 2, name: "Chocolate", price: "600"},
  {id: 3, name: "Spray", price: "400"}
]

function App() {
  const productList = products.map(({name, price, id}, index) => {
    if(index >= 2) {
      return null
    }
    return (
    <li key={id}>
      <span>Name: {name} </span>
      <span>Price: {price}kr</span>
    </li>
    )
  }
  )

  return (
    <div className="App">
      <ul>
        {productList}
      </ul>
    </div>
  );
}

export default App;
