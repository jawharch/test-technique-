
import './App.css'
import ProductCard from './ProductCard';



function App() {

const product = {
  brand: "Apple",
  href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
  title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
  newPrice: "754 €",
  usedPrice: "720,99 €",
  image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
}



  return (
    <>
     <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }} >
      <ProductCard {...product} />

      
 
    </div>
     
    </>
  )
}

export default App
