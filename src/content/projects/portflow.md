---
title: "PortFlow"
summary: "Reproducible container-terminal data platform with Bronze/Silver/Gold layers, quality controls, dbt transformations, and versioned static analytical snapshots."
status: in-progress
role: "Data Engineer"
category: "Data Engineering · Analytics · Logistics"
github: "https://github.com/Hamdaoui-Ali/PortFlow"
visibility: public
evidence:
  - "Deterministic simulated operations data with a local PostgreSQL pipeline"
  - "Bronze-to-Silver validation, quarantine handling, and row reconciliation"
  - "Gold analytical snapshots published to a static web application"
featured: false
sortOrder: 5
stack:
  [
    "PYTHON",
    "POSTGRESQL",
    "PARQUET",
    "PYARROW",
    "POLARS",
    "DUCKDB",
    "DBT",
    "PYTEST",
    "DOCKER",
  ]
---

## Overview

PortFlow simulates the data architecture behind a container-terminal operational control tower. It turns deterministic terminal operations data into tested analytical snapshots and publishes a static dashboard without requiring an always-on backend.

## Pipeline

```text
Simulation → PostgreSQL → Incremental extraction → Bronze → Quality validation → Silver → dbt → Gold/DuckDB → Versioned public snapshot
```

Each layer has a clear responsibility. PostgreSQL receives operational data, incremental extraction moves it into a Bronze data layer, and validation transforms it into Silver datasets. Invalid records are isolated in quarantine data rather than silently discarded, while reconciliation proves that every Bronze record is accounted for.

The Silver layer is modeled with dbt into a Gold analytical layer in DuckDB. Versioned JSON snapshots are then published atomically for the public web application. Private processing and public serving stay separate: the dashboard consumes a static data product instead of reaching into the processing database.

## Engineering principles

- Cursor-based incremental processing
- Bronze/Silver/Gold ownership boundaries
- Parquet-backed analytical interchange
- Pydantic and JSON Schema validation
- Explicit quarantine and failure accounting
- Reproducible datasets and deterministic outputs
- Atomic snapshot publishing
- Zero-cost public serving with no required hosted database or broker

The public README explicitly labels the operational data as simulated, so the project demonstrates architecture and quality controls without presenting synthetic data as a live commercial feed.

## Technology stack

Python 3.12, PostgreSQL, Psycopg, Parquet, PyArrow, Polars, DuckDB, dbt, dbt-duckdb, Pydantic, JSON Schema, Pytest, Ruff, and MyPy.
