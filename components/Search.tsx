import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset';

import { SearchIcon } from 'lucide-react';
//form is used to use client side components on server side
const Search = ({query}:{query?:string}) => {
    
   
  return ( 
  
    <Form action="/" scroll={false} className='search-form'> 
       <input
       name="query"
       defaultValue={query}
       className='search-input'
       placeholder="Search Startups"/>
      <div className='flex gap-2 items-center'>
        {query && <SearchFormReset/>}
        <button type="submit" className='search-btn text-white'>
        {/* <IoExitOutline  className="flex ml-1 self-center text-white"/> */}
     <SearchIcon className='size-5'/>
 </button>
      </div>
    </Form>
 
  )
}

export default Search