import React from 'react';

const Curved = () => {
  return (
    <div>
      {/* Curved section below Hero */}
      <div className=" bg-gradient-to-r from-slate-950 to-slate-800">
        <svg
          className="relative flex top-0 h-56 w-screen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox='0 100 1420 100'
          
        >
          <path
            fill="#f0f8f9" // Or any color you'd like
            d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,160C672,117,768,75,864,80C960,85,1056,139,1152,160C1248,181,1344,171,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Curved;
