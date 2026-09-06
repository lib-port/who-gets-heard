# Chapter 8: Accountability

## The outage with twelve owners

A customer portal fails for three hours on a Monday morning. Tariq, the service manager, coordinates the response. The outage begins after a software release, but several safeguards also fail: monitoring sends no alert, the rollback guide is outdated, vendor support is slow, and a change approver misunderstands the release window.

At the first review, 12 people are listed as “owners.” No one can identify who was accountable for the final go/no-go decision. The incident timeline records Tariq’s late response to a message but omits that he was not on the release notification list. A director asks him to produce the remediation plan, although he controls neither the development team nor the budget.

The organisation first spreads ownership across 12 people, then asks the visible coordinator to answer for the system. Tariq can assign actions but cannot require the teams to complete them. His obligation exceeds his authority.

**Accountability** is the expectation that a person or body will explain and answer for conduct, decisions, or outcomes to an audience able to judge or respond. It differs from responsibility, blame, and task assignment. Someone may perform a task without owning the result. A leader may be accountable for a system failure without having caused it personally.

Research shows that accountability’s effects depend on the audience, timing, standards, and decision environment. It does not automatically improve judgement.[^1] Poorly designed accountability can encourage defensiveness, conformity, excessive paperwork, or superficial compliance. Effective accountability connects authority, evidence, explanation, consequences, and learning.

## Four questions before assigning ownership

Before saying “You own this,” ask:

1. **Control:** Which decisions can the person make?
2. **Resources:** Which people, funding, information, and access can they use?
3. **Obligation:** Which result or standard must they answer for?
4. **Review:** To whom must they answer, when, and with what possible consequences?

If the obligation greatly exceeds the person’s control and resources, the assignment may create a target for blame rather than an effective owner. If someone has control but faces no review, they can exercise power without accountability.

Five recurring failures weaken this connection: unclear ownership, incomplete records, responsibility spread so widely that no one can answer, shared failure attributed to one role, and corrective work assigned without the means to complete it.

## 1. Ownership remains unclear

Unclear ownership often begins with collaborative language: “We all own quality,” “The leadership team is responsible,” or “Operations and technology will work it out.” Shared commitment is valuable, but shared final authority often leaves it unclear who must answer for the result and who can decide.

Distinguish at least four roles:

- **Decision owner:** Authorised to choose
- **Delivery owner:** Accountable for producing the agreed result
- **Task owner:** Responsible for a defined action
- **Control or review owner:** Responsible for independently checking a requirement or risk

One person may hold several roles, but each role should remain clear. A compliance reviewer who can stop a release may own the compliance decision without owning delivery. A service manager may coordinate an incident without owning the code change that caused it.

A RACI chart—responsible, accountable, consulted, informed—can help if its labels reflect actual authority and consultation. Several “accountable” names may conceal an unresolved choice. A plain statement is clearer: “Tariq coordinates the incident; the release manager decides rollback; the platform director owns restoration; security must approve emergency access.”

Define when ownership begins and how it transfers. Who owns a risk while it is being assessed? At what severity does authority move to another role? Who confirms the handoff? Many failures occur where responsibilities meet or transfer.

Assign temporary authority explicitly during an urgent event and review it afterwards. “For this incident, Maya is the decision lead until restoration; domain owners advise and execute” may provide enough clarity without debating the organisation chart during the crisis.

## 2. The record captures only part of the event

Records shape accountability because reviewers can assess only the information available to them. A record can distort an event by preserving some actions, warnings, or failures while omitting others.

Selection is unavoidable. An incident timeline cannot reproduce every message, and a performance review cannot describe every day. Include the facts needed to understand causes, control, responses, and decisions.

Tariq’s late reply is relevant, but so is the missing notification. Recording the reply alone makes a system condition appear to be a personal failing. A project review that lists missed dates but omits approved scope changes misrepresents performance. A complaint file that retains an allegation without the response creates a lasting bias in the record.

Record these elements separately:

- the event or requirement
- time and source
- action taken
- context or dependency
- decision and owner
- unresolved question
- correction or later evidence

