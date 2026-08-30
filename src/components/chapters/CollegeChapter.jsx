"use client";

export default function CollegeChapter({ onNext, onPrevious }) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9F2] px-5 py-24 sm:px-8">

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C7CEFF]/40 blur-3xl" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFD6E0]/50 blur-3xl" />

                <div className="absolute left-[8%] top-[18%] text-2xl opacity-40">
                    ✦
                </div>

                <div className="absolute right-[12%] top-[24%] text-xl opacity-40">
                    ✨
                </div>

                <div className="absolute bottom-[20%] left-[15%] text-xl opacity-30">
                    🎓
                </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-5xl">

                {/* Chapter label */}
                <div className="mb-10 text-center">

                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#DCDFFF] bg-white/70 px-5 py-2 shadow-sm backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#7C83FD]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6B6FA8]">
                            Chapter 06
                        </span>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C83FD]">
                        After 11th
                    </p>

                </div>

                {/* Main content */}
                <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">

                    {/* Number */}
                    <div className="text-center md:text-left">

                        <p className="font-serif text-[120px] font-black leading-none text-[#E7E7FF] sm:text-[170px]">
                            06
                        </p>

                        <div className="-mt-8 ml-2 text-5xl sm:text-6xl">
                            🎓
                        </div>

                    </div>

                    {/* Story */}
                    <div className="rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-[0_20px_70px_rgba(124,131,253,0.12)] backdrop-blur-xl sm:p-10">

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B81]">
                            Different Paths
                        </p>

                        <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-[#263238] sm:text-5xl">
                            Different Colleges,
                            <span className="block text-[#7C83FD]">
                                Same Friendship.
                            </span>
                        </h1>

                        <div className="my-7 h-px bg-gradient-to-r from-[#FFD166] via-[#FF6B81] to-transparent" />

                        <div className="space-y-5 text-base leading-8 text-[#657078]">

                            <p>
                                After 11th grade, life started taking us in different
                                directions.
                            </p>

                            <p>
                                We joined different colleges, met different people, and became
                                busy with our own studies and lives.
                            </p>

                            <p>
                                We couldn't meet every day like we did during school. But
                                somehow, the distance never became a reason to end the
                                friendship.
                            </p>

                            <p>
                                Even with different college lives, we still made sure to stay
                                connected.
                            </p>

                        </div>

                        {/* Highlight */}
                        <div className="mt-8 rounded-2xl bg-[#EDEBFF] p-5">

                            <p className="text-center font-serif text-xl font-bold text-[#5F65B3]">
                                "Different colleges. Different lives. Still friends."
                            </p>

                        </div>

                    </div>

                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-center gap-4">

                    <button
                        onClick={onPrevious}
                        className="rounded-full border border-[#D9D9E8] bg-white px-6 py-3 text-sm font-semibold text-[#687078] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        ← Previous
                    </button>

                    <button
                        onClick={onNext}
                        className="rounded-full bg-[#7C83FD] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#7C83FD]/20 transition hover:-translate-y-1 hover:bg-[#6870F0]"
                    >
                        Continue →
                    </button>

                </div>

            </div>
        </section>
    );
}