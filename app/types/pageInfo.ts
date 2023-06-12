import { KnownTech } from "./projects"
import type { RichTextContent } from '@graphcms/rich-text-types'
import { workExperiences } from "./workExperiences";

export type Social ={
    url: string;
    iconSvg:string
}

export type HomePageInfo={
    introdution:{
        raw:RichTextContent
    }, 
    tecnologies: KnownTech[]
    profilePicture: {
        url:string
    },
    socials: Social[],
    knownTechs:KnownTech[]
}


export type HomePageData={
    page:HomePageInfo,
    workExperiences: workExperiences[]
}