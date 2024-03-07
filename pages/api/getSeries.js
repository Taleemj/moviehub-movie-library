import axios from "axios";
import * as cheerio from "cheerio";

export default async function getSeries(req, res) {
  if (req.method === "POST") {
    const thetitle = req.body.title;
    const results = [];
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL2}/${thetitle}`);
      const $ = cheerio.load(response.data);
      const thelist = $("tbody tr[name=hover]");

      thelist.each(function () {
        const thename = $(this).find("td a.epinfo").text();
        const downloadLink = $(this).find("td[align=center] a.magnet").attr("href");
        const size = $(this).find(`td[align=center]`).eq(2).text();

        results.push({ thename, downloadLink, size });
      });
    } catch (error) {
      console.error(error);
    }
    res.status(200).json({ results });
  } else {
    res.status(405).end();
  }
}
