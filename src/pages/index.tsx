import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSocial } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchExperiences } from "../../utils/fetchExperiences";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <main className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/25 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <div>
        {/* Header */}
        <Header socials={socials} />
        {/* Hero Section */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        {/* About Section */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* Experience Section */}
        <section id="work-experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        {/* Skills Section */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        {/* Projects Section */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        {/* Contact Section */}
        <section id="contact" className="snap-start">
          <ContactMe pageInfo={pageInfo} />
        </section>

        <footer className="sticky bottom-5">
          <div className="flex items-center justify-center">
            <Link href={"/#hero"}>
              <img
                className="h-16 w-16 rounded-full object-cover filter grayscale hover:grayscale-0"
                src="https://i.imgur.com/YzFOx6D.gif"
                alt=""
              />
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 600,
  };
};
