 
const tabslist = [{
    id: 0,
    name: 'Day task',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
  </svg>
  ,
  }, {
    id: 1,
    name: 'My Tasks',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
  </svg>
  ,
  }, {
    id: 2,
    name: 'MY plans',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
  </svg>
  ,
  }];
  const iteamlist = [{
    id: 0,
    name: 'sep 4',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
  </svg>
  ,
  }, {
    id: 1,
    name: 'oct 5',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
  </svg>
  ,
  }, {
    id: 2,
    name: 'nov 6',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
  </svg>
  ,
  }];


const tabs = tabslist.map(tabslist =>
    <li key={tabslist.id}>
            <button className=" h-10 w-full ps-3 py-2 border flex flex-row justify-start items-center border-transparent focus:outline-1 focus:ring-0 focus:border-blue-500 focus:bg-slate-100 transition-colors duration-700">
            <div className="addIcon">
                {tabslist.icon}

                </div>
                <div className="additemname font-bold ps-4">
                    <h7>{tabslist.name}</h7>

                </div>

            </button>
    </li>
  );

  const iteamlist1 = iteamlist.map(iteamlist =>
    <li key={iteamlist.id}>
            <button className=" h-10 w-full ps-3 py-2 border flex flex-row justify-start items-center border-transparent focus:outline-1 focus:ring-0 focus:border-blue-500 focus:bg-slate-100">
            <div className="addIcon">
                {iteamlist.icon}

                </div>
                <div className="additemname font-bold ps-1">
                    <h7>{iteamlist.name}</h7>

                </div>

            </button>
    </li>
  );

function LeftSlider(){
    return(
       <div className="h-full w-full p-0 m-0 flex flex-col">
        <div className="m-0 p-0 h-10 w-full">
            <div className="m-0 p-2 h-10 w-full ">
            <button className=" h-full w-full flex flex-row justify-center items-center bg-gray-200 focus:outline-none focus:ring-1 focus:border-blue-500">
                <div className="addIcon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                </div>
                <div className="additemname font-bold">
                    <h7>New Plan</h7>

                </div>

            </button>


            </div>

        </div>
        <div className=" tablist h-auto w-full pt-10 pb-6 flex flex-row justify-center items-center"> 
        <div className="m-0 px-2 h-full w-full">
            <ul>{tabs}</ul>


            </div>

        </div>
        <div className=" tablist h-auto w-full ps-2 pt-6 pb-6 flex flex-col justify-start"> 
            <p className="flex justify-start"> Pined Item :</p>
            <div className="m-0 pe-2 pt-2 h-full w-full ">
            <ul>{iteamlist1}</ul>


            </div>

        </div>
        

       </div>
    )
};
export default LeftSlider;