# React Hooks: useState, useEffect, useRef, useMemo, React.memo, useCallback

## 📌 Русская версия

### 🟢 useState
**useState** — хук для управления состоянием в функциональных компонентах.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
```

🔹 **Когда использовать:** Когда нужно хранить и изменять состояние в компоненте.

---

### 🔵 useEffect
**useEffect** — хук для выполнения побочных эффектов в компонентах (запросы к API, подписки, изменение DOM и т. д.).

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Очистка таймера при размонтировании
  }, []);

  return <p>Прошло секунд: {seconds}</p>;
}
```

🔹 **Когда использовать:** Когда нужно работать с эффектами (запросы, подписки, таймеры).

---

### 🟣 useRef
**useRef** — хук для хранения изменяемого значения без ререндера компонента. Часто используется для управления DOM-элементами.

```jsx
import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Устанавливаем фокус на input при загрузке
  }, []);

  return <input ref={inputRef} type="text" placeholder="Фокус здесь" />;
}
```

🔹 **Когда использовать:** Для работы с DOM-элементами или хранения значений между рендерами без их изменения.

---

### 🟠 useMemo
**useMemo** — хук для мемоизации (оптимизации) вычислений, чтобы не выполнять их заново при каждом ререндере.

```jsx
import { useState, useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const computedValue = useMemo(() => {
    console.log('Выполняем сложные вычисления...');
    return number ** 2;
  }, [number]);

  return <p>Результат: {computedValue}</p>;
}
```

🔹 **Когда использовать:** Когда есть дорогие вычисления, которые не должны пересчитываться без необходимости.

---

### 🟡 React.memo
**React.memo** — HOC (Higher-Order Component), предотвращающий ререндер компонента, если его пропсы не изменились.

```jsx
import { memo } from 'react';

const Child = memo(({ value }) => {
  console.log('Ререндер Child');
  return <p>Значение: {value}</p>;
});
```

🔹 **Когда использовать:** Когда компонент получает одни и те же пропсы и не должен ререндериться.

---

### 🔴 useCallback
**useCallback** — хук для мемоизации функций, чтобы они не создавались заново при каждом ререндере.

```jsx
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child onClick={increment} />;
}
```

🔹 **Когда использовать:** Когда функция передается в дочерний компонент, и важно избежать её повторного создания.

---

## 🇺🇸 English Version

### 🟣 useRef
**useRef** — a hook for storing mutable values without causing re-renders. Often used to reference DOM elements.

```jsx
import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Focus here" />;
}
```

🔹 **When to use:** When dealing with DOM elements or keeping values between renders without triggering re-renders.

---

### 🟠 useMemo
**useMemo** — a hook for optimizing expensive computations by memoizing the result.

```jsx
import { useState, useMemo } from 'react';

function ExpensiveComponent({ number }) {
  const computedValue = useMemo(() => {
    console.log('Performing expensive calculation...');
    return number ** 2;
  }, [number]);

  return <p>Result: {computedValue}</p>;
}
```

🔹 **When to use:** When you have expensive computations that should not be recalculated unnecessarily.

---

### 🟡 React.memo
**React.memo** — a higher-order component (HOC) that prevents re-renders if props remain unchanged.

```jsx
import { memo } from 'react';

const Child = memo(({ value }) => {
  console.log('Child re-renders');
  return <p>Value: {value}</p>;
});
```

🔹 **When to use:** When a component receives the same props and should not re-render unnecessarily.

---

### 🔴 useCallback
**useCallback** — a hook for memoizing functions to prevent unnecessary recreation.

```jsx
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <Child onClick={increment} />;
}
```

🔹 **When to use:** When passing functions to child components to prevent unnecessary re-creations.
