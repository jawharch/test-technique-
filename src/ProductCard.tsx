import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import styled from '@emotion/styled'

// Pour les cards
const StyledCard = styled(Card)({
    maxWidth: '343px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e0e0e0', 
    height: 'auto',

   

  })
  // Pour les box
  
  const PriceBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#BF0000',
    fontWeight: 'bold',

    paddingTop:'3px'
  })
  const PriceUsed=styled(Box)(
    {
        display:'flex',
        alignItems:'center',
        gap:'5px',
        color: '#333',
        paddingTop:'3px'

    }
  )
  
interface ProductData {
    brand: string;
    href: string;
    title: string;
    newPrice: string;
    usedPrice: string;
    image: string;
  }

const  ProductCard:React.FC<ProductData>=({ brand, href, title, newPrice, usedPrice, image })=> {
    if (!brand || !href || !title || !newPrice || !image) return null;





  return (
    <StyledCard>
    <CardContent sx={{ display: 'flex', alignItems: 'center',flexWrap:'wrap'}}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: '120px', height: '120px', borderRadius: '4px' }}
      />
      <Box sx={{ marginLeft: '16px', flex: 1 }}>
        <Typography color="#696969" sx={{ fontSize: '12px' }}>
          {brand}
        </Typography>
        <Typography   href={href} sx={{ fontSize: '14px', color: '#333',fontWeight:'bold', textDecoration:'none',lineHeight:'1.1',paddingTop:'2px' }}>
          {title}
        </Typography>
        <PriceBox>
            <span style={{fontSize:'20px'}}>
            {newPrice}

            </span>
        
          <Typography  sx={{ fontSize: '14px',fontWeight:'bold',position:'relative',top:'3px',left:'1px' }}>
            Neuf
          </Typography>
        </PriceBox>
        <PriceUsed>

        <Typography sx={{ fontSize: '14px' }}>
          Occasion dès  

          
        </Typography>
        <Typography sx={{ fontSize: '20px',fontWeight:'bold',position:'relative',bottom:'2px' }}>
            {usedPrice}
        </Typography>

        </PriceUsed>
       
      </Box>
      
    </CardContent>
  </StyledCard>
    
  )
}

export default ProductCard