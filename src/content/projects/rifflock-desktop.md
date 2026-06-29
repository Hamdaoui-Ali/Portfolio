---
title: "RiffLock Desktop"
summary: "Desktop application for secure music file management and digital rights protection, built with a modern Java-based architecture."
status: completed
role: "Full-Stack Developer"
category: "Desktop"
github: "https://github.com/Hamdaoui-Ali/rifflock-desktop"
featured: true
sortOrder: 2
stack: ["JAVA", "SPRING_BOOT", "MYSQL", "JUNIT"]
---

## Overview

A desktop application for managing and securing digital music collections with encryption, metadata management, and digital rights protection features.

## Problem

Music professionals and collectors need a secure way to organize, encrypt, and control access to their digital audio files. Existing solutions lack robust encryption and fine-grained access control.

## Solution

RiffLock Desktop provides a local-first application with encrypted storage, metadata indexing, and role-based access control. It uses Spring Boot for the backend services and a local MySQL database for metadata management.

## Main Features

- **Encrypted file storage**: AES-256 encryption for all imported audio files
- **Metadata management**: Automatic extraction, indexing, and search across music libraries
- **Access control**: Role-based permissions for sharing collections
- **Import/export**: Support for multiple audio formats with batch processing

## My Contribution

Architected the full application using Java and Spring Boot. Implemented the encryption layer, metadata extraction pipeline, and the database schema for efficient music library queries. Wrote comprehensive unit tests with JUnit.

## Challenges

Balancing encryption performance with usability on large music libraries, designing an efficient metadata search index, and ensuring cross-platform compatibility.
