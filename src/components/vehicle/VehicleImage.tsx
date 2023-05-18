import React from 'react';

import Text from '../common/font/Text';
import useVehicleImage from '../../hooks/useVehicleImage';

import type { Category } from '../../common/types';

interface VehicleImageProps {
  category: Category;
}

const VehicleImage = ({ category }: VehicleImageProps) => {
  const { loading, error, image } = useVehicleImage(category);

  if (loading) return <Text size='xs'>Loading image...</Text>;
  if (error) return <Text size='xs'>Something went wrong</Text>;

  return (
    <img
      src={image}
      alt={`${category.productType}-${category.vehicleType}`}
    />
  );
};

export default VehicleImage;
