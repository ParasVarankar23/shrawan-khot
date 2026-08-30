"use client";

export default function FinalMessage({ onOpenLetter }) {
    return (
        <section
            id="final"
            className="relative overflow-hidden bg-white px-6 py-32"
        >

            <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-[#FFD166]/20 blur-3xl" />

            <div className="absolute -right-20 bottom-20 h-60 w-60 rounded-full bg-[#FF6B81]/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">

                <div className="mb-7 text-6xl">
                    🎂
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B81]">
                    For Shrawan
                </p>

                <h2 className="mt-5 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                    Thank you for being part of my journey.
                </h2>

                <div className="mx-auto mt-9 max-w-2xl space-y-4 text-lg leading-8 text-[#6B7280]">

                    <p>
                        You may forget my birthday sometimes. 😂
                    </p>

                    <p>
                        You may forget many other things.
                    </p>

                    <p>
                        But I will never forget the way you stood beside me when I
                        needed a friend.
                    </p>

                </div>

                <button
                    onClick={onOpenLetter}
                    className="mt-10 rounded-full bg-[#FF6B81] px-8 py-4 font-semibold text-white shadow-lg shadow-[#FF6B81]/20 transition hover:-translate-y-1 hover:bg-[#ff526d]"
                >
                    Open One Last Message ❤️
                </button>

            </div>

        </section>
    );
}