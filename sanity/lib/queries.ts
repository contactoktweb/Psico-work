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
    "carouselImages": carouselImages[].asset->url,
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
