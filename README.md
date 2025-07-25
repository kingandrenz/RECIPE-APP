---
title: "Forkify Recipe App"
output: github_document
---

# 🍽️ Forkify Recipe App

The **Forkify Recipe App** is a modern React-based recipe finder that allows users to search, view, and favorite recipes. It utilizes the Forkify API to fetch real recipe data and demonstrates the use of React Context API for global state management.

---

## 🔧 Features

- 🔍 **Search for Recipes** by name or ingredient.
- 📜 **View Recipe Details** with step-by-step instructions and ingredients.
- ❤️ **Add or Remove Recipes from Favorites** list.
- 🌀 **Loading Indicator** for API requests.
- 💾 **Global State Management** using `createContext` and `useState`.

---

## 📁 Folder Structure

recipe-app/
├── public/
├── src/
│ ├── components/
│ │ ├── navbar/
│ │ └── recipe-item_card/
│ ├── context/
│ │ └── index.jsx
│ ├── pages/
│ │ ├── home/
│ │ ├── details/
│ │ └── favorite/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css