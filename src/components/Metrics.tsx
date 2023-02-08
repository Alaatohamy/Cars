import { BoltIcon } from '@heroicons/react/24/solid';

const people:
  {id: any;
  icon: any;
  name: string;
  percentage: string;
  cardColor: string;
  textColor: string
  }[] = Array(4).fill({
  id: 1,
  icon: BoltIcon,
  name: 'Energy',
  percentage: "45",
  cardColor: 'purple-500',
  textColor: "white",
})

// const path = "M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"


const ProgressCircle = ({textColor, percentage, cardColor}: {textColor: string, percentage: string, cardColor: string}) => {
  const cssPercentage = 112 * Number(percentage) / 100

  return (
  <div 
  className={`relative rounded-full h-28 w-28 bg-opacity-10 bg-${textColor} mt-8 mx-auto`}
  >
    <span className={`absolute left-0 rounded-full h-28 w-28 bg-${textColor}`} style={{clipPath: `inset(0px ${cssPercentage}px 25px 0px round 10px)`}}></span>
    <span className={`absolute flex inset-0 m-auto z-10 rounded-full bg-${cardColor}`} style={{width: "91px", height: "90px", clipPath: `circle(50%)`}}>
      <p className='m-auto'>{percentage}%</p>
    </span>
  </div>
)};


export default function Metrics() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
                <li
          key={person.id}
          className={`col-span-1 flex flex-col rounded-lg bg-${person.cardColor} text-${person.textColor} text-center shadow`}
        >
          <div className="flex flex-1 flex-col px-14 py-6 text-2xl font-bold">
            <BoltIcon className={`mx-auto h-10 w-10 px-2 py-3 flex-shrink-0 rounded-full bg-opacity-10 bg-${person.textColor}`} />
            <h3 className="mt-2">{person.name}</h3>
            <ProgressCircle textColor={person.textColor} percentage={person.percentage} cardColor={person.cardColor} />
          </div>
        </li>        
      ))}
    </ul>
  )
}
