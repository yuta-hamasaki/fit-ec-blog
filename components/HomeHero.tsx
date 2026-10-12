import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="noise relative flex min-h-[850px] items-end overflow-hidden px-5 pb-24 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,#5b1515_0%,#211313_26%,#121212_58%)]" />
      <div className="absolute right-[-5%] top-24 select-none font-display text-[32vw] font-bold leading-none text-white/[.025]">B</div>
      <div className="absolute right-[10%] top-[26%] hidden h-[430px] w-[340px] -rotate-6 rounded-[48%_52%_30%_20%] border border-white/10 bg-gradient-to-br from-accent/70 via-red-950/30 to-transparent shadow-glow lg:block">
        <div className="absolute inset-10 rotate-6 rounded-full border-[20px] border-white/5" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="mb-6 flex items-center gap-3 text-xs font-black tracking-[.32em] text-accent">
          <span className="h-px w-10 bg-accent" /> MARTIAL ARTS FITNESS
        </p>
        <h1 className="font-display text-[16vw] font-bold uppercase leading-[.79] tracking-[-.055em] sm:text-8xl lg:text-[9.8rem]">
          FIGHT<br /><span className="outline-text">YOUR LIMITS.</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-bold">打って、蹴って、<span className="text-accent">理想の自分へ。</span></p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">ジムに行かなくても、本気の汗はかける。今日から始める、あなたのための格闘技フィットネス。</p>
          </div>
          <Link href="/programs" className="group flex w-fit items-center gap-6 bg-accent px-7 py-5 text-sm font-black shadow-glow hover:bg-white hover:text-ink">
            無料でトレーニングを始める <ArrowRight className="group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
