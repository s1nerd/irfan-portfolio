import profile from "@/data/profile/profile";

const contact = {
  availability: "Available for Full-time & Freelance",

  socials: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/s1nerd",
    },

    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/irfan-maulana-401990289",
    },

    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/irfanm01",
    },
  ],

  get email() {
    return profile.email;
  },

  get phone() {
    return profile.phone;
  },

  get location() {
    return profile.location;
  },
};

export default contact;
