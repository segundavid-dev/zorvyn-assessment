# Finance Dashboard UI

## Overview

A finance dashboard built with React and TypeScript that allows users to view their financial summary, explore transactions, and understand spending patterns. The interface supports two roles Admin and Viewer with UI behavior that adapts accordingly.

---

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Zustand (state management + local storage persistence)
- Recharts (data visualizations)
- React Router v7
- HugeIcons (icon library)
- Vite (build tool)

---

## Setup Instructions

**Prerequisites:** Node.js 18 or higher

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app runs at `http://localhost:5173` by default.

---

## Features

### Dashboard Overview

- Summary cards showing Total Balance, Income, Expenses, and Savings
- Balance trend chart (area chart over time)
- Spending breakdown chart (donut chart by category)
- Recent transactions table

### Transactions Section

- Full transaction list with date, description, category, type, amount, and status
- Filter by category, type, and status
- Search by description

### Role-Based UI

- Switch between Admin and Viewer roles via the header dropdown
- Viewer: read-only access, no ability to add or edit transactions
- Admin: can add new transactions and edit existing ones via a modal

### Insights Section

- Highest spending category
- Average monthly spend and income
- Monthly comparison bar chart (income vs expenses vs savings)
- Top spending categories chart

### State Management

- Zustand store for transactions, filters, and role
- Data is loaded once from a static JSON file on first visit
- All changes (add, edit) are persisted to local storage

### Optional Enhancements Implemented

- Dark mode (system preference + manual toggle)
- Data persistence via local storage
- Mock API integration with simulated response structure
- Responsive layout across mobile, tablet, and desktop

---

## Project Structure

```
src/
  components/       # Reusable UI components organized by feature
  constants/        # Shared constants (categories, chart colors)
  hooks/            # Custom React hooks
  pages/            # Page-level components (Dashboard, Transactions, Insights)
  services/         # API service layer
  stores/           # Zustand stores
  types/            # TypeScript type definitions
  utils/            # Utility functions (date, currency formatting)
```

---

## Roles

To switch roles, use the role selector in the top-right of the header.

| Role   | Permissions                                        |
| ------ | -------------------------------------------------- |
| Viewer | View dashboard, transactions, insights             |
| Admin  | All Viewer permissions + add and edit transactions |
