export default function About() {
    const tools = [
        { name: 'google analytics', icon: './assets/google analytics.png', },
        { name: 'google search console', icon: './assets/google search console.png', },
        { name: 'google tag manager', icon: './assets/google tag manager.png', },
        { name: 'semrush', icon: './assets/semrush.png', },
        { name: 'moz', icon: './assets/moz.png', },
        { name: 'page speed insight', icon: './assets/page-speed-insight.png', },
        { name: 'seo optimer', icon: './assets/seo optimer.png', },
        { name: 'google ad', icon: './assets/google ad.png', },
        { name: 'screaming frog', icon: './assets/screaming frog.png', },
        { name: 'react', icon: './assets/react.png', },
    ];

    const data = [
        {
            name: 'Skills',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'Boosting website visibility with SEO audits, backlink strategies, keyword research, and optimized web content.'
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Bachelor of Computer Application (BCA)',
        },
        {
            name: 'Experience',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'SEO Trainee at Viral Mafia Agency',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/cv-profile-img.webp' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/cropped_circle_image2.png" alt="" className="w-full animate-spin_slow" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">As an SEO Executive, I specialize in boosting website performance through on-page and off-page SEO, content optimization, and backlink strategies. I focus on driving organic traffic, improving rankings, and maximizing online growth for businesses.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i used</h4>

                    <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="relative group flex items-center justify-center
  aspect-square
  border border-gray-300 dark:border-white/30
  rounded-lg cursor-pointer
  transition-all duration-300 ease-in-out
  hover:scale-110
  hover:bg-gray-100 dark:hover:bg-white/10
  hover:border-black dark:hover:border-white
  hover:shadow-xl"
                            >
                                {/* Tooltip */}
                                <span
                                    className="
      absolute -top-8
      opacity-0 group-hover:opacity-100
      scale-90 group-hover:scale-100
      transition-all duration-300
      bg-black text-white text-xs px-2 py-1
      rounded-md whitespace-nowrap
      pointer-events-none
      dark:bg-white dark:text-black
    "
                                >
                                    {tool.name}
                                </span>

                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-10 sm:w-12"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}