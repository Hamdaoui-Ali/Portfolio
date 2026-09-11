---
title: "ParClick Parking Management App"
summary: "Full-stack Django application for parking reservations, time-based pricing, QR tickets, and employee validation."
status: completed
role: "Full-Stack Django Developer"
category: "Django · Parking Management"
disciplines: ["full-stack", "backend-apis"]
github: "https://github.com/Hamdaoui-Ali/ParClick"
visibility: public
featured: false
sortOrder: 11
stack: ["PYTHON", "DJANGO", "BOOTSTRAP", "SQLITE", "QRCODE", "PILLOW", "REPORTLAB"]
---

## Overview

ParClick is a full-stack Django 5.2 application for managing parking reservations across separate client and employee workflows. The current implementation focuses on availability, booking, time-based pricing, QR tickets, validation, and reservation history.

## Technology Stack

- **Backend**: Python with Django 5.2
- **Interface**: Bootstrap 5 landing page and server-rendered Django templates
- **Database**: SQLite by default, with PostgreSQL support available through configuration
- **Supporting libraries**: `qrcode` and Pillow for QR-ticket assets, with optional ReportLab for PDF and print-ready tickets

## Main Features

- **Client reservations**: Browse available parking places, estimate a price from duration and vehicle type, book a place, cancel reservations, and view history
- **QR tickets**: Generate and download a QR-code ticket for entry and validation
- **Employee dashboard**: Secure session-based access for active reservations, parking-place management, and ticket validation
- **Reservation history**: Keep a record of completed reservations and released or occupied parking places

## My Contribution

Built the Django application around the client booking flow and employee operations. Implemented the reservation, duration-based pricing, QR-ticket, validation, and history workflows while keeping the role-specific interfaces separated.

## Scope Notes

Payment gateway integration, a REST/SPA frontend, Docker packaging, and CI are roadmap items in the current repository rather than implemented technologies.
