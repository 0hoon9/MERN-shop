### 💻MERN Stack E-Commerce shopping mall
---
이 프로젝트는 MERN Stack을 사용하여 만든 기본 형태의 쇼핑몰 사이트입니다.
Json Web Token을 활용한 인증 시스템과 Redux를 통한 상태관리, Paypal 결제시스템이 특징입니다.  
<br/>

### 🔨Stacks
---
- Language: [![JavaScript Badge](http://img.shields.io/badge/JavaScript-ES6++-f7df1e?style=flat-square&logo=javascript&link=https://developer.mozilla.org/ko/docs/Web/JavaScript)](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- Backend: [![mongoDB Badge](http://img.shields.io/badge/mongoDB-47a248?style=flat-square&logo=mongdb&link=https://www.nodejs.com/ko/)](https://www.nodejs.com/ko/)
- [![Express Badge](http://img.shields.io/badge/Express-v4.17.1-yellow?style=flat-square&logo=express&link=https://expressjs.com/ko/)](https://expressjs.com/ko/)
- [![NodeJS Badge](http://img.shields.io/badge/NodeJS-v14.6.0-339933?style=flat-square&logo=nodejs&link=https://nodejs.org/ko/)](https://nodejs.org/ko/)
- Frontend: [![React Badge](http://img.shields.io/badge/React-v17.0.1-61dafb?style=flat-square&logo=express&link=https://ko.reactjs.org/)](https://ko.reactjs.org/)  
- State management: [![Redux Badge](http://img.shields.io/badge/Redux-v4.0.5-764abc?style=flat-square&logo=redux&link=https://ko.redux.js.org/introduction/getting-started/)](https://ko.redux.js.org/introduction/getting-started/)  
<br/>

### 📬Installation
---
```javascriprt
npm i | yarn add
```
<br/>

### 📂Directory Structure
---
```
└─── backend
  │       ├─── config
  │       ├─── controllers
  │       ├─── data
  │       ├─── middleware
  │       ├─── models
  │       ├─── routes
  │       └─── utils
  │  
  └─ frontend
          ├─── actions
          ├─── components
          ├─── constants
          ├─── reducers
          └─── screens
``` 
- backend
  - config: mongoose를 사용해 서버와 데이터베이스 연결
  - controllers: router에 연결할 controller
  - data: schema data
  - middleware: router에 연결할 middleware
  - models: modeling할 schema
  - routes: router분리
  - utils: jsonwebtoken 토큰 생성
 -frontend
  - actions: 상태관리를 위한 thunk함수
  - components: components
  - constants: action 이름 정의
  - reducers: reducers
  - screens: View

<br/>

### 💡핵심 구현 내용
---
- 상품목록
- 회원가입 및 로그인
- 댓글
- 장바구니 
- 관리자 페이지
- PayPal 결제
- 페이징 처리  
<br/>

### 🎬Preview
---
#### 1-1. 상품목록
![상품목록](https://user-images.githubusercontent.com/76147992/114186946-64bf7800-9982-11eb-9e22-5d1518c3b90a.JPG)  
<hr/>
#### 1-2. 상세보기
![상세보기](https://user-images.githubusercontent.com/76147992/114187865-705f6e80-9983-11eb-8ded-dce9731e5ff2.JPG)  
<hr/>
#### 2. 댓글 및 별점주기
![댓글 및 별점](https://user-images.githubusercontent.com/76147992/114190559-63904a00-9986-11eb-8a9e-f0775545d3d4.gif)  
<hr/>
#### 3. 장바구니
![장바구니](https://user-images.githubusercontent.com/76147992/114194126-24fc8e80-998a-11eb-8aea-61115b7c67ac.gif)
<hr/>
#### 4-1. 관리자-회원목록
![회원목록](https://user-images.githubusercontent.com/76147992/114194636-abb16b80-998a-11eb-95b5-5254b5e53e05.JPG)
<hr/>
#### 4-2. 관리자-상품목록
![상품목록](https://user-images.githubusercontent.com/76147992/114194641-ad7b2f00-998a-11eb-8c3f-3cf0bafe1785.JPG)
<hr/>
#### 4-3. 관리자-주문목록
![주문목록](https://user-images.githubusercontent.com/76147992/114194669-b409a680-998a-11eb-8899-af1ab78939c0.JPG)
v
#### 5. PayPal 결제
![PayPal checkout](https://user-images.githubusercontent.com/76147992/114195981-e7006a00-998b-11eb-9b5a-80f41c079abd.JPG)
<hr/>
