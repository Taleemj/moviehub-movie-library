import axios from "axios";
import * as cheerio from "cheerio";

export default async function getMovies(req, res) {
  if (req.method === "POST") {
    const thetitle = req.body.title;
    const results = [];
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${thetitle}/1/99/0`
      );

      const $ = cheerio.load(res.data);
      const downloadList = $("tbody tr");

      downloadList.each(function () {
        const thename = $(this).find("td a").text();
        const link = $(this).find("td nobr a:first").attr("href");
        const size = $(this).find("[align=right]:first").text();

        results.push({ thename, link, size });
      });
    } catch (error) {
      console.error(error);
    }

    results.pop();
    res.status(200).json({ results });
  } else {
    res.status(405).end(); // Method not allowed
  }
}
