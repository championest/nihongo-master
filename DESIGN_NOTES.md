# Nihongo Master - Design & Implementation Notes

## Overview
This project is a modern, interactive Japanese learning web application designed for beginners. It features a clean, "glassmorphism" aesthetic with a focus on usability and engagement.

## Design Philosophy
- **Clean Aesthetic**: Utilizes a soft color palette (Light Blue, Teal, Coral) and high whitespace to reduce cognitive load.
- **Glassmorphism**: Semi-transparent white backgrounds with blur effects (`backdrop-filter`) create a modern, layered depth.
- **Interactive**: Micro-interactions (hover states, scale effects) and smooth transitions between views (SPA feel) keep the user engaged.
- **Responsive**: The layout adapts to different screen sizes, ensuring usability on mobile and desktop.

## Features

### 1. Homepage
- **Hero Section**: Welcoming message with animated floating Japanese characters.
- **Navigation**: Clear entry points for Hiragana, Katakana, and Kanji.
- **Stats**: (Placeholder) Visual indicators for streaks and progress to motivate users.

### 2. Learning Module (Hiragana)
- **Grid Layout**: Displays all characters clearly.
- **Interactive Cards**: Each character card includes Romaji and action buttons (Audio, Stroke Order).
- **Tabs**: Easy switching between Seion (Basic), Dakuon (Voiced), and Yōon (Combination) sounds.

### 3. Flashcards
- **Flip Animation**: CSS 3D transform for a realistic card flip experience.
- **Self-Assessment**: "Got it" vs "Need Practice" buttons to reinforce active recall.
- **Progress Tracking**: Shows current card position.

### 4. Quiz
- **Romaji Typing**: Active recall testing where users type the reading of a character.
- **Instant Feedback**: Immediate validation of answers.
- **Score Tracking**: Simple gamification elements.

## Technical Stack
- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox/Grid, Animations, Glassmorphism.
- **Vanilla JavaScript**: Lightweight state management and DOM manipulation without external dependencies.

## How to Run
Simply open `index.html` in any modern web browser. No installation or server required.
