import { ReactComponent as Badges } from "./icons/badges.svg";
import { ReactComponent as  Points } from "./icons/points.svg";
import { ReactComponent as  ApplyForCarLoan } from "./icons/applyForCarLoan.svg";



const badgesNumber = 20;
const pointsNumber = 1500;
const userName = "Mohammed";


const yourData = [
  {
  id: "1",
  background: "bg-darkBlue",
  textColor: "text-customYellow",
  icon: Badges,
  data: badgesNumber,
  dataName: "Badges!",
  disclaimer: `Hooray! Way to go ${userName}!`
},
{
  id: "2",
  background: "bg-pink-900",
  textColor: "text-orange-200",
  icon: Points,
  data: pointsNumber,
  dataName: "Points!",
  disclaimer: "Redeem and claim your rewards!"
}]

const YourInfo  = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-none lg:grid-cols-9 gap-5 mt-8 text-start">
      <li className="lg:col-span-5 md:row-span-1 md:col-span-2 bg-orange-200 flex flex-col flex-wrap gap-4 md:flex-row pl-6 pr-4 py-7 justify-around items-center rounded-md">
        <div className="text-darkBlue min-w-max order-1 md:order-first">
          <p className="font-bold text-2xl mb-2">Apply for a car loan !</p>
          <p>This is a sample of a generated text</p>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent mt-7 bg-darkBlue py-3 px-6 text-xs font-bold text-white shadow-sm hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Discover More
          </button>
        </div>
        <ApplyForCarLoan />
      </li>
      {yourData.map(item => (
        <li key="id" className={`lg:col-span-2 pl-6 py-7 gap-1 rounded-md ${item.background}`}>
          <div className="flex flex-col max-w-fit m-auto">
            <div className="flex flex-row flex-wrap text-white justify-between">
              <div className="font-bold">
                <p className="text-2xl leading-7 max-w-min">You have earned</p>
                <p className={`text-custom4Xl leading-tight ${item.textColor}`}>{item.data}</p>
                <p className="text-xl leading-6">{item.dataName}</p>
              </div>
              <item.icon />
            </div>
            <p className={`pr-6 ${item.textColor}`}>{item.disclaimer}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default YourInfo