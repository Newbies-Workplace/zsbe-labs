# Cleanup

- w `main.jsx` zamieniamy
```jsx
<React.StrictMode>
    <App />
</React.StrictMode>
```
na
```jsx
<App />
```
- w `App.tsx` usuwamy funkcję `App` i tworzymy własną funkcję:
```jsx
function App() {
    return (
        <div>
            Test
        </div>
    )
}
```