# Gra kółko krzyżyk

## Wytyczne

1. "Rysujemy" tablicę
2. Ruch:
   1. Użytkownik podaje swój wybór w formacie "x:y" np. 3:1 (3 rząd, 1 kolumna)
      1. Jeśli użytkownik się pomyli, powtarza wybór pola
      2. jeśli pole jest poza granicami, użytkownik powtarza wybór
      3. jeśli pole jest zajęte, użytkownik powtarza wybór
   2. Komputer na swoją pozycję wybiera losowe puste pole
3. Sprawdzamy czy nie ma remisu
4. Sprawdzamy czy ktoś nie wygrał
5. Wracamy do pierwszego kroku


## Dodatkowe funkcjonalności

1. Opcja "multiplayer" (na zmianę)
2. Opcja zmiany wielkości planszy (np. 5 X 5)

# Setup

1. Przechodzimy do katalogu zajęć ```cd labs/02-tic-tac-toe```
2. ```npm i```
3. ```cd src```
4. ```node exercise.js```

## Przykład "rysowania" tablicy

```
X|O|X
-+-+-
 | |O
-+-+-
 | | 
```

## Bug bounty

W wytycznych celowo zamieszczono jeden błąd logiczny, potrafisz go odnaleźć?
