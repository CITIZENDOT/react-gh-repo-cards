# react-gh-repo-cards

Perfect github repo cards!

## Install

```bash
npm install react-gh-repo-cards # npm
```

```bash
yarn add react-gh-repo-cards # yarn
```

## Features

- **NO** external dependencies.
- Looks exactly same as GitHub pinned repository cards (including hyper-links).
- Simple to use.

## Customizations

There are two props **`Loading`**, **`Error`** components to over-ride default components.

```jsx
<RepoCards
  user="CITIZENDOT"
  repos={["Leetcode-Visualizer", "gh-info", "TestCode", "VCPicker"]}
  Loading={CustomLoadingComponent}
  Error={CustomErrorComponent}
/>
```

## Usage

```jsx
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";

const Cards = () => {
  return (
    <RepoCards
      user="CITIZENDOT"
      repos={["Leetcode-Visualizer", "gh-info", "TestCode", "VCPicker"]}
    />
  );
};

export default Cards;
```

## License

MIT © [Appaji](https://github.com/CITIZENDOT)
