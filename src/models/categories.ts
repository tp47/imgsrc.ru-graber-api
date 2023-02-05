import axios from "axios";
import { JSDOM } from "jsdom";
import { ICategory, IAlbum } from "../utils/types";
import {
  CATEGORIES_PAGE,
  CATEGORIES_SELECTOR,
  PARSING_HOST,
  SEARCHING_PAGE,
  NO_PASSWORD_PARAMETER,
  PAGE_PARAMETER,
  NO_LOGO_IMAGE,
  ALBUMS_SELECTOR,
  ALBUM_PREVIEW_SELECTOR,
  ALBUM_TITLE_SELECTOR,
  ALBUM_CATEGORY_SELECTOR,
  ALBUM_AMOUNT_SELECTOR,
  ALBUM_VIEWS_SELECTOR,
  ALBUM_LIKES_SELECTOR,
  ALBUM_COMMENTS_SELECTOR,
  ALBUM_DATE_SELECTOR,
} from "../utils/consts";
import { formatTitle } from "../utils/helpers";

const categoriesModel = {
  getAll: async (): Promise<ICategory[]> => {
    const categories: ICategory[] = [];

    const categoriesResponse = await axios.get(CATEGORIES_PAGE);
    const dom = new JSDOM(categoriesResponse.data);

    for (const category of dom.window.document.querySelectorAll(
      CATEGORIES_SELECTOR
    )) {
      const categoryId = parseInt(
        (category.querySelector("a")?.getAttribute("href") ?? "").split("/")[2]
      );
      categories.push({
        id: categoryId ?? 1,
        title: category.textContent?.trim() ?? "No title",
      });
    }

    return categories;
  },
  getOne: async (categoryId = 1, page = 1, likes = 0): Promise<IAlbum[]> => {
    if (isNaN(categoryId) || isNaN(page) || isNaN(likes)) {
      throw new Error("Arguments should not be NaN");
    }
    const albums: IAlbum[] = [];
    const pageParam = String().concat(PAGE_PARAMETER, String(page));

    const albumsResponse = await axios.get(SEARCHING_PAGE, {
      params: {
        cat: categoryId,
        page: page,
        nopass: "on",
      },
    });
    const dom = new JSDOM(albumsResponse.data);

    for (const album of dom.window.document.querySelectorAll(ALBUMS_SELECTOR)) {
      const albumLikes =
        Number(album.querySelector(ALBUM_LIKES_SELECTOR)?.textContent) ?? 0;

      if (albumLikes >= likes) {
        if (album.querySelector(ALBUM_TITLE_SELECTOR)?.textContent === undefined) {
          continue;
        }
        albums.push({
          id:
            parseInt(
              String(
                album
                  .querySelector(ALBUM_TITLE_SELECTOR)
                  ?.getAttribute("href")
                  ?.split("/")[2]
                  .split(".")[0]
              )
            ) || 1,
          author:
            album
              .querySelector(ALBUM_TITLE_SELECTOR)
              ?.getAttribute("href")
              ?.split("/")[1] || "a",
          title:
            formatTitle(
              album.querySelector(ALBUM_TITLE_SELECTOR)?.textContent
            ) || "No title",
          preview:
            album.querySelector(ALBUM_PREVIEW_SELECTOR)?.getAttribute("src") ??
            NO_LOGO_IMAGE,
          category:
            album.querySelector(ALBUM_CATEGORY_SELECTOR)?.textContent ||
            "No category",
          amount:
            Number(album.querySelector(ALBUM_AMOUNT_SELECTOR)?.textContent) ||
            0,
          views: album.querySelector(ALBUM_VIEWS_SELECTOR)?.textContent || "0",
          likes: albumLikes,
          comments:
            Number(album.querySelector(ALBUM_COMMENTS_SELECTOR)?.textContent) ||
            0,
          date: new Date(),
        });
      }
    }

    return albums;
  },
};

export default categoriesModel;
