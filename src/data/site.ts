export interface OfficeDetails {
  city: string;
  address: readonly string[];
  email: string;
  recruitmentEmail: string;
  newBusinessContact: string;
  newBusinessPhone: string;
  newBusinessEmail: string;
  generalPhone: string;
  coordinates: string;
}

export const siteDetails = {
  businessEmail: "hello@theoglas.com",
  socials: {
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    behance: "https://www.behance.net",
  },
  offices: {
    dubai: {
      city: "Dubai",
      address: ["Floor 26, Sheikh Rashid Tower", "World Trade Centre", "Dubai, UAE"],
      email: "bd@oglasglobal.com",
      recruitmentEmail: "career.theoglas@gmail.com",
      newBusinessContact: "Arshad",
      newBusinessPhone: "+971 56 787 0153",
      newBusinessEmail: "arshad@oglasglobal.com",
      generalPhone: "+971 56 787 0153",
      coordinates: "25.22762° N, 55.28879° E",
    },
    india: {
      city: "India",
      address: ["2703 ,7th Floor, Tower 2", "HiLITE Business Park", "Calicut, India"],
      email: "admn.theoglas@gmail.com",
      recruitmentEmail: "career.theoglas@gmail.com",
      newBusinessContact: "Faheem Razi",
      newBusinessPhone: "+91 79949 40737",
      newBusinessEmail: "rz.theoglas@gmail.com",
      generalPhone: "+91 623 89 27770",
      coordinates: "11.2481° N, 75.8348° E",
    },
  } satisfies Record<string, OfficeDetails>,
} as const;
