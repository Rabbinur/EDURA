import React from 'react'

const Map = () => {
  return (
    <div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29202.756172174762!2d90.356197!3d23.806345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1233a47765b%3A0xbcacbb12ef251dfa!2sWeepoka!5e0!3m2!1sen!2sbd!4v1698052829085!5m2!1sen!2sbd" 
        className="w-screen h-[40vh]"

        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;