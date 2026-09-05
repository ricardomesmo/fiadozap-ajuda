# AGENT.md — Fiado Zap Help Center

## Scope

This document applies specifically to the `fiadozap-ajuda` repository.

The repository is part of the larger Fiado Zap ecosystem and inherits the global rules defined in:

```text
fiadozap/AGENT.md
```

This file adds documentation-specific rules for:

* Docusaurus
* Markdown
* MDX
* User documentation
* Help articles
* Tutorials
* FAQs
* Navigation
* SEO
* Screenshots
* Product terminology
* Documentation maintenance
* Cross-repository verification
* Fiado Pro documentation
* Mobile application documentation

When instructions conflict, follow this priority:

1. Explicit user instruction
2. This repository-specific `AGENT.md`
3. Root `fiadozap/AGENT.md`
4. Existing documentation structure and conventions
5. Actual production product behavior
6. Current Docusaurus behavior
7. General documentation best practices

---

# Project Role

`fiadozap-ajuda` is the official user-facing documentation and help center for the Fiado Zap ecosystem.

Its purpose is to help merchants understand and use Fiado Zap without requiring technical knowledge.

The documentation may cover:

* Getting started
* Account creation
* Login
* Password recovery
* Customers
* Credit sales
* Orders
* Installments
* Payments
* Outstanding balances
* Due dates
* Notifications
* Free plan
* Essencial plan
* Premium plan
* Advertisements
* Account settings
* Fiado Pro
* Payment links
* Checkout
* Premium portfolio features when released
* Frequently asked questions
* Troubleshooting

The documentation describes product behavior.

It does not define business rules.

---

# Source of Truth

The help center must reflect the actual behavior of the Fiado Zap ecosystem.

When documentation and implementation disagree, do not automatically modify documentation to match assumptions.

Verify the behavior in the appropriate repository.

Primary technical sources include:

```text
fiadozap-app
fiadozap-api
fiadozap-web
fiado-pro
```

Conceptually:

```text
Product implementation
        │
        ▼
Actual behavior
        │
        ▼
fiadozap-ajuda
```

Never reverse this relationship.

Documentation must not become the source of truth for application behavior.

---

# Repository Boundaries

Documentation may describe functionality implemented elsewhere.

Typical ownership:

```text
Mobile application behavior
        ↓
fiadozap-app

Business rules / API behavior
        ↓
fiadozap-api

Web behavior
        ↓
fiadozap-web

Checkout / payment links / portfolio
        ↓
fiado-pro

User documentation
        ↓
fiadozap-ajuda
```

When a documentation request depends on uncertain product behavior, inspect the owning repository before documenting it.

---

# Primary Stack

The help center uses:

* Docusaurus
* React
* Markdown
* MDX

Additional packages and configuration must be determined by inspecting the repository.

Before modifying the project, inspect:

```text
package.json
docusaurus.config.*
sidebars.*
docs/
src/
static/
blog/
i18n/
```

as applicable.

Do not assume the exact Docusaurus version or directory structure without checking the repository.

---

# Docusaurus Version Awareness

Docusaurus behavior may differ between versions.

Before introducing framework-specific configuration:

1. Inspect `package.json`.
2. Determine the installed Docusaurus version.
3. Inspect existing configuration.
4. Follow current repository patterns.
5. Consult current official Docusaurus behavior when necessary.

Do not upgrade Docusaurus merely to implement a documentation change unless explicitly requested.

---

# Documentation Language

The primary documentation language is:

```text
Português do Brasil (pt-BR)
```

User-facing documentation should use natural Brazilian Portuguese.

Technical code identifiers, file names, API fields, and platform names may remain in English when they are actual product/technical identifiers.

Do not translate official identifiers incorrectly.

Examples:

```text
Apple Pay
Google Pay
Pix
Fiado Zap
Fiado Pro
Premium
RevenueCat
```

should retain their official/product names.

---

# Audience

The primary audience consists of small merchants and independent business owners.

Users may include:

* Markets
* Grocery stores
* Bars
* Beverage stores
* Butchers
* Distributors
* Neighborhood shops
* Street vendors
* Independent sellers
* Small businesses

Do not assume the reader has technical knowledge.

Documentation should explain the product in practical language.

---

# Writing Style

Documentation should be:

* Clear
* Direct
* Friendly
* Practical
* Concise
* Reassuring
* Easy to scan
* Action-oriented

Prefer:

```text
Toque em "Clientes".
```

over:

```text
Navegue até o módulo responsável pelo gerenciamento da entidade de clientes.
```

Avoid unnecessary technical terminology.

---

# User Perspective

Write from the user's perspective.

Focus on:

```text
What do I want to do?
```

rather than:

```text
How is the software internally implemented?
```

For example, prefer:

```text
Como registrar um pagamento
```

instead of:

```text
Funcionamento da entidade Payment
```

unless the documentation is explicitly technical.

---

# Task-Oriented Documentation

Most help articles should solve a specific task.

Typical structure:

```text
Title
↓
Short explanation
↓
Requirements, when necessary
↓
Step-by-step instructions
↓
Expected result
↓
Important notes / troubleshooting
```

