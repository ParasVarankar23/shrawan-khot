"use client";

import { useEffect, useRef, useState } from "react";

import PasswordGate from "@/components/PasswordGate";
import FloatingDecor from "@/components/FloatingDecor";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import BirthdayLetter from "@/components/BirthdayLetter";

// Chapters
import WelcomeChapter from "@/components/chapters/WelcomeChapter";
import SocialStudiesChapter from "@/components/chapters/SocialStudiesChapter";
import PantIncidentChapter from "@/components/chapters/PantIncidentChapter";
import LoyalFriendChapter from "@/components/chapters/LoyalFriendChapter";
import ExamChapter from "@/components/chapters/ExamChapter";
import CollegeChapter from "@/components/chapters/CollegeChapter";
import ForgottenBirthdayChapter from "@/components/chapters/ForgottenBirthdayChapter";
import DifficultYearsChapter from "@/components/chapters/DifficultYearsChapter";
import FinalBirthdayChapter from "@/components/chapters/FinalBirthdayChapter";

function BirthdayExperience({ autoStart }) {
    const [started, setStarted] = useState(false);
    const [chapter, setChapter] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    const audioRef = useRef(null);
    const storyScrollRef = useRef(null);

    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | CHAPTERS
    |--------------------------------------------------------------------------
    */

    const chapters = [
        {
            id: "welcome",
            title: "Where It All Began",
            component: WelcomeChapter,
        },
        {
            id: "social-studies",
            title: "The Social Studies Incident",
            component: SocialStudiesChapter,
        },
        {
            id: "pant-incident",
            title: "The Legendary Pant Incident",
            component: PantIncidentChapter,
        },
        {
            id: "loyal-friend",
            title: "The Friend Who Stayed",
            component: LoyalFriendChapter,
        },
        {
            id: "exam",
            title: "The Exam-Time Answers",
            component: ExamChapter,
        },
        {
            id: "college",
            title: "Different Colleges",
            component: CollegeChapter,
        },
        {
            id: "forgotten-birthday",
            title: "The Forgotten Birthday",
            component: ForgottenBirthdayChapter,
        },
        {
            id: "difficult-years",
            title: "When Friendship Really Mattered",
            component: DifficultYearsChapter,
        },
        {
            id: "final",
            title: "Happy Birthday Shrawan",
            component: FinalBirthdayChapter,
        },
    ];

    const isLastChapter = chapter === chapters.length - 1;

    /*
    |--------------------------------------------------------------------------
    | START STORY
    |--------------------------------------------------------------------------
    */

    const startStory = async () => {
        setStarted(true);
        setChapter(0);

        if (audioRef.current) {
            try {
                audioRef.current.volume = 0.35;
                await audioRef.current.play();
            } catch (error) {
                console.log("Music could not start:", error);
            }
        }
    };

    const closeLetterAndReturnHome = () => {
        setShowLetter(false);
        setStarted(false);
        setChapter(0);
        setTransitioning(false);
    };

    useEffect(() => {
        if (!autoStart) return;

        startStory();
    }, [autoStart]);

    /*
    |--------------------------------------------------------------------------
    | CHANGE CHAPTER
    |--------------------------------------------------------------------------
    */

    const changeChapter = (nextChapter) => {
        if (transitioning) return;
        if (nextChapter < 0) return;
        if (nextChapter >= chapters.length) return;
        if (nextChapter === chapter) return;

        setTransitioning(true);

        setTimeout(() => {
            setChapter(nextChapter);

            requestAnimationFrame(() => {
                setTransitioning(false);

                if (storyScrollRef.current) {
                    storyScrollRef.current.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            });
        }, 450);
    };

    const nextChapter = () => {
        if (chapter < chapters.length - 1) {
            changeChapter(chapter + 1);
        }
    };

    const previousChapter = () => {
        if (chapter > 0) {
            changeChapter(chapter - 1);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | AUTOMATIC CHAPTER PROGRESS
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (
            !started ||
            transitioning ||
            showLetter ||
            isLastChapter
        ) {
            return;
        }

        const timer = setTimeout(() => {
            nextChapter();
        }, 10000);

        return () => clearTimeout(timer);
    }, [
        started,
        chapter,
        transitioning,
        showLetter,
        isLastChapter,
    ]);

    /*
    |--------------------------------------------------------------------------
    | FINAL CHAPTER → SHOW ENVELOPE
    |--------------------------------------------------------------------------
    |
    | The envelope appears after the final chapter.
    | It does NOT automatically close.
    |
    */

    useEffect(() => {
        if (
            !started ||
            !isLastChapter ||
            showLetter ||
            transitioning
        ) {
            return;
        }

        const timer = setTimeout(() => {
            setShowLetter(true);

            const closeTimer = setTimeout(() => {
                closeLetterAndReturnHome();
            }, 8000);

            return () => clearTimeout(closeTimer);
        }, 3000);

        return () => clearTimeout(timer);
    }, [
        started,
        isLastChapter,
        showLetter,
        transitioning,
    ]);

    /*
    |--------------------------------------------------------------------------
    | KEYBOARD
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!started) return;

        const handleKeyboard = (event) => {
            /*
             * Don't navigate while the birthday letter
             * is being shown.
             */
            if (showLetter) return;

            if (event.key === "ArrowRight") {
                nextChapter();
            }

            if (event.key === "ArrowLeft") {
                previousChapter();
            }
        };

        window.addEventListener("keydown", handleKeyboard);

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };
    }, [
        started,
        chapter,
        transitioning,
        showLetter,
    ]);

    /*
    |--------------------------------------------------------------------------
    | MOBILE SWIPE
    |--------------------------------------------------------------------------
    */

    const handleTouchStart = (event) => {
        if (showLetter) return;

        const touch = event.touches[0];

        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    const handleTouchEnd = (event) => {
        if (showLetter) return;
        if (touchStartX.current === null) return;

        const touch = event.changedTouches[0];

        const deltaX =
            touch.clientX - touchStartX.current;

        const deltaY =
            touch.clientY - touchStartY.current;

        touchStartX.current = null;
        touchStartY.current = null;

        /*
         * Ignore vertical scrolling.
         */
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            return;
        }

        /*
         * Minimum swipe.
         */
        if (Math.abs(deltaX) < 60) return;

        if (deltaX < 0) {
            nextChapter();
        } else {
            previousChapter();
        }
    };

    /*
    |--------------------------------------------------------------------------
    | HERO
    |--------------------------------------------------------------------------
    */

    if (!started) {
        return (
            <main className="relative min-h-[100svh] overflow-hidden bg-[#FFF9F2] text-[#263238]">

                <audio
                    ref={audioRef}
                    src="/music/birthday.mp3"
                    loop
                    preload="auto"
                />

                <FloatingDecor />

                <div className="relative z-10 min-h-[100svh]">
                    <HeroSection onStart={startStory} />
                </div>

            </main>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | CURRENT CHAPTER
    |--------------------------------------------------------------------------
    */

    const CurrentChapter =
        chapters[chapter].component;

    /*
    |--------------------------------------------------------------------------
    | STORY
    |--------------------------------------------------------------------------
    */

    return (
        <main
            className="relative h-[100svh] overflow-hidden bg-[#FFF9F2] text-[#263238]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >

            {/* Music */}

            <audio
                ref={audioRef}
                src="/music/birthday.mp3"
                loop
                preload="auto"
            />

            {/* Background */}

            <FloatingDecor />

            {/* Music controls */}

            <MusicPlayer audioRef={audioRef} />

            {/* Chapter */}

            <div
                className={`
                    absolute
                    inset-0
                    z-10
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                        transitioning
                            ? "translate-y-5 scale-[0.985] opacity-0 blur-sm"
                            : "translate-y-0 scale-100 opacity-100 blur-0"
                    }
                `}
            >

                <div
                    ref={storyScrollRef}
                    className="h-full w-full overflow-y-auto overscroll-contain"
                >

                    <CurrentChapter
                        onNext={nextChapter}
                        onPrevious={previousChapter}
                    />

                </div>

            </div>

            {/* Chapter counter */}

            {!showLetter && (
                <div className="pointer-events-none fixed left-5 top-5 z-50 sm:left-8 sm:top-7">

                    <div className="rounded-full border border-white/80 bg-white/75 px-4 py-2 shadow-lg backdrop-blur-xl">

                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#858B91]">
                            Chapter
                        </p>

                        <p className="mt-0.5 text-sm font-black text-[#FF6B81]">
                            {String(chapter + 1).padStart(2, "0")}
                            <span className="mx-1 text-[#C5C8CB]">
                                /
                            </span>
                            {String(chapters.length).padStart(2, "0")}
                        </p>

                    </div>

                </div>
            )}

            {/* Chapter navigation */}

            {!showLetter && (
                <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">

                    <div className="flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-4 py-2.5 shadow-xl backdrop-blur-xl">

                        {chapters.map((item, index) => {
                            const active = index === chapter;
                            const completed = index < chapter;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        changeChapter(index)
                                    }
                                    disabled={transitioning}
                                    aria-label={`Open ${item.title}`}
                                    title={item.title}
                                    className="group flex h-4 items-center justify-center"
                                >
                                    <span
                                        className={`
                                            block
                                            rounded-full
                                            transition-all
                                            duration-500

                                            ${
                                                active
                                                    ? "h-1.5 w-7 bg-[#FF6B81]"
                                                    : completed
                                                    ? "h-1.5 w-1.5 bg-[#FF6B81]/50"
                                                    : "h-1.5 w-1.5 bg-[#D7DADD] group-hover:bg-[#FFB4C2]"
                                            }
                                        `}
                                    />
                                </button>
                            );
                        })}

                    </div>

                </div>
            )}

            {/* =====================================================
                BIRTHDAY ENVELOPE
               ===================================================== */}

            {showLetter && (
                <div className="absolute inset-0 z-[100] overflow-y-auto bg-[#fff5f6]">

                    <BirthdayLetter
                        open={showLetter}
                        onClose={closeLetterAndReturnHome}
                    />

                </div>
            )}

        </main>
    );
}

/*
|--------------------------------------------------------------------------
| PASSWORD PROTECTION
|--------------------------------------------------------------------------
*/

export default function Home() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    if (!isUnlocked) {
        return (
            <PasswordGate onUnlocked={() => setIsUnlocked(true)} />
        );
    }

    return <BirthdayExperience autoStart={true} />;
}

