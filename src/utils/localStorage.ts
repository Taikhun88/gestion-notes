// Pour le thème
export const saveThemeToStorage = (theme: string) => {
  localStorage.setItem('theme', theme)
}

export const loadThemeFromStorage = () => {
  return localStorage.getItem('theme')
}
