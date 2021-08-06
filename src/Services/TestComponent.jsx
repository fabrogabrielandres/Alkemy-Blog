import React from 'react'
import { privateApiDelete } from './privateApiService'

const URL = 'http://ongapi.alkemy.org/api/contacts';

const fetchData = async () => {
  const response = await privateApiDelete(URL);
  console.log(response);
}

export const TestComponent = () => {

  fetchData();

  return (
    <div>
      
    </div>
  )
}
