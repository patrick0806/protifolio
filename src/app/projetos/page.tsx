import { PageIntroduction } from "@/src/feature/pageIntroduction/pageIntroduction";
import { ProjectList } from "@/src/feature/projectList/projectList";
import { ProjectsPageData } from "@/src/types/pageInfo";
import { fetchHygraphQuery } from "@/src/utils/fetchHygraphQuery";

export const metadata = {
    title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
      query ProjectsQuery {
        projects {
          shortDescription
          slug
          title
          thumbnail {
            url
          }
          technologies {
            name
          }
        }
      }
      `

    return fetchHygraphQuery(
        query,
        1000 * 60 * 60 * 24, // 1 day
    )
}

export default async function Projetos() {
    const { projects } = await getPageData()
    return (
        <>
            <PageIntroduction />
            <ProjectList projects={projects} />
        </>
    )
}