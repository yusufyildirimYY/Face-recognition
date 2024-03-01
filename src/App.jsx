import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "b6dd9aa133da413ca1b281c11cea2841",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");

    const PAT = "b6dd9aa133da413ca1b281c11cea2841";
    const USER_ID = "douglasyy1059";
    const APP_ID = "Face-Recognition";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "9491c36f920544d686c7bbcdd4b0557f";
    const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

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
      .then((response) => console.log(response));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
