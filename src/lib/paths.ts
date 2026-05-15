const basePath = process.env.GITHUB_PAGES === "true" ? "/cci_web" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
