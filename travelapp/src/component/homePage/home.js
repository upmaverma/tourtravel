import React from 'react';
import Search from './search';
import PopularSearch from '../popularplace/popularplace';

const home = ()=>{
    return(
        <>
            <Search />
            <PopularSearch/>
        </>
    )
}
export default home;