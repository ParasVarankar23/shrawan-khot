"use client";

export default function LoyalFriendChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9F2] px-5 py-20">

            <div className="absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-[#FFD6E0]/50 blur-3xl" />

            <div className="relative z-10 max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B81]">
                    Chapter 04
                </p>

                <div className="mt-6 text-6xl">
                    🤝
                </div>

                <h1 className="mt-5 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                    The Friend Who
                    <span className="block text-[#FF6B81]">
                        Chose to Stay
                    </span>
                </h1>

                <p className="mt-5 text-lg text-[#7A8187]">
                    Sometimes loyalty says more than words ever can.
                </p>

                <div className="mt-10 rounded-[2rem] bg-white p-8 text-left shadow-[0_25px_80px_rgba(255,107,129,0.12)] sm:p-12">

                    <p className="text-lg leading-9 text-[#626C72]">
                        There was a time when some of our other friends decided that they
                        would stop talking to me.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#626C72]">
                        Friendships around us were changing. People were choosing sides.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#626C72]">
                        But Shrawan didn't simply follow everyone else.
                    </p>

                    <div className="my-8 border-l-4 border-[#FF6B81] bg-[#FFE5EA] p-6">

                        <p className="font-serif text-2xl font-bold text-[#C83D60]">
                            He continued talking to me.
                        </p>

                    </div>

                    <p className="text-lg leading-9 text-[#626C72]">
                        That may sound like a small thing, but it meant a lot.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#626C72]">
                        It showed me that his friendship wasn't based on who else was
                        around.
                    </p>

                    <p className="mt-6 font-serif text-2xl font-bold text-[#263238]">
                        He stayed because he genuinely cared.
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
                        className="rounded-full bg-[#FF6B81] px-7 py-3 text-sm font-bold text-white shadow-lg"
                    >
                        Continue →
                    </button>

                </div>

            </div>
        </section>
    );
}