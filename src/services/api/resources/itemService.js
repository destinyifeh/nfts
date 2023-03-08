import requester from "../requester";
export default class ItemService {
  getItems() {
    return requester.get(
      "/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false",
      {
        headers: {
          accept: "application/json",
          Authorization: "70ff5b3e-4839-4c29-9602-9696bf3b6a89",
        },
      }
    );
  }
}
