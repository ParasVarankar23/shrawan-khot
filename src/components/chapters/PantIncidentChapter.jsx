"use client";

export default function PantIncidentChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9F2] px-5 py-20">

            <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-[#EDEBFF] blur-3xl" />

            <div className="relative z-10 w-full max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#7C83FD]">
                    Chapter 03 • 7th Grade
                </p>

                <div className="mt-6 text-6xl">
                    👖
                </div>

                <h1 className="mt-5 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                    The Legendary
                    <span className="block text-[#7C83FD]">
                        Pant Incident
                    </span>
                </h1>

                <p className="mt-5 text-lg font-semibold text-[#FF6B81]">
                    A moment nobody could forget 😂
                </p>

                <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[#E5E3FF] bg-white p-8 shadow-xl sm:p-12">

                    <p className="text-lg leading-9 text-[#657078]">
                        One day, Shrawan's pants were torn.
                    </p>

                    <p className="mt-5 text-lg leading-9 text-[#657078]">
                        A normal friend would quietly say:
                    </p>

                    <div className="my-7 rounded-2xl bg-[#EDEBFF] p-5">
                        <p className="font-serif text-xl font-bold text-[#5E63A5]">
                            "Bro... your pants are torn."
                        </p>
                    </div>

                    <p className="text-lg font-bold text-[#FF6B81]">
                        But apparently, I had a better idea.
                    </p>

                    <div className="my-8 rounded-2xl bg-[#FFE5EA] p-7">

                        <p className="font-serif text-2xl font-black text-[#D93661] sm:text-3xl">
                            "SHRAWAN! YOUR PANTS ARE TORN!"
                        </p>

                        <p className="mt-4 text-sm font-semibold text-[#B84A68]">
                            Boys. Girls. Friends. Teacher.
                            <br />
                            Everyone heard it. 😂
                        </p>

                    </div>

                    <p className="text-lg leading-9 text-[#657078]">
                        And then came the final announcement:
                    </p>

                    <p className="mt-4 font-serif text-2xl font-black text-[#263238]">
                        "Take this pant!"
                    </p>

                </div>

                <div className="mt-10 flex justify-center gap-4">

                    <button
                        onClick={onPrevious}
                        className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold"
                    >
                        ← Back
                    </button>

                    <button
                        onClick={onNext}
                        className="rounded-full bg-[#7C83FD] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
                    >
                        I Have More Memories →
                    </button>

                </div>

            </div>
        </section>
    );
}