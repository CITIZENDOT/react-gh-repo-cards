# react-gh-repo-cards

[![NPM Version](https://img.shields.io/npm/v/react-gh-repo-cards.svg?style=flat)](https://www.npmjs.com/package/react-gh-repo-cards) [![](https://img.shields.io/npm/dm/react-gh-repo-cards.svg?style=flat)](https://www.npmjs.com/package/react-gh-repo-cards)

Perfect github repo cards!

## Installation

```bash
npm install react-gh-repo-cards # npm
yarn add react-gh-repo-cards # yarn
```

## Features

- **NO** external dependencies.
- Oh, Did I say, it's responsive? Yes it is! Just drop this component wherever you want, And it tries it's best to fit itself there.
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

You can also show repos by different users, by omitting the `user` prop, and just writing every repo as `user/repo`

```jsx
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";

const Cards = () => {
  return (
    <RepoCards
      repos={["CITIZENDOT/Leetcode-Visualizer", "CITIZENDOT/gh-info", "FdelMazo/BobbyFissue", "FdelMazo/ConstitucionArgentina"]}
    />
  );
};

export default Cards;
```


## License

MIT © [Appaji](https://github.com/CITIZENDOT)
