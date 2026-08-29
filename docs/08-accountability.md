# Chapter 8: Accountability

## The outage with twelve owners

A customer portal fails for three hours on a Monday morning. Tariq, the service manager, coordinates the response. The outage begins after a software release, but several safeguards also fail: monitoring did not alert, the rollback guide was outdated, vendor support was slow, and a change approver misunderstood the release window.

At the first review, twelve people are listed as “owners.” No one can say who was accountable for the final go/no-go decision. The incident timeline includes Tariq’s late response to one message but omits that he was not on the release notification list. A director asks Tariq to produce the remediation plan, although he controls neither the development team nor the budget.

The organization has managed to create both too much accountability and too little. Responsibility is spread so widely that no one owns the system, then concentrated on the visible person who coordinated the response. Tariq can assign actions, but he cannot compel the teams to complete them.

Accountability means an expectation that a person or body will explain and answer for conduct, decisions, or outcomes to an audience with some ability to judge or respond. It is not identical to responsibility, blame, or task assignment. A person can perform a task without owning the result. A leader can be accountable for a systemfailure without having personally caused it.

Research on accountability finds that its effects vary with the audience, timing, standards, and decision environment; accountability does not automatically improve judgment.[^1] Poorly designed accountability can produce defensiveness, conformity, excessive paperwork, or superficial adherence to safety. Well-designed accountability connects authority, evidence, explanation, consequence, and learning.

## Four questions before assigning ownership

Before saying “You own this,” ask:

1. **Control:** what choices can the person make?
2. **Resources:** what people, money, information, and access can they use?
3. **Obligation:** what result or standard must they answer for?
4. **Review:** by whom, when, and with what possible consequence?

If obligation greatly exceeds control and resources, the assignment may create a convenient target rather than an effective owner. If control exists without review, power can operate without accountability.

This chapter examines five patterns: unclear ownership, uneven records, responsibility diffused until no one can answer, shared failure concentrated on one role, and remediation assigned without the means to repair.

## 1. Leaving ownership unclear

Ambiguous ownership often starts with collaborative language: “We all own quality,” “The leadership team is responsible,” “Operations and technology will work it out.” Shared commitment is valuable. Shared final authority is often a failure of accountability and control.

Distinguish at least four roles:

- **Decision owner:** authorised to choose.
- **Delivery owner:** accountable for producing the agreed result.
- **Task owner:** responsible for a defined action.
- **Control or review owner:** independently checks a requirement or risk.

One person may hold several roles, but they should not be blurred. A compliance reviewer who can stop a release may own the compliance decision without owning delivery. A service manager may coordinate incident response without owning the code change that caused it.

Tools such as RACI charts (responsible, accountable, consulted, informed) can help, but the letters are not magic. Teams often assign several people “accountable” to avoid a hard choice or mark everyone “consulted” without meaningfully consulting them. Plain language is better: “Tariq coordinates the incident; the release manager decides rollback; the platform director owns restoration; security must approve any emergency access.”

Ownership should include triggers and handoffs. Who owns a risk while it is being assessed? At what severity does it pass to another role? Who confirms that handoff occurred? Many failures happen in the space between owners, not inside a role.

If ownership is unclear during an urgent event, establish temporary command explicitly and review it afterward. Do not spend the crisis litigating the organization chart. “For this incident, Maya is the decision lead until restoration; domain owners advise and execute” can create enough clarity to act.

## 2. Keeping an uneven record

Records shape accountability because later reviewers cannot evaluate what they cannot see. An uneven record preserves some actions, warnings, or failures and omits others in ways that distort the event.

Selection is unavoidable. An incident timeline cannot reproduce every message. A performance review cannot list every day. The standard is material relevance: include facts necessary to understand cause, control, response, and decision.

In Tariq’s case, his slow reply is relevant. So is the missing notification. Recording one without the other converts a system condition into a personal flaw. Similarly, a project review that lists missed delivery dates but omits approved scope changes will misstate performance. A complaint file that preserves the accusation but not the response creates a lasting bias.

