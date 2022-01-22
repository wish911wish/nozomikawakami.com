import { GET } from "api/fetch";
interface IndexResponse {
  hasNextPage: boolean;
  results: {
    [propName: string]: any;
  }[];
}

export const getIndex = async (sheetName: string) => {
  const result: IndexResponse = await GET(
    `https://api.sheetson.com/v2/sheets/${sheetName}`,
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHEETSON_API_KEY}`,
      "X-Spreadsheet-Id": process.env.NEXT_PUBLIC_SHEETSON_SHEET_ID,
    }
  );

  return result.results;
};
