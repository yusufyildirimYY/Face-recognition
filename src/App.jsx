import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import "./App.css";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";

const app = new Clarifai.App({
  apiKey: "b6dd9aa133da413ca1b281c11cea2841",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: [],
      route: "signin",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  faceLocation = (data) => {
    const clarifaiFace = data.region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      top: clarifaiFace.top_row * height,
      left: clarifaiFace.left_col * width,
      bottom: height - clarifaiFace.bottom_row * height,
      right: width - clarifaiFace.right_col * width,
    };
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });

    const PAT = "b6dd9aa133da413ca1b281c11cea2841";
    const USER_ID = "douglasyy1059";
    const APP_ID = "Face-Recognition";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "9491c36f920544d686c7bbcdd4b0557f";
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const faces = result.outputs[0].data.regions.map((region) => {
          console.log(region);
          return this.faceLocation(region);
        });
        this.displayFaceBox(faces);
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div className="App">
        {this.state.route === "home" ? (
          <div className="h-full">
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageURL={this.state.imageURL}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
