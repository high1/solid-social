export function getPadding(aspectRatio: string): { paddingTop: string } {
  const regExp = /^([1-9]\d*):([1-9]\d*)$/;
  const [, width, height] = regExp.exec(aspectRatio) || ['', '1', '1'];

  return {
    paddingTop: `${(100 * Number.parseInt(height, 10)) / Number.parseInt(width, 10)}%`,
  };
}
