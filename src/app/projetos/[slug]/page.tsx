import { ProjectDetails } from "@/src/feature/projectDetails/projectDetails";
import { ProjectSections } from "@/src/feature/projectDetails/projectSections";
import { ProjectPageData } from "@/src/types/pageInfo";
import { fetchHygraphQuery } from "@/src/utils/fetchHygraphQuery";


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