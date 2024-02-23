import { FeaturedProjects } from "../feature/featuredProjects/featuredProjects";
import { HeroSection } from "../feature/heroSection/heroSection";
import { KnowTechs } from "../feature/knowTechs/knowTechs";
import { WorkExperience } from "../feature/workExperience/workExperience";
import { HomePageData } from "../types/pageInfo";
import { fetchHygraphQuery } from "../utils/fetchHygraphQuery";

const getPageData = async (): Promise<HomePageData> => {
  const query = /*`
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `*/`
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24,
  )
}


export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection data={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <FeaturedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}

