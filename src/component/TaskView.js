const Tasks = [{
    id: 0,
    name:     <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password:</h2>
    ,
    profession: 
    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        <li class="flex items-center">
            <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
             </svg>
            At least 10 
        </li>

    </ul>
    ,
  }, {
    id: 1,
    name:     <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">requirements:</h2>
    ,
    profession: 
    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        
        <li class="flex items-center">
            <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
             </svg>
            At character
        </li>
    </ul>
   ,
  }];


  const taksset = Tasks.map(Tasks =>
    <li key={Tasks.id}>
        <div class="max-w-sm p-2 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="addIcon">
                {Tasks.name}

                </div>
                <div className="additemname font-bold ps-4">
                    <h7>{Tasks.profession}</h7>

                </div>

           
            </div>
    </li>
  );

  const buct =[{id:0,
    Card :<div className="bucketlist h-auto w-40 flex flex-col my-2 bg-blue-400">
    <div className="bucetname">
        <span className="p-2 flex justify-start">Bucekt Name

        </span>

    </div>
    <div className="addtaskbutton p-2">
    <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
    </svg>
    Add Task
    </button>

    </div>
    <div className="tasklist px-2">
        <ul>{taksset}</ul>

    </div>


</div>,
  },{id:1,
    Card :<div className="bucketlist h-auto w-40 flex flex-col my-2 bg-blue-400">
    <div className="bucetname">
        <span className="p-2 flex justify-start">Bucekt Name

        </span>

    </div>
    <div className="addtaskbutton p-2">
    <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
    </svg>
    Add Task
    </button>

    </div>
    <div className="tasklist px-2">
        <ul>{taksset}</ul>

    </div>


</div>,},

  ];

  const bucekts = buct.map(buct =>
    <li key={buct.id}>
        <div className="bg-lime-300">
            {buct.Card}
        </div>
    </li>
  );



function TaskView(){
    return(
        <div>
            <div className="h-full w-full p-2 flex flex-col">
                <div>
                    

<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>


                </div>
                <div>
                    
                <div className="h-full w-1/4 my-4">
            <div class="relative h-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-2 p-1.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-full">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                    </div>
                    <input type="search" id="default-search" class="h-full w-full p-1.5 ps-7 align-middle  text-sm text-gray-900 border  border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..."  />
                   
        </div>

            </div>


                </div>
                <div className="h-full w-full">
                    <div className="h-full w-full my-4 flex flex-row">
                       <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">{bucekts}</ul>


                    </div>

                </div>
            </div>

        </div>
    )
};
export default TaskView;