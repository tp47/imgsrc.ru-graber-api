import axios from "axios";
import { JSDOM } from "jsdom";

export interface ICategory {
  title: string;
  url: string;
}

const CATEGORIES_PAGE =
  process.env.CATEGORIES_PAGE ?? "http://imgsrc.ru/main/search.php";
const CATEGORIES_SELECTOR =
  process.env.CATEGORIES_SELECTOR ?? ".h100 > div:nth-of-type(1) div";

const categoriesModel = {
  getAll: async (): Promise<ICategory[]> => {
    const categories: ICategory[] = [];

    const categoriesResponse = await axios.get(CATEGORIES_PAGE);
    const dom = new JSDOM(categoriesResponse.data);

    //const categoriesHTML = dom.window.document.querySelectorAll(CATEGORIES_SELECTOR);
    for (const category of dom.window.document.querySelectorAll(
      CATEGORIES_SELECTOR
    )) {
      categories.push({
        title: category.textContent?.trim() ?? "Без названия",
        url: String().concat(
          "http://imgsrc.ru",
          category.querySelector("a")?.getAttribute("href") ?? "/"
        ),
      });
    }

    return categories;
  },
};

export default categoriesModel;
