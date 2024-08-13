## ToDoList
  ```
📚목표: 간단한 ToDoList를 만들며 React 기초 동작을 이해할 수 있습니다.
🎨피그마: https://www.figma.com/design/LEMsHbc9taG3qbGLmzjxhd/%5BBNC-2%EA%B8%B0%5D-ToDoList?node-id=0-1&t=qP6d2WGplecdDUIa-0
```
기간: 24.08.13 ~ 24.08.30<br/>
(중간에 다 완성하면 미리 끝나는겁니다~)

<br/>

커밋 올리실 때 마다 코드 리뷰를 해드릴 예정입니다!<br/>
(커밋을 자주 올리면 더 좋겠죠?😊)

<br/>

궁굼한 부분, 질문이 있다면 피그마에 코멘트를 남겨주세요.
<hr/>

### 작업 방법
#### 브랜치 생성
`본인이름`으로 브랜치를 생성 후 그 브랜치에서 작업을 진행합니다. (ex. `limsubin`)
#### 프로젝트 클론
VSC를 열고 아래의 명령어를 터미널에 순서대로 입력합니다.
```
git clone https://github.com/BNC-2nd-publishing-training/to-do-list.git
yarn install
yarn dev
```

<hr/>


### 폴더 구조
> 마음대로 수정해도 상관 없습니다.
> 라우팅 기능은 개발하지 않아도 상관 없습니다.(라우팅 없어도 다 개발 가능합니다.)


**to-do-list**<br/>
├─ public<br/>
│  └─ vite.svg<br/>
├─ README.md<br/>
├─ src<br/>
│  ├─ @types<br/>
│  │  ├─ declare.d.ts > 미디어 타입 지정<br/>
│  │  └─ vite-env.d.ts > vite 기본 타입 지정<br/>
│  ├─ App.tsx<br/>
│  ├─ assets<br/>
│  │  ├─ fonts<br/>
│  │  │  ├─ Pretendard-Bold.woff<br/>
│  │  │  ├─ Pretendard-Bold.woff2<br/>
│  │  │  ├─ Pretendard-Medium.woff<br/>
│  │  │  ├─ Pretendard-Medium.woff2<br/>
│  │  │  ├─ Pretendard-Regular.woff<br/>
│  │  │  ├─ Pretendard-Regular.woff2<br/>
│  │  │  ├─ Pretendard-SemiBold.woff<br/>
│  │  │  └─ Pretendard-SemiBold.woff2<br/>
│  │  └─ images<br/>
│  │     └─ .gitkeep<br/>
│  ├─ components > 컴포넌트 파일 관리 폴더<br/>
│  │  └─ .gitkeep<br/>
│  ├─ layouts > 레이아웃 파일 관리 폴더<br/>
│  │  └─ DefaultLayouts.tsx<br/>
│  ├─ main.tsx > 최상위(루트) 파일<br/>
│  ├─ styles<br/>
│  │  ├─ index.css > 최상위(루트) css 파일<br/>
│  │  └─ theme.ts > color, font style 저장 파일<br/>
│  ├─ utils<br/>
│  │  ├─ functions > 함수 관리 폴더<br/>
│  │  │  └─ .gitkeep<br/>
│  │  └─ interfaces > 인터페이스 관리 폴더<br/>
│  │     └─ .gitkeep<br/>
│  └─ views <br/>
│     └─ pages > 페이지 관리 폴더<br/>
│        └─ .gitkeep<br/>
├─ .gitignore<br/>
├─ eslint.config.js<br/>
├─ index.html<br/>
├─ package.json<br/>
├─ tsconfig.json<br/>
├─ tsconfig.node.json<br/>
├─ vite.config.ts<br/>
└─ yarn.lock<br/>
