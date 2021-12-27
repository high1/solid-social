export function constructTwitchURL(
  twitchId?: string,
  channel?: string,
  collection?: string,
  baseUrl?: string
): string {
  const sourceBlocks = [baseUrl];

  if (twitchId) {
    sourceBlocks.push(`&video=v${twitchId}`);
  } else if (channel) {
    sourceBlocks.push(`&channel=${channel}`);
  } else if (collection) {
    sourceBlocks.push(`&collection=${collection}`);
  }

  return sourceBlocks.join('');
}
