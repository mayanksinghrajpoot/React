import React from 'react';
// Import your video file. This works with most bundlers (like Webpack in Create React App).

// Ensure the video file is in the same directory as this component or adjust the path.

const LoopingVideoPlayer = () => {
  const lesbo="https://www.pexels.com/download/video/6704706/";
  return (
    <div className="video-container justify-items-center content-center w-screen px-10 py-8 relative">
      <div className="fixed top-10 left-20 bg-transparent text-white">
        <h1 className="text-[100%] blur-[1px]">m$r</h1>
      </div>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline // Prevents fullscreen on mobile devices
        // width="600" 
        // height="300"
        className='rounded-3xl border-2 shadow-xl'
      >
        <source src={lesbo} type="video/mp4" />
        
        {/* Fallback message for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default LoopingVideoPlayer;