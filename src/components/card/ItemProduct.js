import React from 'react'

const ItemProduct = () => {
  return (
    <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        alt=""
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="/">
            <span
              aria-hidden="true"
              className="absolute inset-0"
            ></span>
            Basic Tee
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">Black</p>
      </div>
      <p className="text-sm font-medium text-gray-900">$35</p>
    </div>
  </div>
  )
}

export default ItemProduct