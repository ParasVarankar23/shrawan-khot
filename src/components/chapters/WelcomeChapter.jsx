"use client";

export default function WelcomeChapter({ onNext }) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9F2] px-6 py-20">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FFD166]/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FF6B81]/20 blur-3xl" />

            <div className="relative z-10 max-w-4xl text-center">

                <div className="mb-8 text-6xl sm:text-7xl">
                    📖
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FF6B81]">
                    Chapter 01
                </p>

                <h1 className="mt-5 font-serif text-5xl font-black leading-tight text-[#263238] sm:text-7xl">
                    Where It All
                    <span className="block text-[#FF6B81]">
                        Began
                    </span>
                </h1>

                <p className="mt-6 text-lg font-semibold text-[#7C83FD]">
                    6th Grade • 2016
                </p>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#69737A] sm:text-lg">
                    Two school friends. One ordinary classroom. And a friendship neither
                    of us knew would last for the next ten years.
                </p>

                <div className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6B7280] shadow-md">
                    2016 → 2026 ❤️
                </div>

                <div>
                    <button
                        onClick={onNext}
                        className="mt-10 rounded-full bg-[#FF6B81] px-8 py-4 font-bold text-white shadow-xl shadow-[#FF6B81]/20 transition hover:-translate-y-1 hover:bg-[#ff526d]"
                    >
                        Continue the Story →
                    </button>
                </div>

            </div>
        </section>
    );
}