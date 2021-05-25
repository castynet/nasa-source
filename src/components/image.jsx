import React from "react";
import "./css/image.css";
import Embed from "./embed";

class imageDay extends React.Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=bjuVUgfTLhIEoL8tiVwkom7V20gV7fquf0cNagKg";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ data: data });
  }

  render() {
    return (
      <>
        {!this.state.data ? (
          <div className="loading">
            <div className="container">
              <p className="head-er">castynet@user-PC MINGW64 ~</p>
              <p className="One">$ Contacting the NASA ISS Server...</p>
              <p className="Two">$ Redirected to Area 51 US-G6 Database!</p>
              <p className="Three">$ Establishing connection to Area 51...</p>
              <p className="Four">| Success!</p>
              <p className="Five">$ Recieving Data...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="imageCard">
              {this.state.data.media_type === "video" ? (
                <Embed url={this.state.data.url} />
              ) : (
                <img
                  className="imageCard"
                  src={this.state.data.url}
                  alt="NASA's pic of the day"
                />
              )}
            </div>

            <div className="detailsCard">
              <h1 className="title">
                IMAGE OF THE DAY:
                <br />
                {this.state.data.title}
              </h1>
              <p>NASA's image of the day: {this.state.data.date}</p>
              {!this.state.data.copyright ? (
                <p>By Nasa</p>
              ) : (
                <p>By: {this.state.data.copyright}</p>
              )}
              <p>
                <br />
                Below is a catalogue of asteroids from NASA and their reference
                codes(i.e their names)
              </p>
            </div>
          </>
        )}
      </>
    );
  }
}

export default imageDay;