Use a record structure that separates:

- event or requirement;
- time and source;
- action taken;
- context or dependency;
- decision and owner;
- unresolved question;
- correction or later evidence.

Invite factual correction from materially involved people before finalising a high-stakes record. This is not a veto over findings. It catches wrong dates, missing context, and ambiguous roles. Keep versions and note changes rather than quietly rewriting history.

Privacy and relevance limit participation. A person may correct their part without receiving confidential information about others. An investigator or authorized reviewer may need to hold the complete record. Do not circulate sensitive material simply in the name of transparency.

## 3. Spreading responsibility until no one can answer

Responsibility diffusion occurs when many people could act and each assumes someone else will. Classic social-psychological research on bystander intervention demonstrated how the presence of others can reduce an individual’s sense of personal responsibility in an emergency.[^2] Workplace systems are more complex than laboratory emergencies, but the coordination lesson is familiar: a group alert without a named owner can become no alert at all.

Diffusion also appears through committees. A risk is “with governance,” a hiring delay is “with the business,” or a policy exception is “under review.” These phrases name a location, not an accountable person or decision date.

Counter diffusion with explicit acceptance. A task is not assigned when it is sent; it is assigned when an authorized person acknowledges the obligation, deadline, and escalation route. Shared inboxes and queues need duty ownership, service standards, and a method for aging work.

For a decision, record one accountable role even when many participate. This does not mean one person caused every outcome. It means someone must ensure that evidence is assembled, authority is exercised, and the result is communicated.

Managers should be wary of “collective accountability” used to protect senior authority. If a leadership team votes, record the vote or the chair’s decision under the team’s mandate. If an executive overrules the group, record that. If everyone is said to own the result while only one person could choose, the language hides the decision right.

## 4. Placing a shared failure on one role

Blame concentration is the mirror image of diffusion. After a bad outcome, the organization identifies a visible, lower-status, or administratively convenient person and treats their action as the whole explanation.

A person may genuinely make a serious error. Process analysis is not a promise that no one will face consequence. It asks whether the evaluation considers the person’s duty, training, information, control, workload, supervision, system design, and the treatment of comparable conduct.

Separate three questions:

1. What happened and what conditions produced it?
2. Did a person’s conduct depart from a clear and reasonable expectation?
3. What response will reduce recurrence and address responsibility fairly?

Collapsing the questions encourages a search for a culprit before the system is understood. Conversely, using “system failure” to excuse reckless or knowing conduct prevents accountability. Both individual and system factors can be material.

Failure-learning research distinguishes process quality from outcome: a sound process can meet an adverse result, while an erroneous process can sometimes get lucky.[^3] Review what was knowable and controllable at the time. Do not let the severity of the outcome alone determine how negligent a prior choice appears.

Compare similar cases. Were others who made the same error coached while this person was disciplined? Did leaders receive a different standard? Close comparisons can expose selective blame, but they must account for consequence, history, role, intent where established, and policy.

## 5. Giving corrective work to someone without the means to fix it

After failure, organizations generate action lists. The person nearest the problem is often named owner even when the action requires authority, budget, or cooperation they do not possess. This produces overdue remediation and another apparent performance failure.

Every corrective action needs:

- a result, not merely an activity;
- an owner with authority;
- resources and dependencies;
- a due date tied to risk;
- evidence of completion;
- a verifier where independence matters;
- a route for blocked work.

“Tariq to improve monitoring” is not actionable if the platform team owns the tool and finance owns the budget. A better structure is: “Platform director to implement severity-one alerting by 30 June; Tariq to define service thresholds by 15 May; technology risk to verify in a failover test.”

The action owner should accept the assignment. If they cannot, the decision owner must resolve the constraint rather than marking refusal. Remediation meetings should examine blocked dependencies, not merely color overdue items red.

Avoid assigning every action to the person who wrote the report. Analysts and incident managers can coordinate, but line owners must own changes in their systems. Otherwise, accountability accumulates in assurance functions while operational authority remains elsewhere.

