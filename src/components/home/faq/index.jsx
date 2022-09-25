const FAQ = () => {
    return (
        <>
        <div className="justify-center pt-[100px]">
            <section className='w-[100%] flex justify-center'>
                <div className='card md:w-[70%] w-[100%] bg-blue-100 rounded-lg shadow-xl'>
                    <h3 className='px-4 py-8 text-black text-xl uppercase font-bold'>Frequently Asked Questions</h3>
                    <div>
                        <div className='card p-4'>
                            <details className='transition duration-500 bg-indigo-200	cursor-pointer p-8 border-solid border-l-8 border-indigo-400 rounded-md hover:bg-indigo-400'>
                                <summary className='flex items-center justify-space-between focus:outline-none'>
                                    <header className='flex justify-center items-center'>
                                        <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.6066 22H11.3934" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 11.3934V32.6066" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h1 className='leading-5 flex self-center text-black text-sm'>Is a hotdog a sandwich? Why or why not?</h1>
                                    </header>
                                </summary>
                                <div className='content ml-10 text-lg'>
                                    <p>A sandwich is "two or more slices of bread or a split roll having a filling in between." By that definition, hot dogs seem to qualify as sandwiches. ... It's just culturally not the same as a sandwich.</p>
                                </div>
                            </details>
                        </div>
                        <div className='card p-4'>
                            <details className='transition duration-500 bg-yellow-200	hover:bg-yellow-400 cursor-pointer p-8 border-solid border-l-8 border-yellow-400 rounded-md'>
                                <summary className='flex items-center justify-space-between focus:outline-none'>
                                    <header className='flex justify-center items-center'>
                                        <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.6066 22H11.3934" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 11.3934V32.6066" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h1 className='leading-5 flex self-center text-black text-xl'>What's the best Wi-Fi name you've seen?</h1>
                                    </header>
                                </summary>
                                <div className='content ml-10 text-lg'>
                                    <ul className='list-disc p-4'>
                                        <li>Mom Use This One</li>
                                        <li>I Now Declare You Husband and Wi-Fi</li>
                                        <li>Benjamin FrankLAN</li>
                                        <li>Martin Router King</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                        <div className='card p-4'>
                            <details className='transition duration-500 bg-pink-200	hover:bg-pink-400 cursor-pointer p-8 border-solid border-l-8 border-pink-400 rounded-md'>
                                <summary className='flex items-center justify-space-between focus:outline-none'>
                                    <header className='flex justify-center items-center'>
                                        <svg className='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.6066 22H11.3934" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 11.3934V32.6066" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h1 className='leading-5 flex self-center text-black text-xl'>What's invisible but you wish people could see?
                                        </h1>
                                    </header>
                                </summary>
                                <div className='content ml-10 text-lg'>
                                    <p>Sexually transmitted diseases.</p>
                                    <img className='w-16' src="https://images.vexels.com/media/users/3/143597/isolated/preview/0626994ef7a02a13ab0f7912889ece0e-lol-meme-face.png" />
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    )
}

export default FAQ;