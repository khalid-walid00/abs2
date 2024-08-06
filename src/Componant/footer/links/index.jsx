import React from 'react';
import { Link } from 'react-router-dom';

function Links({links,className}) {

    return (
    <> {
        links?.map((item, index) => (
            <Link to={item.link} className='flex items-center gap-2'>
            {item.icon}
            <div className={` ${className} font-[500]`}>{item.text}</div>
            </Link>
            ))
     }</>
    );
}

export default Links;