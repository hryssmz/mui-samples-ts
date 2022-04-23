# README

## 1. Setup

---

### 1.1. Initialize Project

---

```bash
npm init vite@latest mui-samples-ts -- --template react-ts
cd mui-samples-ts
npm install react@17 react-dom@17
npm install -D @types/react@17 @types/react-dom@17
```

### 1.2. Development Dependencies

---

#### 1.2.1. Prettier

---

```bash
npm install -D prettier prettier-plugin-sh
```

#### 1.2.2. ESLint

---

```bash
npm install -D eslint eslint-config-prettier eslint-plugin-import @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-import-resolver-webpack
```

#### 1.2.3. Husky

---

```bash
npm install -D husky
npx husky install
```

#### 1.2.4. lint-staged

---

```bash
npm install -D lint-staged
```

#### 1.2.5. ts-node

---

```bash
npm install -D ts-node
```

#### 1.2.6. Jest

---

```bash
npm install -D jest eslint-plugin-jest
```

#### 1.2.7. Babel

---

```bash
npm install -D babel-jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

#### 1.2.8. React Testing Library

---

```bash
npm install -D @testing-library/react@12 @testing-library/jest-dom @testing-library/user-event eslint-plugin-jest-dom
```
