"use client";

export default function SocialStudiesChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFFDF8] px-5 py-20">

            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#FFF0B8]/50 blur-3xl" />

            <div className="relative z-10 w-full max-w-4xl">

                <div className="mb-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4A900]">
                        Chapter 02
                    </p>

                    <div className="mt-5 text-5xl">
                        🏫
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[#FFF0C5] bg-white p-7 text-center shadow-[0_25px_80px_rgba(234,180,0,0.12)] sm:p-12">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E4A900]">
                        Social Studies
                    </p>

                    <h1 className="mt-4 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                        The Incident
                    </h1>

                    <div className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#687278]">

                        <p>
                            Shrawan started teasing me during Social Studies class.
                        </p>

                        <p className="mt-5">
                            Naturally, I decided to complain to Sir.
                        </p>

                        <div className="my-8 rounded-2xl bg-[#FFF3C4] p-6">

                            <p className="text-3xl">
                                😐 → 🗣️ → 👨‍🏫 → 😳
                            </p>

                            <p className="mt-4 font-semibold text-[#8A6800]">
                                And then Sir slapped Shrawan.
                            </p>

                        </div>

                        <p>
                            At that time, it was definitely not funny.
                            But years later, it became one of those legendary school stories
                            we could remember and laugh about.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}