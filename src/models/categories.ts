import axios from "axios";
import { JSDOM } from "jsdom";
import { ICategory } from "../utils/types";
import { CATEGORIES_PAGE, CATEGORIES_SELECTOR, PARSING_HOST } from "../utils/consts";

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
          PARSING_HOST,
          category.querySelector("a")?.getAttribute("href") ?? "/"
        ),
      });
    }

    return categories;
  },
};

export default categoriesModel;
