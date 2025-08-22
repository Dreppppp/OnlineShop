'use client';

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {IProduct } from '@/utils/interfaces';
import useFetch, { RequestTypes } from '@/hooks/useFetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CrossIcon, SearchIcon } from '@/images/icons';
import { useProductStore } from '@/store/productStore'; // Zustand
import { IProductResponse } from '@/app/homePage/page';

export default function FieldWithHint({ isSearch, setIsSearch }: { isSearch: boolean; setIsSearch: (val: boolean) => void }) {
  const router = useRouter();
  const setCurrentId = useProductStore(state => state.setCurrentId);

  const { data: productArray } = useFetch<IProductResponse>(
    'https://dummyjson.com/products',
    RequestTypes.GET
  );

  const [products, setProducts] = useState<IProduct[]>([]);
  const [value, setValue] = useState<IProduct | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Блокировка скролла при открытии поиска
  useEffect(() => {
    if (isSearch) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSearch]);

  // Подготовка списка продуктов
  useEffect(() => {
    if (productArray) {
      setProducts(productArray.products.map(item => ({ ...item, label: item.title })));
    }
  }, [productArray]);

  return (
    <div className="flex items-center w-full border border-white rounded-[70px] h-[50px] px-[20px] gap-2 bg-transparent relative z-50">
      <div onClick={() => setIsSearch(false)} className="cursor-pointer">
        <CrossIcon />
      </div>

      <Autocomplete
        freeSolo
        options={products}
        value={value}
        inputValue={inputValue}
        onChange={(_, newValue) => {
          setValue(newValue as IProduct);
          if (newValue) {
            setCurrentId((newValue as IProduct).id.toString());
            router.push('/productDetailPage'); // единая страница деталей
          }
        }}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        sx={{ flexGrow: 1 }}
        componentsProps={{
          paper: {
            sx: {
              position: 'fixed',
              top: '10px',
              left: '-73px',
              width: '100vw',
              backgroundColor: 'black',
              color: 'white',
              borderRadiusBottom: '16px',
              zIndex: 9999,
              maxHeight: '50vh',
              overflowY: 'auto',
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for..."
            autoFocus={!!isSearch}
            variant="standard"
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              sx: {
                color: 'white',
                '&::placeholder': { color: 'white', opacity: 1 },
                '& input': { color: 'white' },
              },
              className: 'bg-transparent px-2',
            }}
          />
        )}
      />

      <SearchIcon />
    </div>
  );
}
