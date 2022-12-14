import { useGlobalContext } from "../context";
import movieIcon from "/assets/icon-category-movie.svg";
import tvSeriesIcon from "/assets/icon-category-tv.svg";
import PlayButton from "./PlayButton";
import fullBookmark from "/assets/icon-bookmark-full.svg";
import emptyBookmark from "/assets/icon-bookmark-empty.svg";

const Card = ({ item, index }) => {
  const { handleBookmarkClick } = useGlobalContext();

  return (
    <div className="font-outfit h-max">
      <div>
        <div
          className={`w-full group relative bg-center bg-cover cursor-pointer h-[7rem] rounded-lg`}
          style={{ backgroundImage: `url('${item.thumbnail.regular.small}')` }}
        >
          <div
            className="h-5 w-5 absolute top-3 right-3 flex justify-center items-center rounded-full bg-slate-900 bg-opacity-25 p-1.5"
            onClick={() => handleBookmarkClick(item.title)}
          >
            {item.isBookmarked === true ? (
              <img src={fullBookmark} alt='Bookmark full icon' />
            ) : (
              <img src={emptyBookmark} alt='Bookmark empty icon' />
            )}
          </div>
          <PlayButton />
        </div>
      </div>
      <div className="py-1 text-[0.65rem] text-slate-500 flex items-center gap-2">
        <div>{item.year}</div>
        <div className="border border-gray-400 align-middle rounded-full h-0.5 w-0.5"></div>
        <div className="flex gap-1 h-4 items-center">
          {item.category === "Movie" ? (
            <img className="h-3" src={movieIcon} alt='Movie icon' />
          ) : (
            <img className="h-3.5" src={tvSeriesIcon} alt='TV series icon' />
          )}{" "}
          {item.category}
        </div>
        <div className="border border-gray-400 align-middle rounded-full h-0.5 w-0.5"></div>
        <div>{item.rating}</div>
      </div>
      <div className="text-xs">{item.title}</div>
    </div>
  );
};

export default Card;
