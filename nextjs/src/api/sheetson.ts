import { GET } from "api/fetch";
interface IndexResponse {
  hasNextPage: boolean;
  results: {
    [propName: string]: any;
  }[];
}

export const getIndex = async (sheetName: string) => {
  const result: IndexResponse = await GET();

  return result.results;
};
