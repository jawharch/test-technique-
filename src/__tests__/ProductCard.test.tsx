
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import ProductCard from '../ProductCard';


const product = {
  brand: "Apple",
  href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
  title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
  newPrice: "754 €",
  usedPrice: "720,99 €",
  image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg"
}
test('renders the product card with correct data', async () => {
  render(<ProductCard {...product} />)
  const appleElements = screen.getAllByText(/Apple/)
  expect(appleElements[0]).toBeInTheDocument()  
  expect(appleElements[1]).toBeInTheDocument()
  

  expect(screen.getByText(/Apple iPhone 11 128 Go Double SIM Noir Sidéral/)).toBeInTheDocument()

 
  expect(screen.getByText(/754 €/)).toBeInTheDocument()
  

  expect(screen.getByText(/Neuf/)).toBeInTheDocument()
})

test('does not render the component if data is missing', () => {
  const { container } = render(<ProductCard brand="Apple" href="" title="" newPrice="" usedPrice="" image="" />)
  expect(container.firstChild).toBeNull()
})
// npm test pour tester
