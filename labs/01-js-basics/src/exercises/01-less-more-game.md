# Gra w "Zgadnij liczbę"

## Wytyczne

1. Program losuje liczbę od 1-100
2. Program prosi użytkownika o odgadnięcie liczby
3. Jeśli użytkownik zgadnie liczbę, program wypisuje wiadomość o wygranej i zamyka się
4. Program wypisuje "więcej" lub "mniej", 
   w zależności od wartości liczby wpisanej przez użytkownika
5. Program wraca do kroku drugiego

## Dodatkowe funkcjonalności

- Program liczy który raz zgadujemy, wyświetlamy tą liczbę po odgadnięciu liczby
- Program poprawnie obsługuje przypadki, w których użytkownik poda "niepoprawną liczbę" 
  (pusty ciąg znaków, tekst zamiast liczby etc.)

## Przykładowy przebieg gry

```
    Zgadnij liczbę od 1 do 100
    
    Twoja propozycja to...
    > 30
    Za mało
    Twoja propozycja to...
    > 50
    Za dużo
    Twoja propozycja to...
    > 45
    Zgadłeś!
```