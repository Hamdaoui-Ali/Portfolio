---
title: "PlanOps"
summary: "Collaborative project and task management platform with workspaces, boards, invitations, notifications, analytics, activity tracking, and operational exports."
status: in-progress
role: "Full-Stack Laravel Developer"
category: "SaaS · Project Management · Laravel"
disciplines: ["full-stack", "backend-apis"]
github: "https://github.com/Hamdaoui-Ali/PlanOps"
visibility: public
evidence:
  - "Laravel domain-oriented application structure with authenticated resource bindings"
  - "Project collaboration flows covering membership and invitation lifecycle"
  - "Dedicated tests, analytics, activity history, search, and export workflows"
featured: true
sortOrder: 2
stack: ["PHP", "LARAVEL", "LIVEWIRE", "TAILWIND", "VITE", "PEST"]
---

## Overview

PlanOps is a collaborative productivity and project-management platform built to keep projects, tasks, and team operations in one place. It combines project workspaces and board-style task workflows with the operational details that usually get scattered across separate tools.

## Project and task workflows

Users can create projects, organize tasks, change status and priority, configure due dates, assign work, archive projects, restore them, and inspect project activity. Board views support a visual workflow while personal work views and search help each user focus on the work that matters to them.

## Collaboration layer

PlanOps goes beyond a personal task list through team-aware project access. Projects support membership management and invitation workflows, including acceptance, decline, revocation, and resend operations. Authenticated route bindings keep project and task retrieval scoped to resources the current user can access.

## Operational visibility

The platform includes notification management, unread counters, activity history, project-level and global analytics, and exports for the data that teams need outside the application:

- CSV project export
- CSV task export
- CSV and JSON activity export
- Project and task search
- User settings and profile management

## Technology stack

PHP 8.3, Laravel 13, Livewire 4, Laravel Breeze, Pest, Tailwind CSS, Alpine.js, Vite, and Axios.

The repository follows Laravel conventions across `app`, `database`, `resources`, `routes`, and `tests`, with domain behavior kept close to the authenticated project and task boundaries.
