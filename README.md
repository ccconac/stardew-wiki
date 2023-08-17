# 🏕️ stardew-wiki

[Stardew Valley Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki) 페이지에 있는 정보들을 함수를 호출해 사용할 수 있는 패키지

### ⚙️ Installation

```
yarn add stardew-wiki
```

### ✍🏼 Usage

```javascript
// Node.js
const info = require("stardew-wiki");

// TypeScript
import info from "stardew-wiki";

const sam = info.findVillagerByName("샘");
console.log(sam);
```
