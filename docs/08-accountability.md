# Chapter 8: Accountability

## The outage with twelve owners

A customer portal fails for three hours on a Monday morning. Tariq, the service manager, coordinates the response. The outage begins after a software release, but several safeguards also fail: monitoring does not alert, the rollback guide is outdated, vendor support is slow, and a change approver misunderstands the release window.

At the first review, twelve people are listed as “owners.” No one can identify who was accountable for the final go/no-go decision. The incident timeline records Tariq's late response to one message but omits that he was not on the release notification list. A director asks him to produce the remediation plan, although he controls neither the development team nor the budget.

The organisation has created both too much accountability and too little. Responsibility is dispersed so widely that no one owns the system, then concentrated on the visible person who coordinated the response. Tariq can assign actions, but he cannot compel the teams to complete them.

Accountability is the expectation that a person or body will explain and answer for conduct, decisions, or outcomes to an audience able to judge or respond. It is not identical to responsibility, blame, or task assignment. Someone can perform a task without owning the result. A leader can be accountable for a system failure without having caused it personally.

Research shows that accountability's effects vary with the audience, timing, standards, and decision environment; accountability does not automatically improve judgement.[^1] Poor design can produce defensiveness, conformity, excessive paperwork, or superficial compliance. Good design connects authority, evidence, explanation, consequence, and learning.

## Four questions before assigning ownership

Before saying “You own this,” ask:

1. **Control:** Which choices can the person make?
2. **Resources:** Which people, funding, information, and access can they use?
3. **Obligation:** Which result or standard must they answer for?
4. **Review:** To whom, when, and with which possible consequences?

When obligation greatly exceeds control and resources, the assignment may create a convenient target rather than an effective owner. When control exists without review, power can operate without accountability.

Five recurring failures break this connection: unclear ownership, uneven records, responsibility diffused until no one can answer, shared failure concentrated on one role, and remediation assigned without the means to repair.

## 1. Ownership remains unclear

Ambiguous ownership often begins with collaborative language: “We all own quality,” “The leadership team is responsible,” or “Operations and technology will work it out.” Shared commitment is valuable. Shared final authority is often a failure of both accountability and control.

Distinguish at least four roles:

- **Decision owner:** Authorised to choose.
- **Delivery owner:** Accountable for producing the agreed result.
- **Task owner:** Responsible for a defined action.
- **Control or review owner:** Independently checks a requirement or risk.

One person may hold several roles, but the roles should not blur. A compliance reviewer who can stop a release may own the compliance decision without owning delivery. A service manager may coordinate an incident without owning the code change that caused it.

Tools such as RACI charts—responsible, accountable, consulted, informed—can help, but the letters are not magic. Teams often mark several people “accountable” to avoid a difficult choice or list everyone as “consulted” without meaningful consultation. Plain language is stronger: “Tariq coordinates the incident; the release manager decides rollback; the platform director owns restoration; security must approve emergency access.”

Ownership also needs triggers and handoffs. Who owns a risk while it is being assessed? At which severity does authority move to another role? Who confirms that the handoff occurred? Many failures arise between owners rather than within a role.

During an urgent event, establish temporary command explicitly and review it afterward. Do not spend the crisis litigating the organisation chart. “For this incident, Maya is the decision lead until restoration; domain owners advise and execute” may provide enough clarity to act.

## 2. The record captures only part of the event

Records shape accountability because reviewers cannot evaluate what they cannot see. An uneven record preserves some actions, warnings, or failures while omitting others in ways that distort the event.

Selection is unavoidable. An incident timeline cannot reproduce every message, and a performance review cannot list every day. The standard is material relevance: include the facts required to understand cause, control, response, and decision.

Tariq's late reply is relevant. So is the missing notification. Recording one without the other turns a system condition into a personal flaw. A project review that lists missed dates but omits approved scope changes misstates performance. A complaint file that preserves the allegation but not the response creates a lasting bias.

Use a structure that separates:

