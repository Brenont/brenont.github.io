import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@brenont",
    icon: Icons.gitHub,
    link: "https://github.com/brenont",
  },
  {
    name: "LinkedIn",
    username: "Breno Tavares",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/breno-tavares5/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "brenontavares",
    icon: Icons.gmail,
    link: "mailto:brenontavares@gmail.com",
  },
];
