import { PortableTextBlock } from "sanity";

export type ProfileType ={
    _id: string;
    fullName: string;
    headline: string;
    profileImage: {
        alt: string;
        image: string;
    };
    shortBio: string;
    location: string;
    fullBio: PortableTextBlock[];
    email: string;
    resumeURL: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
        twitch: string;
    };
    skills: string[];
}


export type JobType ={
    _id:string;
    name:string;
    jobTitle:string;
    logo:string;
    url:string;
    description:string;
    startDate:Date;
    endDate:Date;
}

export type ProjectType = {
    _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
}