- the event or requirement;
- time and source;
- action taken;
- context or dependency;
- decision and owner;
- unresolved question; and
- correction or later evidence.

Invite materially involved people to correct factual errors before finalising a high-stakes record. This is not a veto over the findings. It catches wrong dates, missing context, and ambiguous roles. Keep versions and record changes rather than quietly rewriting history.

Privacy and relevance limit access. A person may correct their part without receiving confidential information about others. An investigator or authorised reviewer may need the complete record. Do not circulate sensitive material merely in the name of transparency.

## 3. Responsibility spreads until no one can answer

Responsibility diffusion occurs when many people could act and each assumes that someone else will. Classic social-psychological research on bystander intervention showed how the presence of others can reduce an individual's sense of responsibility during an emergency.[^2] Workplace systems are more complex than laboratory emergencies, but the coordination lesson is familiar: a group alert without a named owner can become no alert at all.

Diffusion also appears through committee language. A risk is “with governance,” a hiring delay is “with the business,” or a policy exception is “under review.” These phrases name a location, not an accountable person or decision date.

Counter diffusion with explicit acceptance. A task is not assigned when it is sent; it is assigned when an authorised person acknowledges the obligation, deadline, and escalation route. Shared inboxes and queues need duty ownership, service standards, and a way to age work.

For a decision, record one accountable role even when many people participate. This does not mean that one person caused every outcome. It means someone must ensure that evidence is assembled, authority is exercised, and the result is communicated.

Beware of “collective accountability” used to obscure senior authority. If a leadership team votes, record the vote or the chair's decision under the team's mandate. If an executive overrules the group, record that. If everyone supposedly owns the result but only one person could choose, the language hides the decision right.

## 4. A shared failure is placed on one role

Blame concentration is the mirror image of diffusion. After a bad outcome, the organisation selects a visible, lower-status, or administratively convenient person and treats that person's action as the complete explanation.

A person may genuinely make a serious error. Process analysis is not a promise that no one will face consequences. It asks whether the evaluation considers the person's duty, training, information, control, workload, supervision, system design, and the treatment of comparable conduct.

Separate three questions:

1. What happened, and which conditions produced it?
2. Did someone's conduct depart from a clear and reasonable expectation?
3. Which response will reduce recurrence and address responsibility fairly?

Collapsing these questions encourages a search for a culprit before the system is understood. Conversely, invoking “system failure” to excuse reckless or knowing conduct prevents accountability. Individual and system factors can both be material.

Research on learning from failure distinguishes process from outcome: a sound process can produce an adverse result, while a faulty process can sometimes get lucky.[^3] Review what was knowable and controllable at the time. Do not let the severity of the outcome alone determine how negligent an earlier choice appears.

Compare similar cases carefully. Were others who made the same error coached while this person was disciplined? Did leaders receive another standard? Close comparisons can expose selective blame, but consequence, history, role, intent where established, and policy may justify differences.

## 5. Corrective work lacks the means to repair

After failure, organisations generate action lists. The person closest to the problem often becomes the owner even when the action requires authority, funding, or cooperation they do not possess. The result is overdue remediation followed by another apparent performance failure.

Every corrective action needs:

- a result rather than an activity;
- an owner with authority;
- resources and dependencies;
- a due date tied to risk;
- evidence of completion;
- a verifier when independence matters; and
- a route for blocked work.

“Tariq to improve monitoring” is not actionable if the platform team owns the tool and finance owns the budget. A stronger design is: “Platform director to implement severity-one alerting by 30 June; Tariq to define service thresholds by 15 May; technology risk to verify through a failover test.”

The owner should accept the assignment. If they cannot, the decision owner must resolve the constraint instead of treating refusal as the problem. Remediation meetings should examine blocked dependencies, not merely colour overdue items red.

Do not assign every action to the person who wrote the report. Analysts and incident managers may coordinate, but line owners must own changes to their systems. Otherwise, accountability accumulates in assurance functions while operational authority remains elsewhere.

## Accountability is a relationship, not a spreadsheet