Before finalising a record that may have significant consequences, invite materially involved people to correct factual errors. They do not have a veto over the findings. Their input can identify wrong dates, missing context, and unclear roles. Retain versions and document changes so later readers can see how the record developed.

Limit access according to privacy and relevance. Someone may be able to correct their part without seeing confidential information about others. An investigator or authorised reviewer may need the complete record. Transparency alone does not justify circulating sensitive material.

## 3. Responsibility spreads until no one can answer

Responsibility diffusion occurs when several people could act and each assumes someone else will. Classic research on bystander intervention showed how the presence of others can reduce an individual’s sense of responsibility during an emergency.[^2] Workplace systems are more complex than the laboratory emergencies studied. The relevant coordination lesson is that a group alert without a named owner may receive no response.

Committee language can have the same effect. A risk is “with governance,” a hiring delay is “with the business,” or a policy exception is “under review.” These phrases identify where a matter sits, but not who must act or when a decision is due.

Require explicit acceptance of an assignment. Sending a task is insufficient: an authorised person must acknowledge the obligation, deadline, and escalation route. Shared inboxes and queues need a designated person responsible for the work, service standards, and a way to track how long items have been waiting.

For each decision, record one accountable role even when many people participate. This does not mean that one person caused every outcome. It identifies who must ensure that evidence is assembled, decision authority is exercised, and the result is communicated.

The phrase “collective accountability” should not obscure senior authority. If a leadership team votes, record the vote or the chair’s decision under the team’s mandate. If an executive overrules the group, record that. Describing a result as collectively owned hides the decision right when only one person had authority to choose.

## 4. A shared failure is placed on one role

Blame concentration occurs when an organisation treats one person’s action as the complete explanation for a shared failure. It may select someone who is visible, lower in status, or administratively convenient to hold responsible.

A person may have made a serious error. Examining the process does not rule out consequences. It requires the review to consider the person’s duty, training, information, control, workload, supervision, and system design, as well as how comparable conduct was treated.

Separate three questions:

1. What happened, and which conditions produced it?
2. Did someone’s conduct depart from a clear and reasonable expectation?
3. Which response will reduce recurrence and address responsibility fairly?

Combining these questions can lead reviewers to identify a culprit before understanding the system. Equally, using “system failure” to excuse reckless conduct or a knowing breach of an expectation prevents accountability. Both individual conduct and system conditions may matter.

Research on learning from failure distinguishes process from outcome.[^3] Judge conduct against what people could know and control at the time. Outcome severity alone does not establish negligence; Chapter 5 explains why a sound process can fail and a weak one succeed.

Compare similar cases carefully. Were others coached for the same error while this person was disciplined? Were leaders judged by a different standard? Close comparisons can reveal selective blame, although consequences, history, role, established intent, and policy may justify different responses.

## 5. Corrective work lacks the means to repair

After a failure, organisations often assign corrective actions to the person closest to the problem. That person may lack the authority, funding, or cooperation needed to complete them. The work becomes overdue and is then treated as another performance failure.

Every corrective action needs:

- a result rather than an activity
- an owner with authority
- resources and dependencies
- a due date that reflects the risk
- evidence of completion
- a verifier where independence matters
- an escalation route for blocked work

“Tariq to improve monitoring” is not actionable if the platform team owns the tool and finance controls the budget. A clearer assignment is: “Platform director to implement severity-one alerting by 30 June; Tariq to define service thresholds by 15 May; technology risk to verify through a failover test.”

Ask the owner to accept the assignment. If a constraint prevents acceptance, the decision owner must resolve it. Remediation meetings should address blocked work rather than merely mark it overdue.

Do not assign every action to the report’s author. Analysts and incident managers may coordinate the response, but line owners must own changes to their systems. Otherwise, assurance functions become accountable for work while operational authority remains elsewhere.

## Accountability requires honest explanation and review

Dashboards can track commitments, but honest explanations also depend on how people are treated. If every admission is punished, records become defensive. If reviewers accept every explanation without challenge, the process provides little real scrutiny.