## Accountability is a relationship, not a spreadsheet

Dashboards help track commitments. They cannot create the social conditions for honest explanation. If every admission is punished, records will become defensive. If every explanation is accepted without challenge, accountability becomes theater.

The accountable conversation needs a clear audience and standard. The reviewer should ask for reasoning, evidence, uncertainty, and learning—not demand certainty that did not exist. The owner should explain choices without shifting every consequence to context. Both should distinguish justification from excuse.

Psychological safety and accountability are sometimes presented as opposites. They are better understood as complementary when well designed. Safety supports candid reporting, questions, and admission of mistakes; accountability establishes that work still has standards and consequences. Research reviews on psychological safety emphasize that it is not simple comfort or permissiveness.[^4]

A team can say: “You will not be humiliated for reporting an error. We will examine what happened. If you knowingly bypassed a critical control, that will still matter.” The credibility of this statement depends on consistent treatment, not posters.

## A learning review is not automatically a disciplinary review

Different processes have different purposes. A learning review asks how an event occurred and how to reduce recurrence. A disciplinary process asks whether conduct breached an expectation and what response is appropriate. A legal, safety, regulatory, or safeguarding investigation may have additional duties.

Combining purposes without warning undermines candor and fairness. Participants should know which process they are entering, how information may be used, what confidentiality applies, and what representation or support is available. Organizations cannot always promise that serious evidence discovered in a learning review will have no consequence. They can state the limits honestly.

Where possible, begin with fact preservation and immediate safety, then decide which authorized processes apply. Do not improvise immunity or punishment. Follow relevant law, policy, professional standards, and agreements.

Learning reviews should include successful recovery, near misses, and conditions that prevented worse harm. If they examine only individual mistakes, the organization will miss resilient practices worth strengthening.

## Common accountability failures

The first is assigning ownership to a committee name with no person responsible for movement. Name a chair or action owner under the committee’s authority.

The second is measuring task completion rather than risk reduction. “Training delivered” does not show that people can perform the control. Define evidence of effect.

The third is equating the nearest person with the controlling person. Trace authority and system conditions.

The fourth is asking a junior employee to challenge an uncooperative senior dependency without sponsorship. The action owner’s manager must resolve authority barriers.

The fifth is preserving only the organization’s account. Give affected people a fair opportunity to correct material facts and record dissent where appropriate.

The sixth is treating apology as the end of repair. An apology may matter; controls, restitution, restored records, workload changes, or review may also be needed.

The seventh is making accountability retrospective only. Clarify roles, standards, and review before work begins. Surprise accountability invites defensiveness.

## A response ladder when blame is forming

**Stabilize and preserve.** Address immediate safety or service needs and preserve authorized, necessary evidence.

**Clarify the process.** Determine whether the purpose is learning, performance management, discipline, investigation, or regulatory response.

**Map control and context.** Identify decisions, roles, information, workload, handoffs, and safeguards.

**Correct material records.** Add missing notification, approval, constraint, or response with source and date.

**Separate system and conduct questions.** Examine both without using one to erase the other.

**Assign repair with authority.** Move actions to owners who control the resources and dependencies.

**Use representation and specialist advice.** Serious allegations, safety, discrimination, retaliation, privacy, professional discipline, or legal deadlines require appropriate formal support.

## For managers: test an ownership assignment

Before assigning a consequential outcome, complete this sentence:

> **[Role]** is accountable for **[specific result]** because they can decide **[choices]**, control or obtain **[resources]**, must consult **[roles]**, and will report to **[audience]** by **[time]**. If **[threshold or exception]** occurs, authority moves to **[role]**.

If you cannot fill the choices and resources, you may be assigning exposure rather than ownership. If the role can decide but no audience or standard exists, you may be granting power without accountability.

For remediation, ask the owner to restate the result and blockers. Provide a named escalation. Close actions only when evidence shows the risk or failure mode has been addressed, not when a document has been uploaded.

