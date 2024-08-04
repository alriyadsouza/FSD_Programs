import React from 'react';

const CustomList= ({items})=>{
    return(
        <div className="custom-list">
            {items.map((item,index)=>(
                <div key={index} className='custom-list-item'>
                    {item}
                </div>
            ))
        }
        </div>
    );
}; export default CustomList;