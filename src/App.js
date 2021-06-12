import React, { useState } from 'react';
import Cards from './Cards';
import Sinfo from './Sinfo';
import './index.css';
const App = () => {
    return (<>
        <h1>Top 5 Netflix Series</h1>
        {Sinfo.map((val) => {
            return (<Cards
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
            />);
        })}
    </>)
}
export default App;