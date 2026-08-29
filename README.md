# Who Gets Heard

## The Work Behind the Work

[![GitHub Pages deployment](https://github.com/lib-port/who-gets-heard/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/lib-port/who-gets-heard/actions/workflows/deploy-pages.yml)

*A practical, process-first guide to understanding influence at work without treating every ambiguity as evidence of bad intent.*

[Read the online edition](https://lib-port.github.io/who-gets-heard/) · [Begin with the introduction](https://lib-port.github.io/who-gets-heard/introduction)

## About the book

Workplaces continually distribute attention, information, authority, opportunity, resources and recognition. Written policies describe only part of that activity: relationships and informal processes also affect which knowledge travels, which concerns receive attention and which accounts become authoritative.

*Who Gets Heard* offers a disciplined way to examine those processes. It helps readers separate observable events from interpretations, compare like cases, test ordinary explanations and identify proportionate improvements. The aim is neither cynicism nor naïvety, but a clearer understanding of how work actually moves through an organisation.

## The framework

The book considers three overlapping views of a workplace:

- the **formal view** of roles, policies and authority;
- the **relationship view** of trust, history, expertise and access; and
- the **process view** of how a specific decision, opportunity or piece of work travels.

Its six-part lens asks readers to:

1. describe the process precisely;
2. identify the relevant rule or expectation;
3. choose a fair comparison;
4. test ordinary explanations and legitimate constraints;
5. assess the practical consequence; and
6. determine whether correction was possible.

These questions are intended for employees raising a concern, managers responsible for recurring processes and leaders designing systems that people can understand and trust.

## Contents

The online edition can be read from beginning to end or used as a reference for a particular workplace process.

| Section | What it examines |
| --- | --- |
| [Introduction: The Work Behind the Work](docs/00-introduction.md) | The three workplace views, six-part lens and limits of process-based analysis. |
| [Chapter 1: Access and Opportunity](docs/01-access-and-opportunity.md) | Entry to forums, decision-makers, sponsorship and development opportunities. |
| [Chapter 2: Information](docs/02-information.md) | The distribution, timing, context and usability of organisational knowledge. |
| [Chapter 3: Agendas and Attention](docs/03-agendas-and-attention.md) | How framing, sequence, scope and urgency direct limited attention. |
| [Chapter 4: Sponsorship and Coalitions](docs/04-sponsorship-and-coalitions.md) | Advocacy, alliances and the conditions attached to support. |
| [Chapter 5: Decision Processes](docs/05-decision-processes.md) | Authority, criteria, consultation, records, review and appeal. |
| [Chapter 6: Resources and Dependencies](docs/06-resources-and-dependencies.md) | Scarcity claims, bottlenecks, trade-offs and organisational resilience. |
| [Chapter 7: Credit and Visibility](docs/07-credit-and-visibility.md) | Attribution, authorship, presentation and recognition of enabling work. |
| [Chapter 8: Accountability](docs/08-accountability.md) | The relationship between ownership, authority, resources, consequences and repair. |
| [Chapter 9: Reputation and Legitimacy](docs/09-reputation-and-legitimacy.md) | Credibility, labels, expertise, status and the ability to revise a judgement. |
| [Chapter 10: Participation and Challenge](docs/10-participation-and-challenge.md) | Whether people can contribute, disagree, request review and receive closure. |
| [Chapter 11: Entrenchment and Continuity](docs/11-entrenchment-and-continuity.md) | Concentrated knowledge or authority, succession, delegation and cross-training. |
| [Chapter 12: Narratives and Outcomes](docs/12-narratives-and-outcomes.md) | Measures, retrospective accounts, dissent and competing explanations of results. |
| [Conclusion: Building Influence Systems People Can Trust](docs/13-conclusion.md) | Practical records, role-specific actions and a twelve-week organisational reset. |

## Use responsibly

The patterns described in the book are prompts for further inquiry, not proof of motive, misconduct, discrimination, retaliation or legal liability. The framework is not a personality assessment, an investigation protocol or a substitute for legal or clinical advice.

Concerns involving immediate danger, violence, harassment, discrimination, protected reporting, serious health risks, privacy or security breaches, suspected criminal conduct or legal deadlines may require prompt help from an appropriately qualified person or authority.

## Site maintenance

The online edition is a [Docusaurus](https://docusaurus.io/) site. Local development requires Node.js 24 or later; the expected version is recorded in [`.node-version`](.node-version).

Install the dependencies and start the development server:

```sh
npm install
npm start
```

Build and preview the production site:

```sh
npm run build
npm run serve
```

The main project locations are:

| Path | Purpose |
| --- | --- |
| [`docs/`](docs/) | Book manuscript and chapter metadata. |
| [`src/pages/`](src/pages/) | Custom website landing page and its styles. |
| [`static/`](static/) | Files copied directly into the generated site. |
| [`docusaurus.config.js`](docusaurus.config.js) | Site metadata, navigation and Docusaurus settings. |
| [`sidebars.js`](sidebars.js) | Automatically generated book navigation. |

## Automation

Changes to the site source on `main` are built and published to GitHub Pages by the [deployment workflow](.github/workflows/deploy-pages.yml). A separate workflow mirrors `main` to the [`lib-port/who-gets-heard` GitLab project](https://gitlab.com/lib-port/who-gets-heard). After a mirror run, the clean-up workflow retains the newest completed run for each GitHub Actions workflow and removes older completed runs.

## Licence

Copyright © 2026 lib-port.

The [Creative Commons Attribution 4.0 International licence](LICENSE) applies only to this README and the manuscript files from `docs/00-introduction.md` through `docs/13-conclusion.md`. It does not license the repository's other files. See the licence text for the precise scope and suggested attribution.
