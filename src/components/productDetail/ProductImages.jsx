import React, { useState } from 'react';


const ProductImages = ({ images = [] }) => {
    // Handle cases where images might be undefined or empty
    const imageArray = images && images.length > 0 ? images : [
        { image: 'https://via.placeholder.com/400?text=No+Image' },
        { image: 'https://via.placeholder.com/400?text=No+Image' }
    ];
    
    const [main, setMain] = useState(imageArray[0]);

    return (
        <div>
            <img src={main?.image || main} alt="" className='h-[600px] w-full block rounded object-contain bg-gray-100' />
            <div className='mt-8 grid grid-cols-5 gap-x-4'>
                {imageArray.map((image, index) => {
                    const imageSrc = image?.image || image;
                    return (
                        <img 
                            src={imageSrc} 
                            alt="" 
                            key={index}
                            onClick={() => setMain(image)}
                            className={`h-12 lg:h-20 w-full block rounded object-contain cursor-pointer bg-gray-100 ${(main?.image || main) === imageSrc ? 'border-2 border-solid border-secondary-200' : '' }`}
                        />
                    )
                })}
            </div>
        </div>
    );
};


export default ProductImages;