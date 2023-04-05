export default function Modal({ detail }) {
  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              NFT Detail
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Name: {detail?.name}</p>
            <p>Symbol: {detail?.symbol}</p>
            <p>Type: {detail?.type}</p>

            <p>Description: {detail.metadata?.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href="https://www.BoredApeYachtClub.com"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-primary">
                Buy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
