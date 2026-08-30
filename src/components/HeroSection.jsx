"use client";

export default function HeroSection({ onStart }) {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF9F2] px-6">

            {/* Decorative blobs */}
            <div className="absolute left-[-100px] top-[15%] h-72 w-72 rounded-full bg-[#FFD166]/30 blur-3xl" />

            <div className="absolute right-[-100px] top-[20%] h-80 w-80 rounded-full bg-[#FF6B81]/20 blur-3xl" />

            <div className="absolute bottom-[-120px] left-[35%] h-80 w-80 rounded-full bg-[#7C83FD]/20 blur-3xl" />

            {/* Floating decorations */}
            <div className="absolute left-[10%] top-[25%] animate-bounce text-3xl">
                🎈
            </div>

            <div className="absolute right-[12%] top-[30%] animate-pulse text-3xl">
                ✨
            </div>

            <div className="absolute bottom-[25%] left-[15%] animate-pulse text-2xl">
                💛
            </div>

            <div className="absolute bottom-[20%] right-[15%] animate-bounce text-2xl">
                🎈
            </div>

            <div className="relative z-10 mx-auto max-w-5xl text-center">

                {/* Small heading */}
                <div className="mb-8 flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-[#FF6B81]" />

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B81] sm:text-sm">
                        A Friendship Since 2016
                    </p>

                    <span className="h-px w-12 bg-[#FF6B81]" />
                </div>

                {/* Birthday icon */}
                <div className="mb-8 text-6xl sm:text-7xl">
                    🎂
                </div>

                {/* Main heading */}
                <h1 className="font-serif text-5xl font-black leading-tight text-[#263238] sm:text-7xl md:text-8xl">

                    Happy Birthday,

                    <span className="mt-2 block text-[#FF6B81]">
                        Shrawan
                    </span>

                </h1>

                {/* Description */}
                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">

                    A small journey through

                    <span className="font-semibold text-[#263238]">
                        {" "}10 years
                    </span>

                    {" "}of friendship, laughter,
                    unforgettable memories, and everything in between.

                </p>

                {/* Start button */}
                <button
                    onClick={onStart}
                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6B81] px-9 py-4 font-semibold text-white shadow-xl shadow-[#FF6B81]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff526d] hover:shadow-2xl hover:shadow-[#FF6B81]/30 active:scale-95"
                >

                    <span>
                        Begin Our Story
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>

                </button>

                {/* Small hint */}
                <p className="mt-5 text-xs text-[#9CA3AF]">
                    Click to enter the memories ✨
                </p>

                {/* Years */}
                <div className="mx-auto mt-16 flex max-w-sm items-center justify-center gap-8">

                    <div>
                        <p className="text-2xl font-black text-[#FF6B81]">
                            2016
                        </p>

                        <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[#9CA3AF]">
                            It Began
                        </p>
                    </div>

                    <div className="h-10 w-px bg-[#D1D5DB]" />

                    <div>
                        <p className="text-2xl font-black text-[#7C83FD]">
                            2026
                        </p>

                        <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[#9CA3AF]">
                            Still Here
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