Dashboards can track commitments; they cannot create the social conditions for honest explanation. If every admission is punished, records become defensive. If every explanation is accepted without challenge, accountability becomes theatre.

An accountable conversation needs a clear audience and standard. The reviewer asks for reasoning, evidence, uncertainty, and learning rather than certainty that never existed. The owner explains choices without attributing every consequence to context. Both distinguish justification from excuse.

Psychological safety and accountability are sometimes presented as opposites. Properly designed, they are complementary. Safety supports candid reporting, questions, and admission of error; accountability maintains standards and consequences. Research reviews emphasise that psychological safety is not mere comfort or permissiveness.[^4]

A team can say: “You will not be humiliated for reporting an error. We will examine what happened. If you knowingly bypassed a critical control, that will still matter.” Consistent treatment, not a poster, makes the statement credible.

## Learning, discipline, and investigation have different purposes

A learning review asks how an event occurred and how recurrence can be reduced. A disciplinary process asks whether conduct breached an expectation and which response is appropriate. Legal, safety, regulatory, safeguarding, and professional investigations may have additional duties.

Combining purposes without warning undermines candor and fairness. Participants should know which process they are entering, how information may be used, which confidentiality limits apply, and which representation or support is available. An organisation cannot always promise that serious evidence found during a learning review will have no consequence. It can state the limits honestly.

Where possible, preserve facts and address immediate safety first, then identify the authorised processes. Do not improvise immunity or punishment. Follow relevant law, policy, professional standards, and agreements.

Learning reviews should examine successful recovery, near misses, and the conditions that prevented worse harm. If they focus only on individual error, the organisation will miss resilient practices worth strengthening.

## Consequence should follow purpose and evidence

Accountability discussions often jump from “Who owns this?” to punishment. Consequence is broader: correction, learning, restitution, changed authority, closer review, support, recognition, discipline, or no further action.

Choose a response that fits the purpose and evidence. A knowledge gap may call for training and supervised practice. An impossible workload may require redesigned demand. Knowingly falsifying a critical record may require a formal conduct response. Harm that arose despite a sound process under unavoidable uncertainty may call for care, learning, and updated controls rather than blame.

Consistency does not mean identical consequences for superficially similar events. Role, clarity of expectation, intent where properly established, prior support, impact, and comparators may matter. The decision-maker should be able to explain the relevant difference.

Proportionality also applies to disclosure. Publishing individual names may appear accountable but can discourage reporting, invade privacy, or concentrate blame. Use the least personal disclosure that serves the legitimate purpose, subject to legal and regulatory duties. An authorised internal process may hold more detail than a broad learning report.

## Accountability also travels downward and sideways

People usually imagine accountability flowing upward: an employee explains work to a manager. Organisations also need downward and sideways accountability.

**Downward accountability** means leaders explain decisions to people who bear their consequences. A manager may retain authority to reorganise a team, but employees can reasonably expect an explanation of the purpose, criteria, consultation scope, and support. This does not make every choice negotiable. It prevents authority from becoming inscrutable.

**Sideways accountability** operates between functions. A shared service explains queue decisions to requesters; a product team answers to risk owners; a policy function responds to operational evidence. No reporting line may connect them. Service agreements, governance forums, and named escalation paths create the audience that hierarchy does not.

**External accountability** may involve customers, regulators, professional bodies, funders, partners, unions, communities, or the public. The standards and rights in these relationships may differ sharply from internal management. An internal sign-off does not necessarily satisfy an external duty.

A complete map asks: who may require an explanation, against which standard, and what can they do with the answer? If the audience can neither evaluate nor respond, the process may be communication rather than accountability. Communication still has value; call it what it is.

## Metrics have owners and consequences

Dashboards can make a number appear to own the truth. A target turns red, and someone is asked to explain. Yet someone chose the denominator, threshold, source, exclusions, and reporting delay.

When a metric drives accountability, name its owner and limitations. Who validates it? Can the people judged by it correct the data? Does it measure an outcome they control? Which behaviour might it encourage at the expense of unmeasured quality?

