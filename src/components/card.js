const Card = ({ item, idx }) => {
  return (
    <>
      <div
        className="card"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalLong"
        key={idx}
      >
        <img src={item?.cached_file_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Chain: {item.chain}</p>
          <p className="card-text">Creator_address: {item.creator_address}</p>
          <p className="card-text">Token_id: {item.token_id}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
