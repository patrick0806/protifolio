import { ProjectDetails } from "@/src/feature/projectDetails/projectDetails";
import { ProjectSections } from "@/src/feature/projectDetails/projectSections";
import { ProjectPageData, ProjectsPageStaticData } from "@/src/types/pageInfo";
import { fetchHygraphQuery } from "@/src/utils/fetchHygraphQuery";
import { Metadata } from "next";


type ProjectProps = {
  params: {
    slug: string
  }
}
const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )

  return data
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);
  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsQuery {
      projects(first: 100) {
        slug
      }
    }
    `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
  return projects.map(project => ({
    slug: project.slug
  }))
}

export async function generateMetadata({ params: { slug } }: ProjectProps): Promise<Metadata> {
  const { project } = await getProjectDetails(slug);
  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.pageThumbnail.url,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}