An accountable conversation needs a clear audience and standard. The reviewer asks for reasoning, evidence, uncertainty, and learning. They should not demand certainty that was unavailable at the time. The owner explains their choices without attributing every consequence to circumstances beyond their control. Both must distinguish a valid justification from an excuse.

Psychological safety and accountability can support each other when properly designed. Safety enables candid reporting, questions, and admission of error; accountability maintains standards and consequences. Research reviews emphasise that psychological safety is not simply comfort and does not mean permissiveness.[^4]

A team can state: “You will not be humiliated for reporting an error. We will examine what happened. If you knowingly bypassed a critical control, that will still matter.” Consistent treatment makes that commitment credible.

## Learning, discipline, and investigation have different purposes

A learning review asks how an event occurred and how recurrence can be reduced. A disciplinary process asks whether conduct breached an expectation and what response is appropriate. Legal, safety, regulatory, safeguarding, and professional investigations may carry additional duties.

Combining these purposes without warning undermines candour and fairness. Participants should know which process they are entering, how their information may be used, the limits of confidentiality, and what representation or support is available. An organisation cannot always promise that serious evidence discovered during a learning review will have no consequences. It can explain those limits honestly.

Where possible, preserve the facts and address immediate safety first, then identify the authorised processes. Follow relevant law, policy, professional standards, and agreements. Do not improvise promises of immunity or decisions about punishment.

Learning reviews should also examine successful recovery, near misses, and the conditions that prevented worse harm. A review focused only on individual error can miss effective practices worth strengthening.

## Consequences should follow purpose and evidence

Accountability discussions often move straight from “Who owns this?” to punishment. Possible responses are broader: correction, learning, restitution, changed authority, closer review, support, recognition, discipline, or no further action.

Choose a response that fits the purpose and evidence. A knowledge gap may call for training and supervised practice. An impossible workload may require changes to the demands placed on the person. Knowingly falsifying a critical record may require a formal conduct response. Harm arising despite a sound process under unavoidable uncertainty may call for care, learning, and updated controls rather than blame.

Consistent treatment does not require identical consequences for events that look similar. Role, clarity of expectations, properly established intent, prior support, impact, and comparable cases may matter. The decision-maker should be able to explain which differences justify the response.

Disclosure should also be proportionate. Publishing names may appear to demonstrate accountability, but it can discourage reporting, invade privacy, or concentrate blame. Disclose only the personal information needed for the legitimate purpose, subject to legal and regulatory duties. An authorised internal process may retain more detail than a report shared widely for learning.

## Accountability extends beyond the reporting line

Accountability is often understood as an employee explaining their work to a manager. Organisations also need leaders to answer to people affected by their decisions, functions to answer to each other, and the organisation to meet its external obligations.

**Downward accountability** means leaders explain decisions to the people who bear their consequences. A manager may retain authority to reorganise a team, while employees can reasonably expect an explanation of the purpose, criteria, scope of consultation, and support available. This does not make every decision negotiable. It makes the exercise of authority understandable.

**Sideways accountability** operates between functions, even where no reporting line connects them. A shared service explains its queue decisions to requesters; a product team answers to risk owners; a policy function responds to operational evidence. Service agreements, governance forums, and named escalation routes establish who can require an answer when the reporting structure does not.

**External accountability** may involve customers, regulators, professional bodies, funders, partners, unions, communities, or the public. The standards and rights involved may differ substantially from those in internal management. Internal sign-off does not necessarily fulfil an external duty.

For each relationship, identify who can require an explanation, which standard applies, and what that audience can do with the answer. If the audience can neither evaluate nor respond, the process may be communication rather than accountability. Communication remains valuable, but the distinction should be clear.

## Metrics have owners and consequences

A dashboard indicator can appear to give an objective verdict on performance. A target turns red and someone must explain. Yet people chose the denominator, threshold, data source, exclusions, and reporting delay that produced the indicator.

When a metric is used to hold someone accountable, identify who owns it and explain its limitations. Who validates it? Can those judged by it correct the data? Does it measure an outcome they control? Which behaviour might it encourage at the expense of quality that is not measured?

