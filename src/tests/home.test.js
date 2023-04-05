import { render, screen } from "@testing-library/react";
import React from "react";
import HomePage from "../scenes/home";

// jest.mock("../mixins/api.js", () => ({
//   itemService: {
//     getItems: jest.fn(() =>
//       Promise.resolve({ data: { nfts: [], contract: "" } })
//     ),
//   },
// }));

const unmockedFetch = global.fetch;

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("HomePage", () => {
  let fetchItem;
  let data;
  beforeAll(() => {
    fetchItem = jest.fn();
    data = {
      nft: [
        {
          chain: "ethereum",
          contract_address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
          token_id: "0",

          cached_file_url:
            "https://storage.googleapis.com/sentinel-nft/raw-assets/e45a1f6f4ce083f0718409066b9dce1c7003c72c514e8552cf33515ac103bcea.png",
          creator_address: "0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03",
          owner: null,
        },
      ],
    };
  });

  it("renders the banner with the title and description", () => {
    render(<HomePage />);
    expect(screen.getByText("NFT Market Place")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your number one NFT market place, get your NFTs right here!"
      )
    ).toBeInTheDocument();
  });

  it("renders the cards with the fetched items", async () => {
    render(<HomePage />);

    expect(screen.getByText("ethereum")).toBeInTheDocument();
  });

  it('renders "No NFT Available" when there are no items', async () => {
    render(<HomePage />);

    expect(screen.getByText("No NFT Available")).toBeInTheDocument();
  });
});
