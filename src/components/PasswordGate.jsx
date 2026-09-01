"use client";

import { useEffect, useState } from "react";

export default function PasswordGate({ children, onUnlocked }) {
    const [password, setPassword] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // 🔐 CHANGE YOUR PASSWORD HERE
    const CORRECT_PASSWORD = "shrawan";

    const handleUnlock = () => {
        if (!password.trim()) {
            setError(true);
            return;
        }

        setLoading(true);

        setTimeout(() => {
            if (password === CORRECT_PASSWORD) {
                setUnlocked(true);
                setError(false);

                if (onUnlocked) {
                    onUnlocked();
                }
            } else {
                setError(true);
                setPassword("");
            }

            setLoading(false);
        }, 600);
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleUnlock();
        }
    };

    // =========================
    // UNLOCKED
    // =========================

    if (unlocked) {
        return (
            <div className="animate-[pageReveal_.8s_ease-out]">
                {children}

                <style jsx>{`
                    @keyframes pageReveal {
                        from {
                            opacity: 0;
                            transform: scale(0.98);
                        }

                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}</style>
            </div>
        );
    }

    // =========================
    // PASSWORD SCREEN
    // =========================

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff5f6] px-5">

            {/* Background glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffdce3] opacity-40 blur-[120px]" />


            {/* Floating decorations */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <span className="absolute left-[10%] top-[20%] animate-pulse text-2xl text-[#e8a4b0]">
                    ✦
                </span>

                <span className="absolute right-[12%] top-[25%] text-3xl text-[#e7a1ad] opacity-70">
                    ♡
                </span>

                <span className="absolute bottom-[20%] left-[15%] text-xl text-[#e6a1ad]">
                    ✧
                </span>

                <span className="absolute bottom-[18%] right-[15%] animate-pulse text-2xl text-[#e6a0ac]">
                    ♥
                </span>

                <span className="absolute left-[25%] top-[12%] text-sm text-[#e7a5af]">
                    ✦
                </span>

                <span className="absolute right-[28%] bottom-[12%] text-sm text-[#e7a5af]">
                    ✧
                </span>

            </div>


            {/* =========================
                PASSWORD CARD
            ========================== */}

            <div
                className={`relative z-10 w-full max-w-[430px] transition-all duration-500 ${
                    error
                        ? "animate-[shake_.4s_ease-in-out]"
                        : ""
                }`}
            >

                <div className="rounded-[32px] border border-[#efd8dc] bg-[#fffdf9]/95 px-7 py-10 shadow-[0_30px_90px_rgba(100,50,60,0.15)] backdrop-blur-xl sm:px-10 sm:py-12">


                    {/* Lock / Envelope */}

                    <div className="flex justify-center">

                        <div className="relative">

                            {/* Glow */}

                            <div className="absolute inset-0 scale-150 rounded-full bg-[#ffdce3] opacity-60 blur-2xl" />


                            {/* Circle */}

                            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#efc8cf] bg-gradient-to-br from-white to-[#ffe8ed] shadow-[0_15px_35px_rgba(255,107,129,0.16)]">

                                <span className="text-5xl">
                                    💌
                                </span>

                            </div>


                            {/* Sparkles */}

                            <span className="absolute -right-3 top-0 text-lg text-[#e6a0ab]">
                                ✦
                            </span>

                            <span className="absolute -bottom-1 -left-3 text-sm text-[#e6a0ab]">
                                ♡
                            </span>

                        </div>

                    </div>


                    {/* Heading */}

                    <div className="mt-7 text-center">

                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff6b81]">
                            A Private Letter
                        </p>

                        <h1 className="mt-3 font-serif text-3xl font-black text-[#352b2e] sm:text-4xl">
                            Something Special
                        </h1>

                        <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-[#927d82]">
                            This little memory is meant for
                            <br />
                            someone very special. ❤️
                        </p>

                    </div>


                    {/* Divider */}

                    <div className="my-7 flex items-center justify-center gap-3">

                        <div className="h-px w-16 bg-[#ead5d9]" />

                        <span className="text-xs text-[#e2a0aa]">
                            ✦
                        </span>

                        <div className="h-px w-16 bg-[#ead5d9]" />

                    </div>


                    {/* Password */}

                    <div>

                        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-[#806d72]">
                            Enter the secret password
                        </label>


                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter password..."
                                autoComplete="off"
                                className={`h-14 w-full rounded-2xl border bg-white px-5 pr-14 text-sm text-[#352b2e] outline-none transition-all placeholder:text-[#c0adb1] ${
                                    error
                                        ? "border-[#ff8d9d] ring-4 ring-[#ffe1e5]"
                                        : "border-[#eadadd] focus:border-[#ff9baa] focus:ring-4 focus:ring-[#ffe8eb]"
                                }`}
                            />


                            {/* Show password */}

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#a78c92] transition hover:text-[#ff6b81]"
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>

                        </div>


                        {/* Error */}

                        <div className="h-7 pt-2">

                            {error && (
                                <p className="text-center text-xs font-semibold text-[#e66f7e]">
                                    That isn't the right password. Try again. ❤️
                                </p>
                            )}

                        </div>


                        {/* Unlock */}

                        <button
                            type="button"
                            onClick={handleUnlock}
                            disabled={loading}
                            className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#ff6b81] text-sm font-bold text-white shadow-[0_12px_25px_rgba(255,107,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5871] hover:shadow-[0_16px_30px_rgba(255,107,129,0.30)] disabled:cursor-not-allowed disabled:opacity-70"
                        >

                            {loading ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                    Opening...
                                </>
                            ) : (
                                <>
                                    Unlock My Letter
                                    <span>→</span>
                                </>
                            )}

                        </button>

                    </div>


                    {/* Bottom message */}

                    <div className="mt-7 text-center">

                        <p className="font-serif text-xs italic text-[#aa9298]">
                            Some memories are worth keeping private.
                        </p>

                        <div className="mt-3 text-sm tracking-[0.35em] text-[#e4a2ac]">
                            ✦ ♥ ✦
                        </div>

                    </div>

                </div>


                {/* Tiny footer */}

                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-[#b79ca2]">
                    Made with memories • 2016 — 2026
                </p>

            </div>


            {/* Animation */}

            <style jsx>{`
                @keyframes shake {
                    0%,
                    100% {
                        transform: translateX(0);
                    }

                    20% {
                        transform: translateX(-8px);
                    }

                    40% {
                        transform: translateX(8px);
                    }

                    60% {
                        transform: translateX(-6px);
                    }

                    80% {
                        transform: translateX(6px);
                    }
                }
            `}</style>

        </main>
    );
}