A call-centre manager judged only on average handling time may shorten calls while unresolved problems rise. A recruiter measured only on time-to-hire may narrow consideration. The metric does not compel these choices, but the accountability system makes them rational.

Use a balanced set sparingly. Add a quality or consequence measure where the main indicator creates an obvious trade-off. Include narrative review for unusual cases. Do not answer every limitation with another metric until no one can understand the system.

When a definition changes, preserve the old one or restate history carefully. Otherwise, performance may appear to improve or decline because the measurement changed. Chapter 12 returns to this problem as narrative control; here it matters because consequences may attach to the wrong explanation.

## A cross-functional action needs component authority

Imagine an audit finds that customer refunds are delayed because approval passes through service, finance, fraud, and payments. The report assigns one action: “Head of Service to reduce refund time from twenty days to five.”

The head of service can improve intake but cannot change fraud thresholds or payment processing. She may spend months chasing peers and submitting status reports before being marked overdue. The nominal owner becomes accountable for other functions' choices.

Redesign the action as an outcome with component authorities. The operations director owns the five-day result. Service owns complete intake within one day. Fraud owns a risk-based review standard within two days. Payments owns release within one day of approval. Finance supplies system funding. An independent control owner samples completion and fraud outcomes after three months.

Now delays can be located without treating every handoff as someone else's problem. The operations director has authority to resolve priority conflicts. If the target proves unsafe or technically impossible, the director returns to the risk committee with evidence instead of asking the service head to absorb failure.

This design takes more words than “Head of Service to fix.” It is shorter than six months of red status and blame.

## Repair the effects of misplaced blame

Correcting a system does not automatically repair the effect on a person. A misleading incident report may have entered a performance review. Colleagues may remember the first accusation rather than the later nuance. The person may have lost an opportunity or endured unnecessary scrutiny.

Identify the affected record and audience. Correct formal evaluations. Update the relevant group. Restore an opportunity where possible. Offer support without implying that distress is the only harm. A private apology cannot repair a public attribution by itself.

The correction should not overstate innocence when the evidence remains mixed. “The first report placed primary responsibility on Tariq. The completed review found that release ownership sat elsewhere and that notification and rollback controls materially contributed. The performance note based on the initial account has been removed.” This is both precise and actionable.

Leaders may fear that correction undermines authority. Refusing to correct an established error does more damage. A system capable of revising its own account is more trustworthy than one that preserves certainty at a person's expense.

When a formal complaint, discipline, legal process, or protected data is involved, follow the authorised repair procedure. Do not improvise disclosure or delete required records.

## Common accountability failures

Common failures include:

- assigning ownership to a committee name without a person responsible for movement;
- measuring task completion rather than risk reduction;
- equating the nearest person with the controlling person;
- asking a junior action owner to overcome an uncooperative senior dependency without sponsorship;
- preserving only the organisation's account rather than allowing material factual correction;
- treating apology as the end of repair; and
- making accountability retrospective rather than clarifying roles, standards, and review before work begins.

Each failure weakens the link between authority and answerability. The remedy is usually more specific ownership, evidence, review, or repair—not a louder demand that people “take accountability.”

## A response ladder when blame is forming

- **Stabilise and preserve.** Address immediate safety or service needs and preserve authorised, necessary evidence.
- **Clarify the process.** Establish whether the purpose is learning, performance management, discipline, investigation, or regulatory response.
- **Map control and context.** Identify decisions, roles, information, workload, handoffs, and safeguards.
- **Correct material records.** Add missing notification, approval, constraint, or response with its source and date.
- **Separate system and conduct questions.** Examine both without using one to erase the other.
- **Assign repair with authority.** Move actions to owners who control the necessary resources and dependencies.
- **Use representation and specialist advice.** Serious allegations, safety, discrimination, retaliation, privacy, professional discipline, or legal deadlines require appropriate formal support.

## For managers: test an ownership assignment

Before assigning a consequential outcome, complete this sentence:

