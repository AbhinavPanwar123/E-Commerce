import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EBfh0qywt4Vx4v5yEXv3JbRAO_YIm2etcA&s"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">FORCLAZ</h3>
        <p className="mt-2 text-sm text-gray-500">Men Checked Full Sleeve Light Flannel Shirt Red - Travel 500</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
