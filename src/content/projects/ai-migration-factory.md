---
title: "AI Migration Factory"
summary: "Agentic migration platform for staged Angular and Java/Spring Boot modernization, with planning, transformation, validation, and evidence workflows."
status: in-progress
role: "Lead Developer — CGI PFE MVP"
category: "AI"
disciplines: ["full-stack", "backend-apis", "automation-ai"]
visibility: private
evidence:
  [
    "Two internally validated MVPs",
    "Agent workflow with approval gates",
    "ROI study with estimated 80% time saving",
  ]
featured: false
sortOrder: 7
stack:
  [
    "JAVA",
    "SPRING_BOOT",
    "ANGULAR",
    "PYTHON",
    "FASTAPI",
    "REACT",
    "NEXT_JS",
    "TYPESCRIPT",
    "SQLALCHEMY",
    "SQLITE",
    "LANGGRAPH",
    "AZURE_OPENAI",
    "CODE_ANALYSIS",
    "DOCKER",
  ]
---

## Overview

An in-progress agentic platform for turning legacy modernization into a controlled, evidence-producing workflow. The MVP targets staged Angular 18 → 19 → 20 → 21 upgrades and Java 11 / Spring Boot 2.x → Java 21 / Spring Boot 4.x modernization paths where applicable.

## Problem

Organizations with aging codebases face massive technical debt. Manual migration of Java/Spring Boot applications from older versions to modern LTS releases is time-consuming, error-prone, and requires deep expertise across frameworks and dependency trees.

## Solution

The factory combines static analysis with LangGraph-orchestrated agents and Azure OpenAI reasoning. A backend-authoritative workflow moves through analysis, planning, transformation, build, and test stages. Human approval gates protect high-risk changes, while snapshots, diffs, command logs, reports, and rollback controls make each decision inspectable.

## Main Features

- **Analysis and planning agents**: Map dependencies, APIs, framework patterns, and migration risk
- **Transformation agents**: Apply bounded changes with approval gates and safety checks
- **Build and test validation**: Compile the target project and execute its test suite before promotion
- **Evidence artifacts**: Persist snapshots, diffs, command logs, reports, and rollback checkpoints
- **Progress interface**: Stream backend-authoritative workflow state to a React / Next.js tracking UI

## My Contribution

As lead developer, designed and implemented the MVP end to end: FastAPI services with Pydantic and SQLAlchemy/SQLite, the LangGraph agent workflow, the React / Next.js tracking interface, validation and reporting, and Docker-based delivery. The work was presented and validated internally at CGI.

## Challenges

Handling diverse project structures and build systems, keeping workflow state authoritative on the backend, making transformations reversible, and balancing automation with human review for complex migration decisions. A separate ROI study estimates more than 80% time savings versus a manual migration; this is an estimate, not a measured production result.
