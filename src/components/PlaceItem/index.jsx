import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart as Heart } from 'react-icons/ai';

import { Item, Details, Button, Title, Image, ImageContainer, Price, Location } from './styles';

const PlaceItem = ({ _id, mainImage, name, location, price }) => {
  const handleOnClick = (event) => {
    console.log(event.target.id);
  };
  return (
    <Item>
      <ImageContainer>
        <Image src={mainImage} alt='Roomie' />
        <Button id={_id} onClick={handleOnClick}><Heart id={_id} color='#BACD25' size='24px' /></Button>
      </ImageContainer>
      <Details>
        <Title>{name}</Title>
        <Location>{location}</Location>
        <Link to={`/places/${_id}`} style={{ textDecoration: 'none' }}>
          <Price>{`$ ${price} COP`}</Price>
        </Link>
      </Details>
    </Item>
  );
};

export default PlaceItem;
