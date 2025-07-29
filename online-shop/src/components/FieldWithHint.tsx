import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IProductResponse } from '@/app/homePage/page';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { IProduct } from '@/utils/interfaces';

export default function FieldWithHint() {
  const router = useRouter();

  let { data: productArray } = useFetch<IProductResponse>(
    'https://dummyjson.com/products',
    RequestTypes.GET
  );
  let [products, setProducts] = useState<any>([]);
  useEffect(() => {
    if (productArray) {
      setProducts(() =>
        productArray.products.map((item) => ({
          ...item,
          label: item.title,
        }))
      )
    }
  }, [productArray]);
  return (
    <Autocomplete
      onChange={(_, value) => {
          router.push(`/productDetailPage/${(value as IProduct).id}`)
      }}
      disablePortal
      options={products}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
