"use client"

import Image from "next/image"

const ProductsCard = (props) => {

  return (
    <div className="p-4 rounded-xl bg-sky-200">
      <Image src={props.src} width={300} height={300} alt="img" />
      <button>TEST</button>
    </div>
  )
}

export default ProductsCard