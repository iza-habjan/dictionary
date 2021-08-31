import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <hr></hr>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photorapher}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <hr></hr>
      </section>
    );
  } else {
    return null;
  }
}
