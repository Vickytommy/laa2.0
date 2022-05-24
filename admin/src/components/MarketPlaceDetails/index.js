import React from 'react';
import { useParams } from 'react-router-dom';

const MarketPlaceDetails = () => {
  let { id } = useParams();

  return (
    <div>
      MarketPlaceDetails: {id}
    </div>
  );
}

export default MarketPlaceDetails;
