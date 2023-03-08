export default function Modal({ detail }) {
  return (
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              NFT Detail
            </h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Name: {detail?.name}</p>
            <p>Symbol: {detail?.symbol}</p>
            <p>Type: {detail?.type}</p>

            <p>Description: {detail.metadata?.description}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href="https://www.BoredApeYachtClub.com"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" class="btn btn-primary">
                Buy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
