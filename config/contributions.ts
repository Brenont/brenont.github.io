export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "plopjs-talk",
    contibutionDescription:
      "Presentation - PlopJS to generate files, improving DX and avoiding waste of time on repetitive tasks",
    repoOwner: "Breno Tavares",
    link: "https://github.com/Brenont/plopjs-talk",
  },
  {
    repo: "react-native-mask-text",
    contibutionDescription:
      "Fixing error of controlled inputs value not updating",
    repoOwner: "akinncar",
    link: "https://github.com/akinncar/react-native-mask-text/pull/57",
  },
  {
    repo: "react-native-mask-text",
    contibutionDescription:
      "Improve open-source library documentation",
    repoOwner: "akinncar",
    link: "https://github.com/akinncar/react-native-mask-text/pull/42",
  }
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
