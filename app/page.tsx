import Image from "next/image";
import Link from "next/link";
import { projects, profile, recognitions, researchAreas, stats } from "@/lib/site-data";

export default function Home() {
  const assetPath = "/sanjaykumarsingh";

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-white">
        <Image
          src={`${assetPath}/images/campus-hero.png`}
          alt="Academic campus building"
          fill
          priority
          className="object-cover opacity-450 "
        />
        <div className="absolute inset-0  from-white via-white/75 to-white/20" />
        <div className="page-band relative flex min-h-[78vh] items-center py-14">
          <div className="max-w-xl rounded-md border border-line bg-white p-8 shadow-soft">
            <div className="mb-7 flex items-center gap-5">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-md border border-line bg-paper shadow-sm sm:h-32 sm:w-32">
                <Image
                  src={`${assetPath}/images/sk-sir.png`}
                  alt="Prof. Sanjay Kumar Singh"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="section-kicker">IIT (BHU) Varanasi</p>
                <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
                  {profile.name}
                </h1>
              </div>
            </div>
            <p className="mt-5 text-xl leading-9 text-ink/85">
              I am a <strong>{profile.title}</strong> in the <strong>{profile.department}</strong> at{" "}
              <strong>{profile.institution}</strong>.
            </p>
            <p className="mt-5 text-lg leading-8 text-ink/75">{profile.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/research" className="rounded-sm bg-ink px-5 py-3 font-bold text-white hover:bg-accent">
                See research
              </Link>
              <a href={`mailto:${profile.email}`} className="rounded-sm border border-ink px-5 py-3 font-bold text-ink hover:bg-white">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-band py-20 text-center">
        <h2 className="section-title">Research Overview</h2>
        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-[1.85] text-ink/85">{profile.focus}</p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="content-card text-left">
              <p className="text-4xl font-black text-accent">{item.value}</p>
              <p className="mt-2 font-bold text-ink/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-band">
          <h2 className="section-title text-center">Highlighted Projects</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="content-card">
                <p className="section-kicker">{project.agency} / {project.duration}</p>
                <h3 className="mt-4 text-2xl font-black text-ink">{project.title}</h3>
                <p className="mt-5 text-lg text-ink/70">{project.role} | {project.cost}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band grid gap-8 py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="section-kicker">Focus Areas</p>
          <h2 className="mt-3 section-title">Research Themes</h2>
        </div>
        <div className="grid gap-5">
          {researchAreas.map((area) => (
            <article key={area.title} className="content-card">
              <h3 className="text-2xl font-black">{area.title}</h3>
              <p className="mt-3 text-lg leading-8 text-ink/75">{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="page-band">
          <h2 className="text-3xl font-black">Recognition</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {recognitions.map((item) => (
              <p key={item} className="rounded-md border border-white/15 bg-white/5 p-5 text-lg leading-8">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
