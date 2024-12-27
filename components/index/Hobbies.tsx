
function Hobbies(){
    const listStyle = "text-gray-700 list-disc sm:text-lg md:text-xl dark:text-gray-300 p-1"

    return(
        <div className="font-mono">
            <div className="flex flex-col md:flex-row w-full justify-start items-start ml-0 sm:ml-12 md:items-center">
                <div className="grid flex-grow rounded-box place-items-center">
                    <div className='flex flex-col'>
                        <h1 className='text-2xl lg:text-4xl text-yellow-700 dark:text-green-500 normal-case mb-2'>Hobbies</h1>
                        <ul className={`${listStyle}`}>
                            <li className='mb-1'>Football ⚽</li>
                            <li className='mb-1'>Learning Languages 🇪🇸</li>
                            <li className='mb-1'>Reading 📚</li>
                            <li className='mb-1'> Backpacking 🏝</li>
                        </ul>
                    </div>
                </div> 

                <div className="grid flex-grow rounded-box place-items-center">
                    <div className='flex flex-col'>
                        <h1 className='text-2xl lg:text-4xl text-yellow-700 dark:text-green-500 normal-case mb-2'>Interests</h1>
                        <ul className={`${listStyle}`}>
                            <li className='mb-1 '>Data Structures and Algorithms 🛸</li>
                            <li className='mb-1'>Machine Learning 🤖</li>
                            <li className='mb-1'>Systems design 🧑‍🎨</li>
                            <li className='mb-1'>Mathematics 📐</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div className='min-h-80'></div>
        </div>
    )
}

export default Hobbies