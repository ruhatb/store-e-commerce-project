export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = (roles) => ({ type: SET_ROLES, roles });
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});
export const setTheme = (theme) => ({ type: SET_THEME, theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, language });
