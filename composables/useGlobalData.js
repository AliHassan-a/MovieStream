import Tokyo from "~/assets/card/TokyoLrg.png";
import Moonfall from "~/assets/card/MoonfallLrg.png";
import LifeInParis from "~/assets/card/ParisLrg.png";
import HouseOfGucci from "~/assets/card/HouseOfWealth.png";
import BulletScience from "~/assets/card/BulletScience.png";
import SkyStars from "~/assets/card/skyStars.png";
import Couple from "~/assets/card/Couple.png";
import Skateboard from "~/assets/card/Skateboard.png";

const trending = [
  {
    backgroundImg: Tokyo,
    favourite: true,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
    rattings: "8.0",
    duration: "2h 38m",
    overView:
      "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
  {
    backgroundImg: Moonfall,
    favourite: true,
    title: "Moonfall",
    year: "2022",
    type: "Sci-fi",
    rattings: "7.0",
    duration: "2h 38m",
    overView:
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
  {
    backgroundImg: LifeInParis,
    favourite: true,
    title: "Life in Paris",
    year: "2023",
    type: "Documentary series",
    rattings: "7.5",
    duration: "2h 38m",
    overView:
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
  {
    backgroundImg: HouseOfGucci,
    favourite: true,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    rattings: "7.5",
    duration: "2h 38m",
    overView:
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
  {
    backgroundImg: HouseOfGucci,
    favourite: true,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    rattings: "7.5",
    duration: "2h 38m",
    overView:
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
  {
    backgroundImg: HouseOfGucci,
    favourite: true,
    title: "House of Gucci",
    year: "2021",
    type: "Drama",
    rattings: "7.5",
    duration: "2h 38m",
    overView:
    "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
  },
];
const continueWatching = [
  {
    backgroundImg: Couple,
    favourite: true,
    title: "Lights in the city",
    year: "2022",
    type: "Action Comedy",
  },
  {
    backgroundImg: Skateboard,
    favourite: true,
    title: "Here of fame",
    year: "2022",
    type: "Action Comedy",
  },
  {
    backgroundImg: SkyStars,
    favourite: true,
    title: "Sky Stars",
    year: "2022",
    type: "Action Comedy",
  },
  
];
const favourites = [
  {
    backgroundImg: BulletScience,
    favourite: true,
    title: "Bullet Science",
    year: "2022",
    type: "Action Comedy",
  },
  {
    backgroundImg: HouseOfGucci,
    favourite: true,
    title: "Tokyo Train",
    year: "2022",
    type: "Action Comedy",
  },
];
export const useTrendingData = () => {
  return useState("trendingData", () => trending);
};
export const useContinueWatching = () => {
  return useState("continueWatching", () => continueWatching);
};
export const useFavourites = () => {
  return useState("favourites", () => favourites);
};

const isOpen = false;
export const useIsOpen = () =>{
  return useState("isOpen", ()=>isOpen)
}