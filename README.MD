# Angular cucumber playwright poc

Ce projet est un poc avec pour objectif de confirmer la compatibilité d'utiliser Angular, Cucumber et Playwright ensemble.

## Getting started

Installation des dépendances
```bash
npm install
```

Lancement du projet
```bash
npm start
```

## Lancement des tests Playwright

```bash
npm run e2e
```

En mode headed (navigateurs visibles) : 
```bash
npm run e2e:headed
```

En mode debug : 
```bash
npm run e2e:debug
```

Lancement du générateur de tests Playwright : 
```bash
npm run e2e:codegen
```

## Lancement des tests Cucumber

```bash
npm run cucumber
```

En mode debug : 
```bash
npm run cucumber:debug
```

D'autres commandes sont disponibles dans le fichier package.json
