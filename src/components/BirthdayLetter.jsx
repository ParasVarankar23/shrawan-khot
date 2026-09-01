"use client";

export default function BirthdayLetter({ open }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#263238]/40 px-5 py-8 backdrop-blur-sm">

            <div className="relative w-full max-w-2xl rounded-3xl bg-[#FFF9F2] p-8 shadow-2xl sm:p-12">

                {/* Letter Icon */}
                <div className="mb-6 text-5xl">
                    💌
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B81]">
                    A Birthday Letter
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black text-[#263238]">
                    Dear Shrawan,
                </h2>

                <div className="mt-8 space-y-5 text-base leading-8 text-[#59636A]">

                    <p>
                        Ten years, countless memories, and one friendship
                        that somehow survived it all.
                    </p>

                    <p>
                        Thank you for always being there through the good,
                        the bad, and all the madness in between.
                    </p>

                    <p>
                        No matter where life takes us, I hope this friendship
                        always remains a part of our story.
                    </p>

                    <p className="font-serif text-2xl font-bold text-[#FF6B81]">
                        Happy Birthday, Shrawan! 🎂❤️
                    </p>

                </div>

                <div className="mt-9 rounded-2xl bg-[#FFE5EA] p-5 text-center">
                    <p className="font-semibold text-[#FF6B81]">
                        Friends since 2016 • Still friends in 2026 ❤️
                    </p>
                </div>

            </div>
        </div>
    );
}

