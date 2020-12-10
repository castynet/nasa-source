import React from "react";
import "./css/image.css";

class imageDay extends React.Component {
  state = {
    pic: null,
    copyright: null
  };

  async componentDidMount() {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=bjuVUgfTLhIEoL8tiVwkom7V20gV7fquf0cNagKg";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ pic: data, copyright: data.copyright });
  }
  render() {
    return (
      <>
        {!this.state.pic ? (
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
            <img
              className="imageCard"
              src={this.state.pic.url}
              alt="NASA's pic of the day"
            />
            <div className="detailsCard">
              <h1 className="title">
                IMAGE OF THE DAY:
                <br />
                {this.state.pic.title}
              </h1>
              <p>NASA's image of the day: {this.state.pic.date}</p>
              {!this.state.copyright ? (
                <p>By Nasa</p>
              ) : (
                <p>By: {this.state.copyright}</p>
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
