export const PARSING_HOST = process.env.PARSING_HOST ?? "http://imgsrc.ru";

export const PORT = process.env.PORT ?? "8080";

export const HOST = process.env.HOST ?? "localhost";

export const SEARCHING_PAGE =
  process.env.SEARCHING_PAGE ?? "http://imgsrc.ru/main/search.php";

export const NO_LOGO_IMAGE =
  process.env.NO_LOGO_IMAGE ?? "http://imgsrc.ru/images/nologo.jpg";

export const CATEGORIES_PAGE =
  process.env.CATEGORIES_PAGE ?? "http://imgsrc.ru/main/search.php";

export const CATEGORIES_SELECTOR =
  process.env.CATEGORIES_SELECTOR ?? ".h100 > div:nth-of-type(1) div";

export const NO_PASSWORD_PARAMETER =
  process.env.NO_PASSWORD_PARAMETER ?? "nopass=on";

export const PAGE_PARAMETER = process.env.PAGE_PARAMETER ?? "page=";

export const ALBUMS_SELECTOR = process.env.ALBUMS_SELECTOR ?? "table tbody tr";

export const ALBUM_PREVIEW_SELECTOR =
  process.env.ALBUM_PREVIEW_SELECTOR ?? "td:nth-of-type(1) img";

export const ALBUM_TITLE_SELECTOR =
  process.env.ALBUM_TITLE_SELECTOR ?? "td:nth-of-type(1) a";

export const ALBUM_CATEGORY_SELECTOR =
  process.env.ALBUM_CATEGORY_SELECTOR ?? "td:nth-of-type(2)";

export const ALBUM_AMOUNT_SELECTOR =
  process.env.ALBUM_AMOUNT_SELECTOR ?? "td:nth-of-type(3)";

export const ALBUM_VIEWS_SELECTOR =
  process.env.ALBUM_VIEWS_SELECTOR ?? "td:nth-of-type(4)";

export const ALBUM_LIKES_SELECTOR =
  process.env.ALBUM_LIKES_SELECTOR ?? "td:nth-of-type(5)";

export const ALBUM_COMMENTS_SELECTOR =
  process.env.ALBUM_COMMENTS_SELECTOR ?? "td:nth-of-type(6)";

export const ALBUM_DATE_SELECTOR =
  process.env.ALBUM_DATE_SELECTOR ?? "td:nth-of-type(7)";
