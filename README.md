# violet-ui

ui component kit built with `vanila-extract`


## Installation & setup

### package 설치

```bash
# npm
npm i violet-ui-dev

# yarn
yarn add violet-ui-dev
```

### vanila extract 패키지 설치

해당 디자인 시스템은 `vanila-extract` 패키지를 사용하고 있어 아래의 설치가 필요합니다.

```bash

# npm
npm install @vanilla-extract/css @vanilla-extract/recipes

# yarn
yarn add @vanilla-extract/css @vanilla-extract/recipes
```

### 스타일시트 설정

entry 파일(ex - `App.tsx`)에 스타일시트를 import 해주세요

```js
...

import 'violet-ui-dev/style';

...
```