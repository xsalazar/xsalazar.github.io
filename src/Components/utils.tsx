export function getColorForLanguage(language: string): string {
  switch (language) {
    case "TypeScript":
      return "#3178c6";
    case "HCL":
      return "#844FBA";
    case "JavaScript":
      return "#f1e05a";
    case "Go":
      return "#00ADD8";
    case "JSON":
      return "#292929";
    default:
      return "#aaaaaa";
  }
}