A call-centre manager judged only on average handling time may shorten calls while more problems remain unresolved. A recruiter measured only on time-to-hire may consider a narrower range of candidates. The metrics do not force these choices, but the accountability system gives people incentives to make them.

Use a small, balanced set of measures. Add a measure of quality or consequences where the main indicator creates an obvious trade-off. Review unusual cases using an explanation of the circumstances alongside the numbers. Adding a metric for every limitation can make the system too complex to understand.

Keep the old metric definition or carefully restate historical data when it changes. Otherwise, measurement changes may be mistaken for performance changes and lead to unjustified consequences. Chapter 12 develops the implications for outcome accounts.

## Give each part of a cross-functional action an authorised owner

Suppose an audit finds that customer refunds are delayed because approval passes through service, finance, fraud, and payments. It assigns one action: “Head of Service to reduce refund time from 20 days to five.”

The head of service can improve intake but cannot change fraud thresholds or payment processing. She may spend months chasing peers and reporting progress before being marked overdue. She is held accountable for decisions made by other functions.

Assign the overall outcome and its component responsibilities explicitly. The operations director owns the five-day result. Service owns complete intake within one day. Fraud owns the standard for completing risk-based reviews within two days. Payments owns release within one day of approval. Finance supplies system funding. An independent control owner samples completion and fraud outcomes after three months.

This arrangement makes it possible to identify where delays occur while keeping responsibility for the whole process clear. The operations director has authority to resolve competing priorities. If evidence shows the target is unsafe or technically impossible, the director returns to the risk committee instead of leaving the service head accountable for an unachievable result.

Clear allocation can prevent months of overdue reports about an outcome the assigned owner cannot control.

## Repair the effects of misplaced blame

Correcting a system does not automatically repair the harm to a person. A misleading incident report may have influenced a performance review. Colleagues may remember the first accusation more clearly than the later qualifications. The person may have lost an opportunity or faced unnecessary scrutiny.

Identify the affected records and audiences. Correct formal evaluations, update the relevant group, and restore opportunities where possible. Offer support while recognising that the harm may extend beyond distress. A private apology alone cannot correct a public attribution.

Do not overstate innocence if the evidence remains mixed. A correction can be precise about what changed: “The first report placed primary responsibility on Tariq. The completed review found that release ownership sat elsewhere and that notification and rollback controls materially contributed. The performance note based on the initial account has been removed.” This states both the findings and the action taken.

Leaders may fear that correcting an error will undermine their authority. Refusing to correct an established error does more damage. A system that can revise its account is more trustworthy than one that insists its earlier account is correct at someone’s expense.

If the matter involves a formal complaint, discipline, a legal process, or protected data, follow the authorised correction procedure. Do not improvise disclosure or delete records that must be retained.

## Common accountability failures

Common failures include:

- assigning ownership to a committee without naming someone responsible for progress
- measuring task completion instead of risk reduction
- treating the person closest to the problem as the person who controlled it
- expecting a junior action owner to secure cooperation from an uncooperative senior person without sponsorship
- retaining only the organisation’s account without allowing material factual corrections
- treating an apology as the end of repair
- waiting until after the outcome to establish accountability instead of defining roles, standards, and review arrangements before work begins

Each failure weakens the link between authority and answerability. The remedy is usually clearer ownership, better evidence, effective review, or appropriate repair. A stronger demand that people “take accountability” will not supply what is missing.

## How to respond: emerging blame

- **Stabilise and preserve.** Address immediate safety or service needs and preserve necessary evidence that you are authorised to retain.
- **Clarify the process.** Establish whether the purpose is learning, performance management, discipline, investigation, or regulatory response.
- **Map control and context.** Identify decisions, roles, information, workload, handoffs, and safeguards.
- **Correct material records.** Add missing information about notification, approval, constraints, or responses, including the source and date.
- **Separate system and conduct questions.** Examine both without allowing one to dismiss the other.
- **Assign repair with authority.** Assign actions to owners who control the necessary resources and dependencies.
- **Use representation and specialist advice.** Serious allegations, safety, discrimination, retaliation, privacy, professional discipline, or legal deadlines require appropriate formal support.

