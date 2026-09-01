"use client";

export default function FinalBirthdayChapter({
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9F2] px-5 py-20">

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-[-100px] top-0 h-96 w-96 rounded-full bg-[#FFD166]/25 blur-3xl" />

                <div className="absolute right-[-100px] bottom-0 h-96 w-96 rounded-full bg-[#FF6B81]/25 blur-3xl" />

                <div className="absolute left-[10%] top-[20%] animate-pulse text-2xl">
                    ✨
                </div>

                <div className="absolute right-[15%] top-[30%] animate-bounce text-2xl">
                    🎈
                </div>

                <div className="absolute bottom-[20%] left-[15%] animate-pulse text-2xl">
                    💛
                </div>

                <div className="absolute bottom-[25%] right-[12%] animate-pulse text-2xl">
                    ❤️
                </div>

            </div>

            <div className="relative z-10 w-full max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#FF6B81]">
                    Final Chapter
                </p>

                <div className="mt-7 text-7xl">
                    🎂
                </div>

                <p className="mt-7 text-sm font-semibold text-[#7C83FD]">
                    2016 → 2026
                </p>

                <h1 className="mt-5 font-serif text-5xl font-black leading-tight text-[#263238] sm:text-7xl">
                    Happy Birthday,
                    <span className="block text-[#FF6B81]">
                        Shrawan
                    </span>
                </h1>

                <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#FFD166]" />

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#687278]">
                    Ten years.
                    <br />
                    Countless memories.
                    <br />
                    Different phases of life.
                    <br />
                    One friendship that stayed.
                </p>

                <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] bg-white p-7 shadow-[0_25px_80px_rgba(255,107,129,0.15)] sm:p-10">

                    <p className="font-serif text-2xl font-bold leading-relaxed text-[#263238] sm:text-3xl">
                        "Thank you for being part of my journey."
                    </p>

                    <p className="mt-5 leading-8 text-[#747C82]">
                        You may forget my birthday sometimes.
                        <br />
                        You may forget many other things.
                        <br />
                        But I will never forget the way you stood beside me.
                    </p>

                </div>

                <div className="mt-10 space-y-5">

                    <div className="mx-auto max-w-xl rounded-[2rem] border border-[#FFD5DD] bg-white/80 p-6 shadow-[0_20px_60px_rgba(255,107,129,0.12)] backdrop-blur-sm sm:p-8">

                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FF6B81]">
                            Memory Capsule
                        </p>

                        <p className="mt-4 font-serif text-2xl font-bold leading-relaxed text-[#263238] sm:text-3xl">
                            Some friendships are not loud.
                            <span className="block text-[#FF6B81]">
                                They are the ones who stay.
                            </span>
                        </p>

                    </div>

                    <div className="flex items-center justify-center gap-4 text-2xl">
                        <span>✨</span>
                        <span>💛</span>
                        <span>✨</span>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8A8E93]">
                        The story ends here, but the friendship continues
                    </p>

                </div>

                <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[#B0B4B7]">
                    Friends since 2016 • Still friends in 2026
                </p>

            </div>

        </section>
    );
}