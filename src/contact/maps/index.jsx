import React from 'react';

function Maps({ lat, lng }) {
    const src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13592.527230487375!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMxJzE3LjciTiAzMMKwMDknNTguNiJF!5e0!3m2!1sar!2seg!4v1712766505409!5m2!1sar!2seg`;

    console.log("Map src:", src);
    console.log("Latitude:", lat);
    console.log("Longitude:", lng);

    return (
        <div className='w-full'>
            <iframe
                src={src}
                className="w-full p-0 lg:h-[450px] md:h-[350px] h-[250px] border-4 border-secoundColor"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>  
        </div>
    );
}

export default Maps;
