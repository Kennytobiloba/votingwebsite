import React from 'react';

const ElectionVideo = () => {
  return (
    <div className="">
      <h1
        className="relative lg:text-[28px] md:text-[24px] 
        text-[20px] text-[#c05fe6] before:content-[''] font-bold 
        before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px] before:bg-[#c05fe6] pl-4"
      >
        Election Video
      </h1>
      <div className="mt-6 w-full  "> {/* You can adjust the max width here */}
        {/* Add a video element here */}
        <video
          className="w-full " // Full width and rounded corners
          controls
          src="your-video-url.mp4" // Replace with your video URL
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
  <div className='bg-red-500 mt-12 p-4'> {/* Added padding for better spacing */}
    <h1
      className="relative lg:text-[28px] md:text-[24px] 
      text-[20px] text-white before:content-[''] font-bold 
      before:absolute before:left-0 before:top-0 before:bottom-0 
      before:w-[4px] before:bg-white pl-4 mb-4"
    >
      Upcoming Events
    </h1>
    <hr className='border-white border-t-1 w-full mt-6' /> {/* Changed to border styles for hr */}

    <div className=' flex flex-col gap-4 text-white mt-4  '>
        <div className='flex gap-2 justify-start mt-2 '>
        <i className="fa-solid fa-arrow-right text-white pt-2"></i>
        <div>
            <h4>Duis aute irure dolor in reprehenderit.</h4>
            <h5>December 15, 2015</h5>
        </div>
        </div>
        <div className='flex gap-2'>
        <i className="fa-solid fa-arrow-right pt-2 text-white"></i>
        <div>
            <h4>Duis aute irure dolor in reprehenderit.</h4>
            <h5>December 15, 2015</h5>
        </div>
        </div>
        <div className='flex gap-2'>
        <i className="fa-solid fa-arrow-right pt-2 text-white"></i>
        <div>
            <h4>Duis aute irure dolor in reprehenderit.</h4>
            <h5>December 15, 2015</h5>
        </div>
        </div>
        <div className='flex gap-2'>
        <i className="fa-solid fa-arrow-right pt-2 text-white"></i>
        <div>
            <h4>Duis aute irure dolor in reprehenderit.</h4>
            <h5>December 15, 2015</h5>
        </div>
        </div>
        <div className='flex gap-2'>
        <i className="fa-solid fa-arrow-right pt-2 text-white"></i>
        <div>
            <h4>Duis aute irure dolor in reprehenderit.</h4>
            <h5>December 15, 2015</h5>
        </div>
        </div>


    </div>
  </div>
</div>



     
    </div>
  );
};

export default ElectionVideo;
