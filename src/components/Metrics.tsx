import { BoltIcon } from '@heroicons/react/24/solid';
import { ReactComponent as  WaterDot } from "../assets/icons/waterDot.svg"
import { ReactComponent as  DoubleArrow } from "../assets/icons/doubleArrow.svg"
import { ReactComponent as  Wheel } from "../assets/icons/wheel.svg"

const people = [{
  id: 1,
  icon: BoltIcon,
  name: 'Energy',
  percentage: "45",
  cardColor: 'bg-purple-500',
  textColor: "white",
  ringColor: "text-white",
  backgroundWithOpacity: "bg-white/[0.20]"

},
{
  id: 2,
  icon: DoubleArrow,
  name: 'Range',
  percentage: "157",
  cardColor: 'bg-white',
  ringColor: "text-red-200",
  backgroundWithOpacity: "bg-red-200/[0.20]"
},
{
  id: 3,
  icon: WaterDot,
  name: 'Break fluid',
  percentage: "9",
  cardColor: 'bg-white',
  ringColor: "text-purple-500",
  backgroundWithOpacity: "bg-purple-500/[0.20]"
},
{
  id: 4,
  icon: Wheel,
  name: 'Tire Wear',
  percentage: "25",
  cardColor: 'bg-white',
  ringColor: "text-yellow-300",
  backgroundWithOpacity: "bg-yellow-300/[0.20]"
},
]

const ProgressCircle = ({ringColor, percentage, textColor}: {ringColor: string, percentage: string, textColor: string | null}) => {
  const diameter = 51
  const circumference = 2 * Math.PI * diameter
  const cssPercentage = circumference - (circumference * Number(percentage) / 100)

  return (
    <div className={`h-28 w-28 mt-8 mx-auto`}>
      <svg className="h-28 w-28" x-cloak aria-hidden="true">
        <circle
          className="text-gray-200/[0.5]"
          stroke-width="10"
          stroke="currentColor"
          fill="transparent"
          r="51"
          cx="50%"
          cy="50%"
          />
        <circle
          className={ringColor}
          stroke-width="10"
          stroke-linecap="round"
          stroke-dasharray={circumference}
          stroke-dashoffset={cssPercentage}
          stroke="currentColor"
          fill="transparent"
          r="51"
          cx="50%"
          cy="50%"
          />
        <text fill={textColor? `${textColor}` : "" } x="50%" y="50%" text-anchor="middle" dy=".3em">{percentage}%</text>
      </svg>
    </div>
  )
};


const Metrics = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => {
        return (
        <li
          key={person.id}
          className={`col-span-1 rounded-xl ${person.cardColor} ${person.textColor? `text-${person.textColor}` : "" }`}
        >
          <div className="flex flex-1 flex-col min-w-max py-6 text-2xl font-bold">
            <person.icon 
              className={`mx-auto h-10 w-10 px-2 py-3 rounded-full ${person.backgroundWithOpacity}`}
            />
            <h3 className="mt-2">{person.name}</h3>
            <ProgressCircle ringColor={person.ringColor} percentage={person.percentage} textColor={person.textColor || null}  />
          </div>
        </li>        
      )})}
    </ul>
  )
}

export default Metrics;