> **[Role]** is accountable for **[specific result]** because they can decide **[choices]**, control or obtain **[resources]**, must consult **[roles]**, and will report to **[audience]** by **[time]**. If **[threshold or exception]** occurs, authority moves to **[role]**.

If you cannot fill in the choices and resources, you may be assigning exposure rather than ownership. If the role can decide but no audience or standard exists, you may be granting power without accountability.

For remediation, ask the owner to restate the result and blockers. Provide a named escalation route. Close the action only when evidence shows that the risk or failure mode has been addressed, not when someone uploads a document.

Tariq's incident review is revised. The platform director owns restoration and monitoring controls; the release manager owns go/no-go; Tariq owns customer-service coordination. The timeline adds the missing notification and outdated rollback guide. Tariq contributes to the remediation plan but does not carry actions outside his authority. The review still records his delayed reply. It now explains the event rather than using one fact as its conclusion.

## Questions an accountable leader asks

Before a problem:

- Which outcome am I assigning, and which authority travels with it?
- Which handoff is most likely to fail?
- Which information would I want someone to raise early?
- How will I respond when they do?

During a problem:

- Who is coordinating now, and who decides?
- Which immediate harm must stop?
- Which facts are established, and which are assumptions?
- Which evidence must be preserved lawfully?

After a problem:

- Did the record include context as well as actions?
- Are we judging conduct against a clear prior expectation?
- Does each corrective owner control the means?
- What did recovery reveal that deserves recognition?
- Who was affected by an inaccurate early story, and what repair is due?

These questions do not make accountability gentle. They make it capable of producing a reliable answer.

## Practice: turn a blame sentence into an accountability map

Start with a sentence such as “Tariq caused the outage” or “The team failed to deliver.” Create five rows:

1. decision or action;
2. person or role with authority;
3. information and resources available;
4. relevant expectation; and
5. system condition or dependency.

Mark each item as established, disputed, or unknown. Then write two separate questions: “What should change in the system?” and “Does any conduct require a separate response?” Keeping both questions prevents easy blame and easy evasion.

Accountability shapes the official explanation of conduct. Before that explanation is complete, reputation often begins doing its own work. The next chapter examines how labels, status, and borrowed authority influence whose account sounds credible.

[^1]: Jennifer S. Lerner and Philip E. Tetlock, “Accounting for the Effects of Accountability,” *Psychological Bulletin* 125, no. 2 (1999): 255–275, [https://doi.org/10.1037/0033-2909.125.2.255](https://doi.org/10.1037/0033-2909.125.2.255).

[^2]: John M. Darley and Bibb Latané, “Bystander Intervention in Emergencies: Diffusion of Responsibility,” *Journal of Personality and Social Psychology* 8, no. 4, pt. 1 (1968): 377–383, [https://doi.org/10.1037/h0025589](https://doi.org/10.1037/h0025589). The chapter draws a limited coordination analogy; a workplace accountability system is not equivalent to the experimental emergencies studied.

[^3]: Kristina B. Dahlin, You-Ta Chuang, and Thomas J. Roulet, “Opportunity, Motivation, and Ability to Learn from Failures and Errors: Review, Synthesis, and Ways to Move Forward,” *Academy of Management Annals* 12, no. 1 (2018): 252–277, [https://doi.org/10.5465/annals.2016.0049](https://doi.org/10.5465/annals.2016.0049); Amy C. Edmondson, “Learning from Failure in Health Care: Frequent Opportunities, Pervasive Barriers,” *Quality and Safety in Health Care* 13, suppl. 2 (2004): ii3–ii9, [https://doi.org/10.1136/qshc.2003.009597](https://doi.org/10.1136/qshc.2003.009597).

[^4]: Amy C. Edmondson and Derrick P. Bransby, “Psychological Safety Comes of Age: Observed Themes in an Established Literature,” *Annual Review of Organizational Psychology and Organizational Behavior* 10 (2023): 55–78, [https://doi.org/10.1146/annurev-orgpsych-120920-055217](https://doi.org/10.1146/annurev-orgpsych-120920-055217).
