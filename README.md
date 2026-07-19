# MotoGallery | Premium Motorcycle Showroom

## Overview
MotoGallery is a high-fidelity, polyglot digital showroom engineered for performance, type safety, and luxurious user experience. It serves as a reference architecture for modern e-commerce platforms requiring seamless integration between reactive frontends and robust, scalable backend services.

## Tech Stack
- **Frontend**: TypeScript, Vanilla JavaScript, Hardware-Accelerated CSS3
- **Backend (Aggregation)**: Python 3.11+ (FastAPI)
- **Backend (Enterprise Domain)**: Java 21 (Spring Boot 3.x, JPA/Hibernate)
- **Design System**: Obsidian dark mode, glassmorphism, Playfair Display + Inter typography pairing

## Architecture Decisions
1. **Type-Safe Frontend**: TypeScript enforces strict domain modeling (`Motorcycle` interface), eliminating runtime type coercion errors and ensuring predictable state management.
2. **Asynchronous Python Layer**: FastAPI provides non-blocking I/O for high-throughput data aggregation and filtering, leveraging Pydantic for automatic data validation and OpenAPI schema generation.
3. **Enterprise Java Core**: The Spring Boot implementation demonstrates Domain-Driven Design (DDD) principles, utilizing JPA for persistent storage and type-safe enumeration mapping, suitable for high-compliance financial or inventory transactions.

## Getting Started

### Frontend
Serve the static files via any local development server:
```bash
npx serve .
# or
python -m http.server 8000
```

### FastAPI Backend
```bash
pip install fastapi uvicorn httpx pydantic
uvicorn main:app --reload
```
Access the interactive API documentation at `http://localhost:8000/docs`.

### Spring Boot Backend
Ensure Java 21 and Maven are installed.
```bash
mvn spring-boot:run
```

## Design Philosophy
The UI eschews cluttered, utilitarian e-commerce patterns in favor of a gallery-style presentation. Subtle hover states, `cubic-bezier` transitions, and strict visual hierarchy direct user attention to the machinery, maximizing conversion potential through perceived value and exclusivity.

---
&copy; 2026 MotoGallery. Ride with passion, choose with confidence.
```

---

### References (APA Format)

Google. (n.d.). *Inter font family*. Google Fonts. Retrieved July 19, 2026, from https://fonts.google.com/specimen/Inter

Microsoft. (2026). *TypeScript: Documentation - Interfaces*. TypeScript Official Documentation. Retrieved from https://www.typescriptlang.org/docs/handbook/interfaces.html

Tiangolo, S. (2026). *FastAPI*. FastAPI Official Documentation. Retrieved from https://fastapi.tiangolo.com/

Spring.io. (2026). *Building a RESTful Web Service*. Spring Framework Documentation. Retrieved from https://spring.io/guides/gs/rest-service/

W3C. (2026). *CSS Transitions Module Level 3*. World Wide Web Consortium. Retrieved from https://www.w3.org/TR/css-transitions-1/
