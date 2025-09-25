# Static Web App Deployment with Next.js, CodeBuild, S3 & CloudFront

## 📌 Overview

This project demonstrates how to build and deploy a **static web application (SPA)** using the **Next.js framework with TypeScript**, and then automate the deployment process with **AWS CodeBuild**, **S3**, and **CloudFront**.

The result is a fully automated CI/CD pipeline that updates the hosted application whenever new changes are pushed to the GitHub repository.

---

## 🚀 What I Built

1. Developed a **static web page (SPA)** using **Next.js + TypeScript**.
2. Configured the app for static export by updating `next.config.js`.
3. Generated static files using:

   ```bash
   npm run build
   ```

   This created an `out/` directory containing the static site.

---

## ⚙️ Automation with AWS CodeBuild

1. **Connected GitHub repo** to AWS CodeBuild.
2. Configured **webhook triggers** so each new commit starts a new build.
3. Created and added a **buildspec.yaml** file at the project root.
4. Inside the buildspec:

   * Installed dependencies
   * Ran the build (`npm run build`)
   * Synced the build output to S3:

     ```bash
     aws s3 sync out/ s3://<bucket-name> --delete
     ```
5. Enabled **CloudWatch logs** for build monitoring and debugging.
6. Configured **S3 logs** for better visibility.

---

## ☁️ Hosting & Distribution

* **Amazon S3** bucket hosts the static files.
* **CloudFront distribution** serves the content globally with caching enabled.
* **AWS WAF** is enabled for additional security.
* The CloudFront-provided URL is the public endpoint for the app.

---

## 🔄 Deployment Flow

```text
GitHub Repository → CodeBuild → S3 Bucket → CloudFront
```

---

## 📂 Project Structure

```
├── buildspec.yaml       # Build instructions for CodeBuild
├── next.config.ts       # Next.js configuration for static export
├── src/app              # App pages
├── public/              # Static assets
├── out/                 # Generated static files (build output)
├── package.json
└── tsconfig.json
```

---

## ✅ Key Features

* Next.js + TypeScript SPA
* Automated CI/CD pipeline via AWS CodeBuild
* S3 static hosting with automatic sync
* CloudFront for caching & global distribution
* Webhook-based deployments from GitHub
