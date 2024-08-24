function AppHeader(){
    return(
        <div className="m-0 p-0 h-full w-full flex flex-row">
            <div className="AppLogo pl-6 h-full w-1/4  flex justify-start">
            <div className="h-full w-32  flex justify-start flex-row">
                <div className="h-full w-9">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>


                </div>
                <span className="py-1 font-bold text-indigo-900">Titaly</span>

            </div>

            </div>
            <div className="GlobalSearch h-full w-1/2  flex justify-center">
            <div className="h-full w-4/5 ">
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
            <div className="HeaderIcon pr-6 h-full w-1/4  flex flex-row justify-end">
            <div className="h-full w-9 px-0.5 flex justify-center">
                <div className="h-full w-full bg-slate-50 flex items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </div>
            


            </div>
            <div className="h-full w-9 px-0.5  flex justify-center">
                <div className="h-full w-full bg-slate-50 flex items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </div>
            


            </div>
            </div>
        </div>
    )
};
export default AppHeader;