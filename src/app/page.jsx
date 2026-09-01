"use client";

import { useEffect, useRef, useState } from "react";

// Existing components
import FloatingDecor from "@/components/FloatingDecor";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import BirthdayLetter from "@/components/BirthdayLetter";

// Chapter components
import WelcomeChapter from "@/components/chapters/WelcomeChapter";
import SocialStudiesChapter from "@/components/chapters/SocialStudiesChapter";
import PantIncidentChapter from "@/components/chapters/PantIncidentChapter";
import LoyalFriendChapter from "@/components/chapters/LoyalFriendChapter";
import ExamChapter from "@/components/chapters/ExamChapter";
import CollegeChapter from "@/components/chapters/CollegeChapter";
import ForgottenBirthdayChapter from "@/components/chapters/ForgottenBirthdayChapter";
import DifficultYearsChapter from "@/components/chapters/DifficultYearsChapter";
import FinalBirthdayChapter from "@/components/chapters/FinalBirthdayChapter";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  const audioRef = useRef(null);
  const storyScrollRef = useRef(null);

  /*
  |--------------------------------------------------------------------------
  | ALL CHAPTERS
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

  /*
  |--------------------------------------------------------------------------
  | START THE STORY
  |--------------------------------------------------------------------------
  |
  | Nothing automatically starts.
  |
  | Music begins ONLY after the user clicks
  | "Begin Your Story".
  |
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

    /*
     * Cinematic exit
     */
    setTimeout(() => {
      setChapter(nextChapter);

      /*
       * Allow the new chapter to animate in.
       */
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

  /*
  |--------------------------------------------------------------------------
  | NEXT CHAPTER
  |--------------------------------------------------------------------------
  */

  const nextChapter = () => {
    if (chapter < chapters.length - 1) {
      changeChapter(chapter + 1);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | PREVIOUS CHAPTER
  |--------------------------------------------------------------------------
  */

  const previousChapter = () => {
    if (chapter > 0) {
      changeChapter(chapter - 1);
    }
  };

  const isLastChapter = chapter === chapters.length - 1;

  /*
  |--------------------------------------------------------------------------
  | AUTO-PROGRESS STORY
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!started || letterOpen || transitioning || isLastChapter) return;

    const timer = setTimeout(() => {
      nextChapter();
    }, 10000);

    return () => clearTimeout(timer);
  }, [started, chapter, letterOpen, transitioning, isLastChapter]);

  useEffect(() => {
    if (!started || !isLastChapter || letterOpen || transitioning) return;

    const returnTimer = setTimeout(() => {
      setStarted(false);
      setChapter(0);
      setTransitioning(false);
      setLetterOpen(false);
    }, 10000);

    return () => clearTimeout(returnTimer);
  }, [started, isLastChapter, letterOpen, transitioning]);

  /*
  |--------------------------------------------------------------------------
  | KEYBOARD NAVIGATION
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!started) return;

    const handleKeyboard = (event) => {
      /*
       * Don't navigate while letter is open.
       */
      if (letterOpen) return;

      if (event.key === "ArrowRight") {
        nextChapter();
      }

      if (event.key === "ArrowLeft") {
        previousChapter();
      }

      /*
       * Escape closes birthday letter.
       */
      if (event.key === "Escape") {
        setLetterOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [started, chapter, transitioning, letterOpen]);

  /*
  |--------------------------------------------------------------------------
  | MOBILE SWIPE SUPPORT
  |--------------------------------------------------------------------------
  */

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    /*
     * Reset
     */
    touchStartX.current = null;
    touchStartY.current = null;

    /*
     * Ignore vertical scrolling.
     */
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    /*
     * Minimum swipe distance.
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
  | HERO SCREEN
  |--------------------------------------------------------------------------
  |
  | This is the ONLY screen visible when website opens.
  |
  */

  if (!started) {
    return (
      <main className="relative min-h-[100svh] overflow-hidden bg-[#FFF9F2] text-[#263238]">

        {/* Music is loaded but NOT played automatically */}
        <audio
          ref={audioRef}
          src="/music/birthday.mp3"
          loop
          preload="auto"
        />

        {/* Decorative background */}
        <FloatingDecor />

        {/* Hero */}
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

  const CurrentChapter = chapters[chapter].component;

  /*
  |--------------------------------------------------------------------------
  | MAIN STORY
  |--------------------------------------------------------------------------
  */

  return (
    <main
      className="relative h-[100svh] overflow-hidden bg-[#FFF9F2] text-[#263238]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* =========================================================
          AUDIO
         ========================================================= */}

      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
      />

      {/* =========================================================
          BACKGROUND DECORATION
         ========================================================= */}

      <FloatingDecor />

      {/* =========================================================
          MUSIC PLAYER
         ========================================================= */}

      <MusicPlayer audioRef={audioRef} />

      {/* =========================================================
          CURRENT CHAPTER
         ========================================================= */}

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
            onOpenLetter={() => setLetterOpen(true)}
          />

        </div>
      </div>

      {/* =========================================================
          TOP CHAPTER COUNTER
         ========================================================= */}

      <div className="pointer-events-none fixed left-5 top-5 z-50 sm:left-8 sm:top-7">

        <div
          className="
            rounded-full
            border
            border-white/80
            bg-white/75
            px-4
            py-2
            shadow-lg
            shadow-pink-100/20
            backdrop-blur-xl
          "
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#858B91]">
            Chapter
          </p>

          <p className="mt-0.5 text-sm font-black text-[#FF6B81]">
            {String(chapter + 1).padStart(2, "0")}
            <span className="mx-1 text-[#C5C8CB]">/</span>
            {String(chapters.length).padStart(2, "0")}
          </p>
        </div>

      </div>

      {/* =========================================================
          BOTTOM CHAPTER NAVIGATION
         ========================================================= */}

      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">

        <div
          className="
            flex
            items-center
            gap-2

            rounded-full
            border
            border-white/90
            bg-white/80

            px-4
            py-2.5

            shadow-xl
            shadow-black/5

            backdrop-blur-xl
          "
        >

          {chapters.map((item, index) => {
            const active = index === chapter;
            const completed = index < chapter;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => changeChapter(index)}
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

      {/* =========================================================
          MOBILE SWIPE HINT
         ========================================================= */}

      {chapter === 0 && (
        <div className="pointer-events-none fixed bottom-20 left-1/2 z-40 hidden -translate-x-1/2 text-center opacity-50 md:hidden">

          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#858B91]">
            Swipe to explore
          </p>

        </div>
      )}

      {/* =========================================================
          BIRTHDAY LETTER
         ========================================================= */}

      <BirthdayLetter
        open={letterOpen}
        onClose={() => setLetterOpen(false)}
      />

    </main>
  );
}