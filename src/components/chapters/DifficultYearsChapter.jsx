"use client";

export default function DifficultYearsChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#F9F8FF] px-5 py-20">

            <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F2] via-[#F9F8FF] to-[#FFECEF]" />

            <div className="relative z-10 w-full max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7C83FD]">
                    Chapter 08
                </p>

                <p className="mt-5 text-sm font-semibold text-[#FF6B81]">
                    2023 — 2026
                </p>

                <div className="mt-6 text-5xl">
                    ❤️
                </div>

                <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-[#263238] sm:text-6xl">
                    When Friendship
                    <span className="block text-[#FF6B81]">
                        Really Mattered
                    </span>
                </h1>

                <div className="mx-auto mt-10 rounded-[2rem] border border-white bg-white/80 p-8 text-left shadow-[0_30px_100px_rgba(124,131,253,0.12)] backdrop-blur-xl sm:p-12">

                    <p className="text-lg leading-9 text-[#626C72]">
                        School memories are funny.
                    </p>

                    <p className="mt-5 text-lg leading-9 text-[#626C72]">
                        The Social Studies incident is funny.
                    </p>

                    <p className="mt-5 text-lg leading-9 text-[#626C72]">
                        The pant incident is hilarious.
                    </p>

                    <div className="my-9 h-px bg-gradient-to-r from-transparent via-[#FFB7C4] to-transparent" />

                    <p className="text-lg leading-9 text-[#626C72]">
                        But the real test of friendship comes when life becomes difficult.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#626C72]">
                        Between 2023 and 2026, there were difficult phases. Times when I
                        was struggling and going through challenging situations.
                    </p>

                    <div className="my-9 rounded-2xl bg-[#FFE5EA] p-7 text-center">

                        <p className="font-serif text-2xl font-black text-[#C83D60] sm:text-3xl">
                            And Shrawan stayed.
                        </p>

                    </div>

                    <p className="text-lg leading-9 text-[#626C72]">
                        He continued talking to me. He supported me. He stood beside me.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#626C72]">
                        That's something I will always remember.
                    </p>

                    <p className="mt-8 text-center font-serif text-2xl font-bold text-[#263238]">
                        Real friendship isn't tested in good times.
                        <br />
                        It's revealed in difficult ones.
                    </p>

                </div>

            </div>
        </section>
    );
}