Tariq’s incident review is revised. The platform director owns restoration and monitoring controls; the release manager owns go/no-go; Tariq owns customer-service coordination. The timeline adds the missing notification and outdated rollback guide. Tariq contributes to the remediation plan but does not carry actions outside his authority. The review still identifies his delayed reply. It now explains the event rather than using one fact as its conclusion.

## Accountability upward, downward, and sideways

People usually imagine accountability flowing upward: an employee explains work to a manager. Organizations also need downward and sideways accountability.

Downward accountability means leaders explain decisions to people who bear their consequences. A manager may retain authority to reorganize a team, but employees can reasonably expect the purpose, criteria, consultation scope, and support to be explained. This does not make every managerial choice negotiable. It prevents authority from becoming inscrutable.

Sideways accountability operates between functions. A shared service explains queue decisions to requesters; a product team answers to risk owners; a policy function responds to operational evidence. No reporting line may connect them. Service agreements, governance forums, and named escalation paths create the audience that hierarchy does not.

External accountability may involve customers, regulators, professional bodies, funders, partners, unions, communities, or the public. The standards and rights in those relationships can differ sharply from internal management. Do not assume that an internal sign-off satisfies an external duty.

A complete accountability map asks: who can require an explanation, against what standard, and what can they do with the answer? If the audience can neither evaluate nor respond, the process may be communication rather than accountability. Communication still has value; call it what it is.

## Consequence should follow purpose

Accountability discussions often jump from “who owns this?” to punishment. Consequence is broader. It can include correction, learning, restitution, changed authority, closer review, support, recognition, discipline, or no further action.

Choose a response based on purpose and evidence. If the problem is a knowledge gap, training and supervised practice may fit. If the standard was impossible under the workload, redesign demand. If someone knowingly falsified a critical record, a formal conduct response may be required. If harm occurred despite a sound process under unavoidable uncertainty, the right response may be care, learning, and updated controls—not blame.

Consistency does not mean identical consequence for every superficially similar event. Role, clarity of expectation, intent where properly established, prior support, impact, and comparators may matter. The decision-maker should be able to explain the relevant difference.

Proportionality also applies to public exposure. Publishing individual names may appear accountable but can discourage reporting, invade privacy, or concentrate blame. Use the least personal disclosure that meets the legitimate purpose, subject to legal and regulatory requirements. Internally, the authorized process may hold more detail than a broad learning report.

## Metrics can diffuse accountability too

Dashboards create the appearance that a number owns the truth. A target turns red, and someone is asked to explain. But the metric has designers: someone chose the denominator, threshold, data source, exclusion, and reporting delay.

When a metric is used for accountability, name its owner and limitations. Who validates it? Can the people judged by it correct data? Does it measure the outcome they control? What behavior might it encourage at the expense of unmeasured quality?

A call-center manager held accountable only for average handling time may shorten calls while unresolved problems increase. A recruiter measured only on time-to-hire may reduce consideration. The metric does not force these behaviors, but the accountability system makes them rational.

Use a balanced set sparingly. Add a quality or consequence measure where the main metric creates an obvious trade-off. Include narrative review for unusual cases. Do not respond to every limitation with another indicator until no one can understand the system.

When data change, preserve the old definition or restate history carefully. Otherwise, a manager may appear to improve or decline because the measurement changed. Chapter 12 returns to this problem as narrative control; here it matters because consequence may attach to the wrong explanation.

## A cross-functional action in full

Imagine an audit finds that customer refunds are delayed because approval passes through service, finance, fraud, and payments. The report assigns one action: “Head of Service to reduce refund time from twenty days to five.”

The head of service can improve intake but cannot change fraud thresholds or payment processing. If the action remains, she may chase peers, submit weekly status updates, and eventually be marked overdue. The nominal owner becomes accountable for other functions’ choices.

Redesign the action as an outcome with component authorities. The operations director owns the five-day result. Service owns complete intake within one day. Fraud owns a risk-based review standard within two days. Payments owns release within one day after approval. Finance supplies system funding. An independent control owner samples completion and fraud outcomes after three months.

