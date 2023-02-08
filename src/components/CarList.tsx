import { BoltIcon } from '@heroicons/react/24/outline';
import { ReactComponent as TowArrow } from "../assets/icons/twoArrows.svg";
import { ReactComponent as Recycle } from "../assets/icons/recycle.svg";
import { ReactComponent as Gear } from "../assets/icons/gear.svg";

const RecommendedCars = Array(3).fill({
  id: "dfghj",
  percentage: 64,
  img: "",
  name: "Mini Cooper",
  kilo: 123,
  price: 32,
  background: "mintYellow"
});

const CarList = () => {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 mt-11 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {RecommendedCars.map(({id, percentage, img, name, kilo, price, background}) => (
        <li key={id} className={`flex flex-col items-start gap-3 rounded-lg py-4 px-6 bg-${background}`} >
          <div>
            <Recycle className="inline-block w-5 h-5 mr-3" />
            <p className="font-bold inline-block">{percentage}% Recommend</p>
          </div>
          <img src={img} alt="" className="object-cover group-hover:opacity-75" />
          <div className="w-full">
            <p className="font-bold text-xl text-start">{name}</p>
            <div className='flex flex-row justify-between text-gray-500 font-medium mt-2'>
              <div className="flex flex-row justify-between items-center w-2/5">
                <TowArrow className="w-5 h-5" />
                <p>{kilo}K</p>
                <Gear className="w-5 h-5" />
                <BoltIcon className="w-5 h-5" />
              </div>
              <p>${price}/h</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CarList;