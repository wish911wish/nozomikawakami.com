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
      Authorization:
        "Bearer clNqk2fgkLko6Wu1dPIASEonLPGfnZtw2MnfRuPMuTv2swRWbMZ9YzhvmQn4Sw",
      "X-Spreadsheet-Id": "1pSCDFezahTavrXiTOrI5vYmWKPK_s9JPPvh7OUJtK0k",
    }
  );

  return result.results;
};
