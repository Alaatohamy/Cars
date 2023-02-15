import { Squares2X2Icon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import PorscheRed from "../assets/imgs/porsche-red.png";

import { CarItem } from "../components";

const filtersList = [
  { id: 1, name: "new" },
  { id: 2, name: "toyota" }
]

const actionsList = [{
  id: 1,
  action: "order",
  icon: Squares2X2Icon
},{
  id: 2,
  action: "filter",
  icon: AdjustmentsHorizontalIcon
}
]

const carsData = Array(7).fill({
  id: "3",
  percentage: 74,
  img: PorscheRed,
  name: "Porsche 911 Carrera",
  kilo: 130,
  price: 28,
  background: "bg-white"
})

const Booking = () => {
  return (
    <>
      <h1 className="font-bold text-start text-3xl mb-9">Booking</h1>
      <div className="flex flex-row justify-between">
        <ul className="flex flex-row">
          {filtersList.map(item => (
            <li
              key={item.id}
              className="bg-white px-5 py-2 rounded-full mr-4 font-medium text-gray-600"
            >
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>
        <ul className="flex flex-row">
          {actionsList.map(item => (
            <li>
              <item.icon className="h-10 w-10 rounded-full bg-white p-2 mr-4" />
            </li>
          ))}
        </ul>
      </div>
      <ul className="grid grid-cols-1 csm:grid-cols-2 md:grid-cols-3 gap-y-8 mt-9 gap-x-6 xl:gap-x-8">
        {carsData.map(({id, percentage, img, name, kilo, price, background}) => (
          <CarItem
            id={id}
            percentage={percentage}
            img={img}
            name={name}
            kilo={kilo}
            price={price}
            background={background}
          />
        ))}
      </ul>
    </>
  )
}

export default Booking;
