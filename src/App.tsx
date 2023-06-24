import * as React from "react";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>();

  React.useEffect(() => {
    try {
      // Since logo1.svg doesn't exist, there is be an error
      // This sets the image src as undefined
      // We fall back to our placeholder test when image src is undefined
      const src = require("./assets/logo1.svg").default;
      setImgSrc(src);
    } catch (e) {
      setImgSrc(undefined);
    }
  }, []);

  return (
    <div className="App">
      <img alt="logo" src="/logo.svg" />
      <img
        alt="logo"
        src="assets/logo1.svg"
        onError={(event) => (event.currentTarget.style.display = "none")}
      />
      {/* Does not display broken image and alt */}
      <img
        alt="logo"
        src="assets/logo1.svg"
        onError={(event) => (event.currentTarget.style.display = "none")}
      />
      {imgSrc ? <img alt="logo" src={imgSrc} /> : <div>Logo</div>}
    </div>
  );
}

export default App;
