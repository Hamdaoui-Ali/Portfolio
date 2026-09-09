---
title: "MediLink"
summary: "Doctor-patient appointment management platform with a modular Spring Boot backend, Angular frontend, secure APIs, migrations, and container-backed integration testing."
status: in-progress
role: "Java Full-Stack Developer"
category: "Java Full-Stack · Healthcare"
github: "https://github.com/Hamdaoui-Ali/MediLink"
visibility: public
evidence:
  - "Workspace split between a Spring Boot API and Angular 21 application"
  - "Modular-monolith boundaries for patient, doctor, and admin workflows"
  - "MySQL target with migration and database-dependent integration testing"
featured: false
sortOrder: 6
stack:
  [
    "JAVA",
    "SPRING_BOOT",
    "ANGULAR",
    "TYPESCRIPT",
    "MYSQL",
    "FLYWAY",
    "TESTCONTAINERS",
    "JUNIT",
    "MAVEN",
    "VITEST",
  ]
---

## Overview

MediLink is a doctor-patient appointment-management platform organized around clear healthcare domain boundaries. Patients can work through appointment-booking flows, doctors can manage availability and appointments, and administrative capabilities support platform data.

The repository is structured as a workspace with separate `medilink-backend` and `medilink-frontend` applications, plus shared database and documentation areas. The backend README describes a Spring Boot API foundation with Java 21, an Angular 21 frontend, and MySQL as the target database.

## Backend architecture

MediLink is designed as a modular monolith rather than an unstructured CRUD application. Spring Data JPA handles persistence, Spring Security and OAuth2 Resource Server capabilities protect API access, Flyway controls schema evolution, MapStruct maps DTOs, and Springdoc exposes OpenAPI documentation.

MySQL is the production-oriented target, while H2 keeps local development lightweight. Database-dependent integration tests use Testcontainers to run against isolated MySQL containers rather than relying exclusively on mocks or in-memory persistence.

## Product workflows

- Patient appointment booking and tracking
- Doctor availability and appointment management
- Administrative platform data operations
- Validated DTO-based API boundaries
- Documented health endpoint and local development profiles

## Technology stack

Java 21, Spring Boot 4, Spring MVC, Spring Data JPA, Spring Security, OAuth2 Resource Server, Flyway, MySQL, H2, MapStruct, Lombok, OpenAPI/Swagger, Testcontainers, JUnit, Maven, Angular 21, RxJS, TypeScript 5.9, and Vitest.
