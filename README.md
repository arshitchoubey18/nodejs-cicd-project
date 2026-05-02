# 🚀 CI/CD Pipeline for Node.js App (GitHub Actions + Docker)

## 📌 Project Overview

This project is a simple **CI/CD pipeline setup** for a Node.js application using GitHub Actions and Docker.

It automates the process of:

* Running tests
* Building the application
* Creating Docker images
* Pushing images to Docker Hub
* Deploying the application based on branch (dev / main)

---

## ⚙️ Tech Stack

* Node.js (Express)
* Jest (Testing)
* GitHub Actions (CI/CD)
* Docker
* Docker Hub

---

## 📁 Project Structure

```text
nodejs-cicd-project/
│
├── src/
│   ├── app.js
│   └── routes/
│       └── health.js
│
├── tests/
│   └── app.test.js
│
├── server.js
├── package.json
├── Dockerfile
└── .github/workflows/ci.yml
```

---

## 🚀 How It Works

### 1. Code Push

Whenever code is pushed to:

* `dev` branch → Staging pipeline runs
* `main` branch → Production pipeline runs

---

### 2. CI Pipeline

GitHub Actions automatically:

* Installs dependencies
* Runs test cases using Jest
* Builds the project

---

### 3. Docker Build

* Docker image is created
* Image is tagged with:

  * `latest`
  * commit SHA

---

### 4. Docker Push

* Image is pushed to Docker Hub

---

### 5. Deployment

Based on branch:

* `dev` → Staging deployment
* `main` → Production deployment

---

## 🐳 Docker Commands (Optional Manual Run)

Build image:

```bash
docker build -t nodejs-app .
```

Run container:

```bash
docker run -p 3000:3000 nodejs-app
```

---

## 🔐 Required Secrets (GitHub)

* `DOCKERHUB_USERNAME`
* `DOCKERHUB_TOKEN`

---

## 🌿 Branch Strategy

```text
dev   → Development / Staging
main  → Production-ready code
```

---

## 🎯 Key Learnings

* CI/CD automation using GitHub Actions
* Docker containerization
* Branch-based deployment strategy
* Real-world DevOps workflow understanding

---

## 💡 What This Project Demonstrates

* Automated testing on every push
* Docker-based application packaging
* CI/CD pipeline simulation like production systems
* Faster and reliable software delivery

---

## 🚀 Future Improvements

* Kubernetes deployment
* Rollback strategy
* Monitoring with Prometheus/Grafana
* Approval-based production deployment

---

## 👨‍💻 Author

**Arshit Choubey**

---

