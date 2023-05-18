import { useEffect, useState } from 'react';

import type { Category } from '../common/types';

const useVehicleImage = (category: Category, supplier: string = '') => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState('');
  const { productType, vehicleType } = category;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/img/vehicle-${productType.toLowerCase()}-${vehicleType.toLowerCase()}.svg`
        );
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    void fetchImage();
  }, [category]);

  return {
    loading,
    error,
    image,
  };
};

export default useVehicleImage;