import { defineQuery } from "next-sanity";

export const GLOBAL_SETTINGS_QUERY = defineQuery(`
  *[_type == "globalSettings"][0] {
    _id,
    "logo": logo.asset->url,
    headerMenuItems[] {
      label,
      sectionId
    },
    "footerLogo": footerLogo.asset->url,
    footerDescription,
    footerColumns[] {
      title,
      links[] {
        label,
        url
      }
    },
    copyrightText,
    socialLinks[] {
      platform,
      url,
      iconName
    },
    phoneNumber,
    whatsappNumber,
    contactEmail,
    address
  }
`);

export const HERO_QUERY = defineQuery(`
  *[_type == "hero"][0] {
    "carouselImages": carouselImages,
    label,
    title {
      line1,
      highlight1,
      connector,
      highlight2
    },
    description,
    buttons[] {
      label,
      url
    }
  }
`);

export const CORPORATE_SERVICES_QUERY = defineQuery(`
  *[_type == "corporateServices"][0] {
    title,
    description,
    services[] {
      title,
      description,
      iconName
    }
  }
`);

export const VALUE_PROPOSITION_QUERY = defineQuery(`
  *[_type == "valueProposition"][0] {
    heading,
    description
  }
`);

export const PSICO_WORK_PLUS_QUERY = defineQuery(`
  *[_type == "psicoWorkPlus"][0] {
    tagline,
    title,
    subtitle,
    description,
    button {
      label,
      url
    },
    "carouselImages": carouselImages[].asset->url
  }
`);

export const CLINICAL_SERVICES_QUERY = defineQuery(`
  *[_type == "clinicalServices"][0] {
    tagline,
    title {
      line1,
      highlight
    },
    description,
    services[] {
      title,
      description,
      iconName,
      "imageUrl": image.asset->url
    }
  }
`);

export const CONTACT_QUERY = defineQuery(`
  *[_type == "contact"][0] {
    tagline,
    title {
      line1,
      highlight
    },
    description
  }
`);