Now delays can be located without treating every handoff as someone else’s problem. The operations director has authority to resolve priority conflicts. If the target proves unsafe or technically impossible, the director returns to the risk committee with evidence rather than asking the service head to absorb failure.

This design takes more words than “Head of Service to fix.” It is shorter than six months of red status and blame.

## Repair for the person who carried misplaced blame

Correcting a system does not automatically repair the effect on a person. A misleading incident report may have entered a performance review. Colleagues may remember the initial accusation, not the later nuance. The person may have lost an opportunity or endured unnecessary scrutiny.

Ask what record and audience were affected. Correct formal evaluations. Send an update to the relevant group. Restore an opportunity where possible. Offer support without implying that distress is the only harm. A private apology cannot repair a public attribution by itself.

The correction should avoid overclaiming innocence when facts remain mixed. “The first report placed primary responsibility on Tariq. The completed review found that release ownership sat elsewhere and that notification and rollback controls materially contributed. The performance note based on the initial account has been removed.” This is accurate and actionable.

Leaders may fear that correction undermines authority. In practice, refusing to correct an established error does more damage. A system that can revise its own account is more trustworthy than one that preserves certainty at a person’s expense.

If the matter involved a formal complaint, discipline, legal process, or protected data, repair should follow the authorized procedure. Do not improvise disclosure or delete required records.

## Questions an accountable leader asks

Before a problem:

- What outcome am I assigning, and what authority travels with it?
- Which handoff is most likely to fail?
- What information would I want someone to raise early?
- How will I respond when they do?

During a problem:

- Who is coordinating now, and who decides?
- What immediate harm must stop?
- Which facts are established, and which are assumptions?
- What evidence must be preserved lawfully?

After a problem:

- Did our record include context as well as actions?
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
4. relevant expectation;
5. system condition or dependency.

Mark what is established, disputed, and unknown. Then write two separate questions: “What should change in the system?” and “Does any conduct require a separate response?” Keeping both questions prevents easy blame and easy evasion.

Accountability shapes the official explanation of conduct. Before that explanation is complete, however, reputation often begins doing its own work. The next chapter examines how labels, status, and borrowed authority determine whose account sounds credible.

---
[^1]: Jennifer S. Lerner and Philip E. Tetlock, “Accounting for the Effects of Accountability,” *Psychological Bulletin* 125, no. 2 (1999): 255–275, [https://doi.org/10.1037/0033-2909.125.2.255](https://doi.org/10.1037/0033-2909.125.2.255).

[^2]: John M. Darley and Bibb Latané, “Bystander Intervention in Emergencies: Diffusion of Responsibility,” *Journal of Personality and Social Psychology* 8, no. 4, pt. 1 (1968): 377–383, [https://doi.org/10.1037/h0025589](https://doi.org/10.1037/h0025589). The chapter draws a limited coordination analogy; a workplace accountability system is not equivalent to the experimental emergencies studied.

[^3]: Kristina B. Dahlin, You-Ta Chuang, and Thomas J. Roulet, “Opportunity, Motivation, and Ability to Learn from Failures and Errors: Review, Synthesis, and Ways to Move Forward,” *Academy of Management Annals* 12, no. 1 (2018): 252–277, [https://doi.org/10.5465/annals.2016.0049](https://doi.org/10.5465/annals.2016.0049); Amy C. Edmondson, “Learning from Failure in Health Care: Frequent Opportunities, Pervasive Barriers,” *Quality and Safety in Health Care* 13, suppl. 2 (2004): ii3–ii9, [https://doi.org/10.1136/qshc.2003.009597](https://doi.org/10.1136/qshc.2003.009597).

[^4]: Amy C. Edmondson and Derrick P. Bransby, “Psychological Safety Comes of Age: Observed Themes in an Established Literature,” *Annual Review of Organizational Psychology and Organizational Behavior* 10 (2023): 55–78, [https://doi.org/10.1146/annurev-orgpsych-120920-055217](https://doi.org/10.1146/annurev-orgpsych-120920-055217).
