import React, { useState } from "react";

const Sales = () => {
  const [value, setValue] = useState(4);

  return (
    <div className="m-0 p-0 overflow-hidden">
      <div className="flex justify-between">
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-semibold">Hi, welcome back!</h1>
          <p className="text-sm text-gray-500">
            Sales monitoring dashboard template.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex space-x-8">
            {/* Customer Ratings */}
            <div>
              <p className="text-sm text-gray-500">Customer Ratings</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className={`h-5 w-5 ${
                      i < value ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Online Sales */}
            <div>
              <p className="text-sm text-gray-500">Online Sales</p>
              <p className="text-lg font-bold text-black">563,275</p>
            </div>

            {/* Offline Sales */}
            <div>
              <p className="text-sm text-gray-500">Offline Sales</p>
              <p className="text-lg font-bold text-black">783,675</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