## For managers: test an ownership assignment

Before assigning a consequential outcome, complete this sentence:

> **[Role]** is accountable for **[specific result]** because they can decide **[choices]**, control or obtain **[resources]**, must consult **[roles]**, and will report to **[audience]** by **[time]**. If **[threshold or exception]** occurs, authority moves to **[role]**.

Use the opening control, resources, obligation, and review questions to test the completed statement. Resolve any gap before assigning the outcome.

For corrective work, ask the owner to restate the intended result and identify anything blocking the work. Provide a named escalation route. Close the action only when evidence shows the risk or failure mode has been addressed. Uploading a document alone does not establish completion.

### Questions an accountable leader asks

Before a problem:

- Which outcome am I assigning, and what authority comes with it?
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
- Does each corrective-action owner control the means to complete the work?
- What did recovery reveal that deserves recognition?
- Who was affected by an inaccurate early account, and what repair is due?

These questions preserve standards and consequences while helping the organisation produce a reliable account of what happened.

## Returning to Tariq

Tariq’s incident review is revised. The platform director owns restoration and monitoring controls; the release manager owns go/no-go; Tariq owns customer-service coordination. The timeline adds the missing notification and outdated rollback guide. Tariq contributes to the remediation plan, but actions outside his authority are assigned elsewhere. The review still records his delayed reply. It now explains that fact in the context of the event instead of treating it as the complete explanation.

## Practice: turn a blame sentence into an accountability map

Start with a statement such as “Tariq caused the outage” or “The team failed to deliver.” Create five rows:

1. decision or action
2. person or role with authority
3. information and resources available
4. relevant expectation
5. system condition or dependency

Mark each item as established, disputed, or unknown. Then write two separate questions: “What should change in the system?” and “Does any conduct require a separate response?” Keeping both questions in view helps avoid premature blame and the evasion of individual responsibility.

Accountability shapes the official explanation of conduct. Reputation often influences how people interpret an event before that explanation is complete. The next chapter examines how labels, status, and borrowed authority affect whose account seems credible.

[^1]: Jennifer S. Lerner and Philip E. Tetlock, “Accounting for the Effects of Accountability,” *Psychological Bulletin* 125, no. 2 (1999): 255–275, [https://doi.org/10.1037/0033-2909.125.2.255](https://doi.org/10.1037/0033-2909.125.2.255).

[^2]: John M. Darley and Bibb Latané, “Bystander Intervention in Emergencies: Diffusion of Responsibility,” *Journal of Personality and Social Psychology* 8, no. 4, pt. 1 (1968): 377–383, [https://doi.org/10.1037/h0025589](https://doi.org/10.1037/h0025589). The chapter draws a limited coordination analogy; a workplace accountability system is not equivalent to the experimental emergencies studied.

[^3]: Kristina B. Dahlin, You-Ta Chuang, and Thomas J. Roulet, “Opportunity, Motivation, and Ability to Learn from Failures and Errors: Review, Synthesis, and Ways to Move Forward,” *Academy of Management Annals* 12, no. 1 (2018): 252–277, [https://doi.org/10.5465/annals.2016.0049](https://doi.org/10.5465/annals.2016.0049); Amy C. Edmondson, “Learning from Failure in Health Care: Frequent Opportunities, Pervasive Barriers,” *Quality and Safety in Health Care* 13, suppl. 2 (2004): ii3–ii9, [https://doi.org/10.1136/qshc.2003.009597](https://doi.org/10.1136/qshc.2003.009597).

[^4]: Amy C. Edmondson and Derrick P. Bransby, “Psychological Safety Comes of Age: Observed Themes in an Established Literature,” *Annual Review of Organizational Psychology and Organizational Behavior* 10 (2023): 55–78, [https://doi.org/10.1146/annurev-orgpsych-120920-055217](https://doi.org/10.1146/annurev-orgpsych-120920-055217).
