# Who Gets Heard: The Work Behind the Work

> A process-first guide to understanding organisational politics without reducing every ambiguity to motive, or every informal influence to misconduct.

[**Read online**](https://lib-port.github.io/who-gets-heard/) · [**Start with the introduction**](https://lib-port.github.io/who-gets-heard/introduction)

Who hears about an opportunity first? Which concern receives time on the agenda? Whose name becomes attached to success, whose shoulders carry failure, and who can question the process?

*Who Gets Heard* is a practical book about the arrangements behind everyday organisational life. It shows how influence moves through access, information, decisions, resources, recognition, reputation, and voice—and how to examine that movement without turning uncertainty into accusation.

## See influence clearly without becoming cynical

Every organisation must allocate attention, authority, opportunity, time, money, and recognition. Formal rules never settle every choice, so relationships and informal processes inevitably matter. They can help important knowledge travel and good work gain support; they can also make access dependent, hide commitments, concentrate credit, or raise the cost of disagreement.

The book looks at three overlapping maps of the workplace: the **formal map** of roles and rules, the **relationship map** of trust and access, and the **process map** showing how a particular piece of work actually travels. It concentrates on that third map because observable processes can be discussed, compared, corrected, and redesigned without pretending to read anyone's mind.

## A six-part lens

The book returns to six questions that slow down interpretation and reveal the smallest useful improvement:

1. **Describe the process.** Name the decision, opportunity, meeting, record, resource, or assignment precisely.
2. **Find the expectation.** Identify the written rule, established practice, or clearly communicated arrangement.
3. **Choose a fair comparison.** Compare similar roles, risks, deadlines, decisions, or projects.
4. **Test ordinary explanations.** Consider constraints, mistakes, incomplete information, and legitimate exceptions.
5. **Assess the consequence.** Ask what changed: the decision, the work, the credit, the risk, or the chance to respond.
6. **Look for correction.** Find out whether an error could be raised, answered, repaired, and prevented from recurring.

Together, these questions offer a firmer place to stand: realistic about power, careful about evidence, and generous about uncertainty.

## Who this book is for

This framework is for individual contributors, managers, facilitators, employee representatives, organisational practitioners, senior leaders, and anyone trying to make consequential work more visible, discussable, and accountable. Use it to prepare a difficult conversation, improve a recurring decision, examine a pattern without overstating the evidence, or design an influence system people can trust.

## Contents

The chapters follow the movement of work from possibility to memory. Read them in order or begin with the process closest to the problem in front of you.

| Section | Focus |
| --- | --- |
| [Introduction: The Work Behind the Work](docs/00-introduction.md) | Introduces the formal, relationship, and process maps; the six-part lens; and the framework's limits. |
| [Chapter 1: Access and Opportunity](docs/01-access-and-opportunity.md) | Examines forums, gatekeepers, sponsorship, representation, and routes to opportunity. |
| [Chapter 2: Information](docs/02-information.md) | Explores distribution, context, timing, version control, uncertainty, and usable access to knowledge. |
| [Chapter 3: Agendas and Attention](docs/03-agendas-and-attention.md) | Looks at framing, sequence, urgency, scope, and the organisational consequences of limited attention. |
| [Chapter 4: Sponsorship and Coalitions](docs/04-sponsorship-and-coalitions.md) | Distinguishes constructive advocacy from opaque, overstated, conditional, or bundled support. |
| [Chapter 5: Decision Processes](docs/05-decision-processes.md) | Covers authority, forums, membership, criteria, records, delegation, review, and appeal. |
| [Chapter 6: Resources and Dependencies](docs/06-resources-and-dependencies.md) | Tests claims about scarcity, capacity, bottlenecks, critical paths, trade-offs, and resilience. |
| [Chapter 7: Credit and Visibility](docs/07-credit-and-visibility.md) | Connects contribution with recognition, authorship, presentation opportunities, and the visibility of enabling work. |
| [Chapter 8: Accountability](docs/08-accountability.md) | Clarifies ownership, authority, resources, blame, consequences, learning, and repair. |
| [Chapter 9: Reputation and Legitimacy](docs/09-reputation-and-legitimacy.md) | Examines labels, credibility, status, expertise standards, escalation, and the possibility of revision. |
| [Chapter 10: Participation and Challenge](docs/10-participation-and-challenge.md) | Asks whether affected people can contribute, disagree, seek review, and receive meaningful closure. |
| [Chapter 11: Entrenchment and Continuity](docs/11-entrenchment-and-continuity.md) | Studies concentrated decision rights and knowledge, succession, documentation, delegation, and cross-training. |
| [Chapter 12: Narratives and Outcomes](docs/12-narratives-and-outcomes.md) | Explores measures, success stories, retrospective reclassification, dissent, alternatives, and honest outcome accounts. |
| [Conclusion: Building Influence Systems People Can Trust](docs/13-conclusion.md) | Brings the lenses together through six practical records, role-based actions, and a twelve-week reset. |

## What each chapter offers

Most chapters combine:

- a fictional composite workplace scene;
- five recurring process patterns;
- legitimate explanations and ethical limits;
- proportionate responses for individuals, managers, and organisations;
- a practical exercise; and
- research endnotes with links to supporting sources.

If you begin with a particular chapter, return to the [introduction](docs/00-introduction.md) for the full method and its safeguards.

[**Read online**](https://lib-port.github.io/who-gets-heard/) · [**Begin with the introduction**](https://lib-port.github.io/who-gets-heard/introduction)

## Use with care

Patterns in this book are starting points for inquiry, not proof of motive, misconduct, discrimination, retaliation, or legal liability. Do not use the framework to diagnose personalities, create unofficial dossiers, bypass privacy or workplace rules, or delay urgent help. Matters involving immediate danger, violence, harassment, discrimination, protected reporting, serious health concerns, privacy or security breaches, criminal conduct, or legal deadlines may require prompt support from an appropriate qualified person or authority.

The book provides process questions and organisational guidance. It is not legal advice, clinical advice, or an investigation protocol.

## Website development

The online edition is built with [Docusaurus](https://docusaurus.io/). The custom landing page is in `src/pages`, and the book chapters are in `docs`.

Use Node.js 24 or later, then install the dependencies and start the local development server:

```sh
npm install
npm start
```

Create and preview the production build with:

```sh
npm run build
npm run serve
```

The production build checks links and anchors. Pushes to `main` that change the site source, documentation, static assets, or configuration are deployed automatically to [GitHub Pages](https://lib-port.github.io/who-gets-heard/) by the Pages workflow.

## Repository automation

Pushes to `main` are mirrored to the matching [`lib-port/who-gets-heard` project on GitLab](https://gitlab.com/lib-port/who-gets-heard). The mirror workflow requires the repository secret `GITLAB_MIRROR_SSH_KEY`, verifies GitLab's SSH host key, updates only the `main` branch, and confirms the mirrored commit after each push.

After each mirror run, the cleanup workflow removes older completed GitHub Actions runs while retaining the latest completed run for every workflow. Both workflows can also be started manually from the Actions tab.

## Licence

Copyright © 2026 lib-port.

The book manuscript and this landing page are licensed under the [Creative Commons Attribution 4.0 International licence](https://creativecommons.org/licenses/by/4.0/). You may share and adapt them, including for commercial purposes, provided you give appropriate credit, link to the licence, and indicate whether changes were made.

Suggested attribution:

> [*Who Gets Heard: The Work Behind the Work*](https://github.com/lib-port/who-gets-heard) by [lib-port](https://github.com/lib-port), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: [describe any changes made, or state "none"].

See the [full licence terms](LICENSE) for the precise scope.