Avoid long theoretical introductions before the user reaches the actual instructions.

---

# Article Titles

Titles should clearly describe the user's goal.

Prefer:

```text
Como cadastrar um cliente
Como registrar uma venda
Como criar uma venda parcelada
Como registrar um pagamento
Como recuperar minha senha
Como remover os anúncios
```

Avoid vague titles such as:

```text
Clientes
Pagamentos
Informações importantes
Funcionalidades
```

when a more actionable title is possible.

Category/index pages may use broader names.

---

# Existing Documentation

Before creating a new article:

1. Search existing documentation.
2. Check whether the topic already exists.
3. Determine whether the existing article should be expanded instead.
4. Check related categories.
5. Check internal links.
6. Check sidebar structure.

Avoid creating multiple articles that explain the same flow differently.

---

# Known Documentation Areas

Existing or previously established help topics may include:

* Criar conta
* O que é o Fiado Zap?
* Primeira venda
* Recuperar senha
* Venda parcelada
* Plano grátis
* Remover anúncios

Actual file names and current content must be inspected before modification.

Do not assume this list is complete.

---

# Product Terminology

Use consistent terminology across all articles.

Preferred product concepts include:

```text
Cliente
Venda
Pagamento
Parcela
Vencimento
Valor
Saldo
Plano
Plano Grátis
Plano Essencial
Plano Premium
Fiado Pro
Pix
Cartão de crédito
```

Before changing terminology globally, inspect the current application labels.

Documentation should normally use the same words users see inside the product.

---

# UI Label Accuracy

When an article instructs the user to tap or click something, use the actual label shown in the application.

For example:

```text
Toque em "Nova venda".
```

should only be used if the application actually displays:

```text
Nova venda
```

Do not invent button labels to make instructions sound cleaner.

Inspect the app when uncertain.

---

# Mobile Instructions

Most Fiado Zap operational documentation relates to the mobile application.

Use mobile-appropriate terminology such as:

```text
Toque
Selecione
Abra
Role a tela
Volte
```

rather than desktop terminology such as:

```text
Clique
```

unless the documented feature is specifically web-based.

---

# Web Instructions

For Fiado Zap Web or Fiado Pro, use appropriate terminology according to the interface.

For responsive web interfaces, neutral instructions such as:

```text
Selecione
Acesse
Escolha
```

may work better than platform-specific wording.

---

# Step-by-Step Instructions

Use numbered steps for sequential actions.

Example:

```md
1. Abra o Fiado Zap.
2. Toque em **Clientes**.
3. Selecione o cliente desejado.
4. Toque em **Nova venda**.
```

Keep each step focused on one action where practical.

Do not combine many unrelated actions into one large step.

---

# Numbered Onboarding Style

Fiado Zap frequently uses task-focused and numbered guidance.

When appropriate, documentation may reinforce this style:

```text
1. Escolha o cliente
2. Informe a venda
3. Defina o vencimento
4. Confirme
```

This is especially useful for quick-start tutorials.

Do not force numbered steps onto conceptual/reference articles.

---

# Markdown

Prefer standard Markdown whenever possible.

Use:

```md
# Heading
## Heading
### Heading

**bold**

- list
- list

1. step
2. step

[link](...)
```

according to existing repository conventions.

Avoid raw HTML when Markdown or existing MDX components already solve the problem.

---

# MDX

Use MDX when React components or richer Docusaurus functionality are genuinely useful.

Do not convert simple Markdown articles into complex React pages unnecessarily.

Prefer documentation that remains easy to maintain.

---

# Front Matter

Follow existing Docusaurus front matter conventions.

Potential fields may include:

```yaml
---
title: Como registrar um pagamento
description: Aprenda a registrar pagamentos recebidos de seus clientes no Fiado Zap.
sidebar_position: 4
---
```

Actual fields must follow the existing repository configuration.

Do not introduce arbitrary metadata keys without checking Docusaurus/configuration support.

---

# Descriptions

Article descriptions should briefly explain the benefit or purpose of the page.

Prefer:

```text
Aprenda a registrar um pagamento recebido e manter o saldo do cliente atualizado.
```

Avoid:

```text
Página sobre pagamentos.
```

Descriptions may also influence search and SEO.

---

# Headings

Use headings to make long articles easy to scan.

Maintain logical hierarchy.

Do not jump unnecessarily from:

```text
## Heading
```

to:

```text
#### Heading
```

without structural reason.

Normally each documentation page should have one primary page title managed consistently with Docusaurus/front matter.

---

# Bold Text

Use bold primarily for:

* Button names
* Menu names
* Important UI labels
* Key warnings

Example:

```md
Toque em **Registrar pagamento**.
```

Do not bold entire paragraphs.

---

# Code Formatting

Use inline code formatting for technical identifiers.

Examples:

```md
`companyOwnerId`
`userOwnerId`
`checkoutId`
```

Do not use code formatting for ordinary product labels users see in the interface.

---

# Admonitions

Docusaurus admonitions may be useful for important contextual information.

Examples:

```md
:::tip
...
```
