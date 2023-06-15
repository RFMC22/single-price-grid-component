import {data} from '../data/card'
const PriceCard = () => {
  return (
    <div className="max-w-[311px] md:max-w-[635px] h-[722px] md:max-h-[475px] rounded-[8px] bg-white overflow-hidden flex flex-wrap shadow-[0_15px_30px_0_rgba(0,81,171,0.14)]">
      <div className="max-h-[376px] w-full md:max-w-[555px] md:h-[136px] h-[267px] m-auto md:my-[40px] flex flex-col justify-between my-0 md:p-0 p-[28px]">
        <h1 className='font-bold text-[var(--cyan)] text-[20px] md:text-2xl'>{data.title}</h1>
        <div className='md:h-[84px] h-full flex flex-col justify-between'>
          <h2 className='prueba font-bold text-[var(--bright-yellow)] text-[15px] md:text-lg mt-[15px] md:mt-0'>{data.subtitle}</h2>
          <p className='font-normal text-[var(--grayish-blue)] text-[13px] md:text-[16px] leading-[26px]'>{data.text}</p>
        </div>
      </div>
      <div className="bg-[var(--cyan)] md:w-1/2 w-full md:h-[259px] h-[228px] flex justify-center items-center">
        <div className="w-[238px] h-[179px] flex flex-col justify-between items-start">
          <h3 className='text-[18px] text-white font-bold'>{data.titleMonthly}</h3>
          <p className="text-[32px] text-white font-bold mt-[4px]">{data.price}  <span className='text-[16px] text-white font-normal opacity-[50%]'>{data.perMonth}</span></p>
          <p className="text-[16px] font-normal text-white mb-[26px]">{data.description}</p>
          <button className='w-full text-center text-white text-[16px] font-bold bg-[--bright-yellow] rounded-[5px] h-[48px] shadow-[0_10px_10px_0_rgba(0,0,0,0.09)]'>
            {data.button}
          </button>
        </div>
      </div>
      <div className="bg-[var(--cyan)] opacity-[84.81%] md:w-1/2 w-full md:h-[259px] h-[227px] flex justify-center items-center">
        <div className="w-[238px] h-[179px] flex flex-col justify-between items-start">
          <h3 className='text-[18px] text-white font-bold'>{data.why}</h3>
          <ul className="font-normal text-white opacity-[75%]">
            <li className='text-[14px]'>{data.option1}</li>
            <li className='text-[14px]'>{data.option2}</li>
            <li className='text-[14px]'>{data.option3}</li>
            <li className='text-[14px]'>{data.option4}</li>
            <li className='text-[14px]'>{data.option5}</li>
            <li className='text-[14px]'>{data.option6}</li>
            <li className='text-[14px]'>{data.option7}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PriceCard