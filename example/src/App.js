import React from "react";
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

const CodeComponent = ({ code, theme, language }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            fontSize: "19px",
            padding: "0.7rem",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const App = () => {
  const code = `import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";

const Cards = () => {
  return (
    <RepoCards
      user="CITIZENDOT"
      repos={["Leetcode-Visualizer", "gh-info", "TestCode", "VCPicker"]}
    />
  );
};

export default Cards;`;

  const installation = `npm install react-gh-repo-cards # npm
yarn add react-gh-repo-cards # yarn`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <h1 className="text-center">
        react-gh-repo-cards{" "}
        <sub>
          <small>Demo</small>
        </sub>
      </h1>
      <RepoCards
        user="CITIZENDOT"
        repos={["Leetcode-Visualizer", "gh-info", "TestCode", "VCPicker"]}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        <h2 className="text-center">Usage</h2>
        <CodeComponent code={code} theme={vsDark} language="jsx" />
      </div>
      <div>
        <h2 className="text-center">Installation</h2>
        <CodeComponent code={installation} theme={vsDark} language="bash" />
      </div>
    </div>
  );
};

export default App;
