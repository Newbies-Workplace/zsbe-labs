# Dużo katalogów i plików, ale co jest do czego?

## node_modules
tu znajdują się biblioteki, które zainstalował npm
## public
publiczne serwowana zawartość
## src
nasze kody, komponenty etc.
## .gitignore
lista plików i katalogów które git ignoruje przy commitowaniu i pushowaniu
## index.html
podstawa naszego projektu, strona do której dołącza się react
## package.json
główny plik konfiguracyjny npm'a, możemy wrzucić tam między innymi:
- wersję projektu
- nazwę projektu
- skrypty, które będziemy mogli uruchomić za pomocą `npm run <nazwa skryptu>`
- biblioteki
- zależności, które trzeba pobrać do pracy przy projekcie
## package-lock.json
plik trzymający informacje o wersjach bibliotek jakie zostały użyte w aktualnej wersji projektu
## vite.config.js 
konfiguracja narzędzi vite:
- zmiana portów
- zmienne środowiskowe
- konfigi potrzebne do budowania aplikacji
- pluginy