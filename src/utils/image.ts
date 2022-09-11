export async function getBase64ImageUrl(
  imageUrl: string
): Promise<string | undefined> {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString('base64');
  return `data:image/webp;base64,${data}`;
}
