import React, { Component } from "react";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import "./App.css";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

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
    };
  }

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

    const PAT = import.meta.env.VITE_PAT; //Your Pat Here
    const USER_ID = import.meta.env.VITE_USER_ID; //Your User Id Here
    const APP_ID = "Face-Recognition";
    const MODEL_ID = "face-detection";
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
        <div className="h-full">
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
      </div>
    );
  }
}

export default App;
