import React from 'react'

function Block() {
  const steps = [
    {
      number: 1,
      title: "Erat at semper",
      desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum"
    },
    {
      number: 2,
      title: "Urna nec vivamus risus duis arcu",
      desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper"
    },
    {
      number: 3,
      title: "Lobortis euismod imperdiet tempus",
      desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi"
    },
    {
      number: 4,
      title: "Cras nulla aliquet nam eleifend amet et",
      desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero"
    },
  ];

  return (
    <div className='flex justify-center gap-20 py-10 '>
    
        <div className='shrink-0'>
            <img src="https://a.d-cd.net/f2a1d4cs-960.jpg" alt="" className='w-[560px] h-[510px] rounded-lg' />
        </div>

        <div className='flex flex-col gap-8'>
            {steps.map(step => (
                <div key={step.number} className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full flex items-center justify-center bg-[#5937E0] text-white font-semibold'>
                            {step.number}
                        </span>
                        <h2 className='text-[#000000] text-[20px] font-semibold'>{step.title}</h2>
                    </div>
                    <p className='text-[16px] font-normal text-[#00000099] pl-10 w-[550px]'>{step.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Block
