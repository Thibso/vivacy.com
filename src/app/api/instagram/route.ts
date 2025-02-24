// pages/api/instagram.js
export async function GET() {
  try {
    // const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Stocker en variable d'environnement
    const accessToken =
      "IGAA5uNz9AkLJBZAE1PbGVSOFhXWV8wcUFQOUVSbkk5QWcxNUl5VGUxXzNseU5zREpkZAlBHWEZA5TEk4cjBMd1UyaDYydERVZA0hZAM1NlTnljUVJ3UlJpTkpBNEp2cjVFUi01WVlic0JTdnViNmNrUWlTaW91YUNvVGRaQUVSTHVBNAZDZD";
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=4&access_token=${accessToken}`;

    const response = await fetch(url);
    const data = await response.json();

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
