# Chapter 6: Resources and Dependencies

## Case: Sofia questions a programme’s urgent staffing request

Sofia manages a small data team. A transformation programme asks her to provide two analysts for six months. The programme director says the work is “on the critical path” and has the chief executive’s attention. Sofia offers one analyst for eight weeks because her team must first meet a regulatory deadline. The director responds that providing fewer than two analysts will put the programme at risk.

At the next portfolio meeting, Sofia learns that three other teams received similar requests and warnings. The programme plan describes every contribution as critical, even though several tasks will not begin for another four months. The programme also retains unused contractor funding and has two approved vacancies that remain unfilled. The director may be trying to protect a difficult schedule, but describing every dependency as critical makes it difficult to distinguish genuine constraints from requests for priority treatment.

Decisions create commitments, but resources determine whether those commitments can be carried out. Resources include money, people, time, equipment, data, permissions, space, attention, and the capacity to absorb additional change. Because these resources are limited, allocating them to one activity usually reduces what is available elsewhere. Resource decisions therefore involve trade-offs, delays, and opportunity costs.

Dependency can also create influence. A team that controls an essential workflow, scarce expertise, or the ability to resolve uncertainty may have more practical leverage than its formal position suggests. Organisational theory has linked subunit power to factors such as centrality, control of uncertainty, and difficulty of substitution.[^1] These conditions are not inherently improper. They help explain why a database administrator, regulatory specialist, scheduler, or local coordinator may have substantial influence despite limited formal authority.

The practical challenge is to determine whether a claimed dependency is real, how significant it is, and what alternatives exist. Organisations should design critical dependencies so that they support the work without making decisions dependent on an untested claim or a single person or team.

## Four questions for assessing a resource request

Before assessing a resource request, separate four questions:

1. **Need:** What outcome, commitment, or obligation requires the resource?
2. **Amount and timing:** How much capacity is needed, when is it needed, and for how long?
3. **Dependency:** What will be delayed, reduced, made unsafe, or prevented if the resource is not provided?
4. **Alternatives:** What could be substituted, rescheduled, reduced, stopped, or accepted as a managed risk?

“We need two analysts” states a demand but not the case for it. A clearer request would be: “Without two analysts from October through December, migration testing will finish three weeks after the regulatory deadline. The gap could instead be closed by hiring one contractor or removing the reporting work from the current scope.” This makes the assumptions, consequences, and alternatives visible.

Five recurring patterns can make resource choices harder to evaluate: overstating dependencies, attaching unrelated requests to accepted priorities, claiming scarcity that others cannot verify, reserving capacity before it is needed, and withholding available resources without a clear and reviewable reason.

## 1. Overstating a resource dependency

A dependency exists when one task, decision, system, or resource must be available before another piece of work can proceed. Dependencies matter because they determine sequence and timing. A dependency is overstated when something is described as more essential, exclusive, or time-critical than the available evidence supports.

This overstatement may be deliberate, but it often develops from defensive planning. Programme leaders may label many activities as critical because they fear shared resources will be reassigned. Specialists may use absolute language because earlier warnings were ignored. Teams may add large buffers because priorities change unpredictably. Each response may be understandable on its own, but together they make it difficult to distinguish genuine constraints from precautionary claims.

Test a claimed dependency by asking:

- What work stops if the resource is unavailable?
- How long would the delay last?
- Can the sequence be changed?
- Can scope, quality, or timing be adjusted?
- Is another qualified person, team, or supplier available?
- Which risk could the authorised decision-maker accept?
- What evidence supports the requested level of resource?

Novel work does not always allow precise forecasts. Use ranges and scenarios instead. For example: one analyst could deliver a basic migration by December; two analysts could complete full reconciliation; no analyst would delay compliance testing. This shows the available trade-offs without pretending that the estimates are certain.

If every dependency is described as critical, require prioritisation. Ask: “Which three dependencies would you protect first if only half the requested capacity were available?” This forces the team to distinguish among them. A critical path identifies the sequence that determines completion time; it does not mean that every important activity is equally critical.

## 2. Linking unrelated requests to an accepted priority

Priority bundling occurs when a resource request is presented as necessary for an accepted priority even though only part of the request is directly connected to that priority. For example, an optional dashboard may be described as a regulatory requirement, additional headcount may be attached to a customer-safety programme even though much of the role supports general growth, or an office renovation may be presented as necessary for return-to-work compliance when only some elements are required.

Shared costs are not inherently problematic. A platform introduced for one requirement may also create useful benefits elsewhere. The important distinction is between what is necessary to satisfy the accepted priority and what represents an additional investment. Decision-makers should also be clear about who has authority to approve each part.

A component analysis can make the distinction visible:

|Component|Required outcome|Basis|Incremental benefit|Decision owner|
|---|---|---|---|---|
|Core access controls|regulatory compliance|cited standard and assessment|lower breach risk|risk committee|
|Analytics module|operational insight|optional design|faster reporting|portfolio board|

This does not argue against the analytics module. It ensures that the urgency and authority attached to regulatory compliance do not automatically determine a separate discretionary investment.

When a request is described as being “for” a high-priority objective, ask which specific requirement, deliverable, or approved outcome it supports. If the connection is only partial, separate the minimum necessary investment from the broader proposal and assess each under the appropriate criteria.

## 3. Claiming resource shortages without supporting evidence

Scarcity is a genuine organisational constraint. Budgets are limited, specialist skills are finite, equipment has capacity limits, and employees cannot sustain unlimited workloads. Problems arise when scarcity is asserted without showing what is actually constrained. Statements such as “There is no budget,” “The team has no capacity,” or “Only one place is available” are difficult to assess without further detail.

A reviewable scarcity claim should identify the relevant resource pool, time period, existing commitments, and decision authority. There may be no discretionary budget remaining this quarter, but emergency funding may be available through another approval route. A team may have no unallocated hours, but lower-priority work could be delayed. A training course may have only one place under the current booking, while an additional session could be purchased.

Those alternatives may be costly or undesirable. They should still be recognised as alternatives rather than described as impossible.

The response should not assume that additional capacity is secretly available. Resource data may be incomplete, and full disclosure of budgets or staffing information may be inappropriate. Ask only for enough information to understand the choice: the applicable limit, current commitments, the rule used to set priorities, and when the allocation will next be reviewed.

Managers should also distinguish between **unavailable** and **not prioritised**. “We have no capacity” may actually mean, “Our available capacity is already committed elsewhere, and we are not changing those priorities.” The second statement makes the allocation decision visible and allows discussion to focus on priorities rather than on whether additional hours somehow exist.

Scarcity should also be assessed against sustainable workload, not theoretical maximum output. Capacity planning should allow for routine work, coordination, leave, learning, recovery from mistakes, and unexpected demand. World Health Organization guidance on mental health at work similarly emphasises organisational conditions and psychosocial risks rather than treating excessive strain solely as an individual resilience issue.[^2]

## 4. Reserving resources before allocation decisions are made

Precommitment occurs when resources are reserved for one option before the organisation completes the allocation process it has announced. Reserving money, staff, space, or capacity early can narrow the later decision because other proposals must compete for what remains.

Early reservation is sometimes necessary. Long-lead equipment may need to be ordered in advance, scarce specialists may need provisional bookings, expiring grants may require timely commitments, and contingency funds may need to remain protected for emergencies. Teams may also begin low-cost preparation before final approval. The important questions are how firm the commitment is and how easily it can be reversed.

Ask:

- Is the resource merely forecast, provisionally held, contractually committed, or already spent?
- Who authorised the reservation?
- What event will confirm or release it?
- What financial, operational, or reputational cost would arise if the final decision changes?
- Do other applicants know how much of the original resource pool remains genuinely available?

A provisional reservation should have a clear label and an expiry date. “Subject to portfolio approval” should mean that the portfolio body can still reject the proposal without unreasonable cost. If cancellation would trigger a substantial fee, breach an external commitment, or create significant reputational consequences, part of the allocation decision has already been made and should be recorded as such.

Budget owners can make the remaining choice clearer by separating resources into categories such as mandatory commitments, contingency reserves, previously approved work, provisional holds, and genuinely unallocated capacity. This prevents a committee from being asked to prioritise an apparent total budget when much of it is no longer realistically available.

## 5. Withholding resources without a clear reason

Capacity withholding occurs when a person or team has resources within its control that could reasonably be released but chooses not to do so without providing a reviewable reason. The resource may include staff time, access, equipment, funding, information, or approval authority.

The term _available capacity_ should be used carefully. A team that appears underused may be maintaining standby coverage, performing work that is not visible, preserving resilience, or limited by specialist skills. A budget balance may already be restricted for another purpose. An employee may have time available but lack the competence or authority required for the task. Establish the actual status of the resource before judging whether it is being withheld.

There are legitimate reasons to reserve capacity, including contingency planning, safety margins, uncertain demand, staff development, and protection against chronic overcommitment. The reason should be linked to a clear owner and rule. “We reserve 15 percent of capacity for incidents because service levels require a two-hour response” is a defined policy. “We might need it later” can become an open-ended reason for refusing requests.

Withholding may also create bargaining power. A central team may respond quickly to favoured work but delay routine requests, making personal relationships more influential than formal priorities. A manager may keep a vacancy unfilled to prevent the position from being reassigned. A department may delay approval until another group accepts its preferred design.

The practical remedy is a clear service and allocation model. It should define request criteria, priority categories, expected response times, reserve policies, escalation routes, and an appropriate level of capacity reporting. This does not remove judgment. It places boundaries around how that judgment is exercised.

## How organisational design creates bottlenecks

Some dependencies come directly from the work, while others are created by organisational design. If only one person can approve a decision, one team controls every integration, or one system contains all critical records, the organisation has concentrated both influence and operational risk.

Concentration may sometimes be justified. Duplicating scarce expertise can be expensive, wider access may weaken security, and decentralising standards may create inconsistency. The important question is how the organisation manages the resulting dependency. Backups, clear decision boundaries, service standards, succession plans, documentation, and periodic review can preserve specialist expertise without making the organisation dependent on a single person, team, or system.

Do not assume that the person at the bottleneck is causing the problem. They may be managing demand created by years of underinvestment or poor process design. Instead of asking, “Why are you blocking us?” ask, “What work enters your queue, what capacity is available, and who sets the priorities?” The answer may show that the supposed gatekeeper lacks both the authority to reject requests and the resources to complete them.

Incentives also matter. A specialist who becomes less valuable or less secure after sharing knowledge has little reason to prioritise documentation over urgent delivery. A manager who routinely loses headcount after improving efficiency may have an incentive to preserve visible scarcity. Transparency about resources is therefore more credible when people are not penalised for creating resilience, sharing knowledge, or releasing unused capacity.

## Clarify what budget labels mean for available funds

Budget terms can obscure how much flexibility remains. A cost may be described as _fixed_ because a contract exists, even though the contract allows early termination. Funding may be _ring-fenced_ by law, donor conditions, organisational policy, or simply an internal allocation. A role may be _approved_ even though no recruitment budget has been assigned. Funds may be _spent_, _committed_, _accrued_, _forecast_, or _reserved_. Each term describes a different financial state and a different degree of reversibility.

Decision-makers do not need accounting expertise to ask a basic question: what does the term mean here, and what action has actually occurred? For example: “When you say the funds are committed, has a contract been signed, or have they only been allocated in the forecast?” The answer shows whether the organisation can still change the allocation and at what cost.

Being “under budget” does not necessarily mean that money is available for another purpose. Costs may not yet have been invoiced, or unused funds may be restricted to a particular category. Being “over budget” does not necessarily indicate poor financial control. Exchange-rate changes, emergency expenditure, or an authorised increase in scope may explain the variance. The record should connect the variance to its cause and identify who authorised any relevant change.

A short glossary and consistent financial reporting can reduce this ambiguity. The purpose is not to add unnecessary financial detail, but to ensure that the same term describes the same constraint regardless of who is asking.

## Set clear rules for allocating shared capacity

Shared functions such as legal, data, design, procurement, communications, security, and human resources often receive competing demands from across the organisation. Different prioritisation methods create different biases. A first-come queue favours people who know to submit early. A system driven by the strongest sponsor favours people with greater influence. A numerical scoring model may appear objective while still depending on subjective choices about criteria and weights.

A practical service model should separate different types of demand, such as defined emergencies, mandatory or regulatory work, previously committed delivery, and discretionary improvement. Each category should have an accountable owner and a clear service expectation. Within each category, requests can be compared using factors such as consequence, the basis of the deadline, required effort, and the opportunity cost of assigning capacity.

Requesters also have responsibilities. They should involve shared teams early, provide enough information for the request to be assessed, respond to questions, and release capacity they no longer need. Reserving a specialist without a current need prevents that capacity from being used elsewhere. Shared teams should therefore be able to close or expire inactive requests after reasonable notice.

When competing requests require a business trade-off, the decision should go to the person or body accountable for the combined outcome. A security analyst should assess security risk and effort, not decide whether a product launch is more important than a finance migration when that prioritisation belongs to an executive portfolio owner. Specialists provide the relevant analysis; accountable leaders choose between competing organisational outcomes.

A monthly demand report can show major commitments, estimated capacity, the age of queued requests, and unresolved prioritisation decisions. It should not become a system for ranking individual productivity. The purpose is to allocate shared capacity, not to monitor how every employee spends each minute.

## Include overlooked support work in capacity plans

Resource plans often record formal roles, budgets, and visible outputs while overlooking work such as coordination, emotional support, onboarding, translation, accessibility support, maintenance, and relationship repair. This can distort capacity assessments in two ways. Some teams appear more productive because other people perform the work that enables their results. Some employees appear to have spare capacity because recurring support work is not included in the plan.

To identify this hidden workload, ask what makes the visible output possible. Who schedules, checks, explains, cleans data, supports upset customers, trains new employees, or corrects mistakes? Which of these tasks recur? Which are formally assigned, and which are taken on voluntarily? Does the organisation recognise the work, distribute it fairly, or allow people to decline it?

Not every helpful activity needs to be recorded on a time sheet. A periodic workload review may be enough. List major deliverables, recurring support tasks, peak-demand periods, and work that depends on a single person. Compare that demand with sustainable capacity. If the same employee repeatedly takes notes, mentors newcomers, or performs other enabling work, make the responsibility visible and decide whether it should be recognised, rotated, or formally included in the role.

This can also raise equity concerns. Research and workplace practice have identified cases in which some groups perform disproportionate amounts of “office housework” or diversity-related labour. A conclusion about a particular organisation, however, requires evidence from that workplace. Examine task allocation and comparable roles rather than assuming a pattern solely from demographic characteristics.

## Set rules for holding and using resource reserves

Unused capacity is not always waste. In systems exposed to incidents, staff absences, demand spikes, or uncertain work, spare capacity can provide resilience. Hospital beds, cash reserves, backup suppliers, free calendar time, and unused server capacity may be maintained because demand can exceed its normal level.

The important distinction is between a deliberate reserve and unexplained withholding. A reserve should have a defined purpose, an expected size or range, clear authority for using it, and a review point. For example: “The service team reserves one person-day each week for severity-one incidents. If the capacity is unused by Thursday, it may be reassigned to the improvement queue.” This protects emergency response while preventing capacity from remaining unavailable without a continuing reason.

Reserves can also be used to protect resources from scrutiny. One unit may describe most spare capacity as contingency while another operates with persistent shortages. Portfolio owners should therefore compare reserve levels across teams while recognising that different risks may justify different amounts. Equal reserve percentages are not necessarily fair or efficient; a clear rationale is more useful.

Cost reductions can create the opposite problem by removing too much spare capacity. Teams may continue meeting deadlines only through overtime, deferred maintenance, postponed learning, or sustained personal strain. Repeated emergency effort may indicate that the normal resource model lacks sufficient resilience. Review not only whether the work was completed, but also what additional effort or deferred work made completion possible.

## Maintain fair processes during resource cuts

When resources genuinely decline, a clear and fair process becomes more important. Even well-managed reductions may result in cancelled projects, fewer opportunities or working hours, and job losses. A fair process cannot eliminate those consequences, but it can make the priorities, criteria, opportunities for input, explanations, and available support clear and credible.

Avoid assuming that equal percentage reductions are automatically fair. Teams may begin from different levels of capacity and face different consequences. The same percentage cut may leave one unit able to operate normally while making another unable to meet a safety requirement. A travel restriction may have little effect on headquarters staff but seriously limit a remote field team. Consistency is valuable, but it should be considered alongside the practical effects of the decision.

Leaders should explain the resource constraint, identify who has decision authority, state which obligations must be protected, and set out the criteria, timeline, purpose of consultation, and available support. Where some information cannot be disclosed, explain the type of restriction and how it affects the decision. Do not invite consultation after major commitments have become irreversible unless participants are told clearly what their input can still influence.

Employees should also be able to identify dependencies that may not be visible in the formal resource plan. A role classified as “nonessential” may perform a mandatory control, while removing administrative support may simply transfer work to more expensive specialists. These concerns should be examined before reductions are finalised rather than dismissed as resistance to change.

Where employment rights, collective consultation requirements, discrimination, accommodation, health and safety obligations, or contractual duties may apply, use the relevant professional, legal, or representative processes. A general framework for allocating resources cannot determine whether a particular reduction complies with those requirements.

## Assess further investment by future benefits, costs, and risks

Resource politics continues after the initial allocation. Once an organisation has committed money, reputation, and leadership attention to a project, it may become harder to reduce or stop that investment even when results deteriorate. Ending the project can make the earlier decision appear mistaken or wasteful.

Research on escalation of commitment examines why organisations and individuals continue supporting a chosen course despite negative feedback. A meta-analytic review found that project characteristics, psychological factors, social pressures, and organisational structures can all contribute.[^3] No single explanation applies to every case. It is therefore too simple either to dismiss continued investment as “sunk-cost thinking” or to assume that continuation is justified. Further investment may be rational when its expected future benefits still exceed the additional costs and risks.

Separate past expenditure from the decision about future resources. Ask:

- What value can still be recovered or created?
- What additional money, time, or capacity is being requested?
- What evidence has changed since the previous decision?
- What alternatives are available now?
- Who can assess the next step without needing to defend the original choice?
- What criteria were established for stopping, changing, or continuing the work?

Do not ask whether stopping would mean that previous spending was “wasted.” Much of that expenditure cannot be recovered regardless of what happens next. Ask instead what the next unit of money, time, or capacity is expected to achieve.

Independent review can help when the original sponsors are strongly associated with the project. Their knowledge should still inform the assessment, but they should not be the only people deciding whether further investment is justified.

## Help an overloaded employee set priorities

Resource allocation also happens within individual workloads. When an employee says they have no capacity, start by reviewing the work rather than asking them to prove how hard they are working.

List current commitments, deadlines, recurring responsibilities, and predictable interruptions. Identify which tasks require that person’s specific expertise or authority and which involve hidden quality, compliance, or safety requirements. Then make the priority trade-offs explicitly:

> Of these six commitments, the client correction and payroll control come first. Pause the dashboard redesign. Move the training deck to me. Tell the project sponsor that the analysis will arrive Friday rather than Wednesday, and copy me.

This response addresses overload by changing the workload and accepting the consequences of reprioritisation. Telling someone to “manage time better” without removing, delaying, or reallocating work does not resolve the capacity problem.

If overload continues, examine staffing levels, role design, inefficient processes, skill gaps, and available health or workplace support. An employee’s ability to keep coping does not prove that the workload is sustainable. Managers should also avoid promising resources they do not have authority to provide. State what you can change directly, what you will escalate, and when the employee can expect an answer.

## How to respond to competing resource demands

- **Translate the request.** Replace terms such as “critical,” “no bandwidth,” or “must have” with specific information about the need, amount, timing, consequence, and available alternatives.
- **Compare scenarios.** Ask what happens under full, partial, delayed, substituted, or no allocation.
- **Make the trade-off visible.** Identify which existing work would be delayed, stopped, reduced, or exposed to greater risk if the request is prioritised.
- **Separate the components.** Distinguish mandatory requirements, optional benefits, contingency reserves, and commitments already made.
- **Clarify authority.** Identify who controls the resource, who sets priorities, and who has authority to accept any remaining risk.
- **Set a review point.** Give reservations, exceptions, emergency capacity, and continued investment a defined expiry or review date.
- **Escalate urgent health or safety concerns.** If a resource decision creates immediate danger or may involve a protected concern, use the appropriate formal or emergency route rather than treating it as an ordinary prioritisation issue.

## For managers: use a common format for resource requests

A portfolio cannot compare resource requests effectively when each one is expressed in different terms. One team may ask for additional staff, another emphasise expected revenue, a third cite regulatory risk, and a fourth rely on a senior leader’s support. Use a common resource case so that the underlying trade-offs are visible:

|Field|What to state|
|---|---|
|Outcome|the result, commitment, or obligation the resource supports|
|Capacity|the people, money, time, equipment, or authority required|
|Timing|when the resource is needed, for how long, and why the deadline applies|
|Dependency|what will be delayed, reduced, or prevented without it|
|Options|full, minimum, delayed, substituted, or stopped|
|Existing commitment|resources already reserved, contracted, or spent|
|Risk owner|who is authorised to accept the consequence of delay or under-allocation|
|Review|when the allocation will be reassessed, released, or extended|

The organisation should publish the allocation outcome at a level appropriate to the sensitivity of the information. It should show which requests were approved, reduced, deferred, or declined and the priority basis for each decision. Transparency does not require disclosure of salaries, personal circumstances, commercially sensitive information, or confidential strategy.

Sofia asks the transformation programme to set out its dependency scenarios using this format. The analysis shows that one analyst is required immediately, a second will not be needed for four months, and contractor funding can cover the reconciliation work. The portfolio board therefore assigns one of Sofia’s analysts for eight weeks, requires the programme to recruit into its approved vacancies, and schedules another resource review before the second phase.

The transformation programme remains a priority, but its resource needs are now differentiated by timing and consequence rather than described as uniformly urgent.

## Practice: clarify a claim about limited resources

Choose a resource statement you have heard recently, such as “There is no budget,” “We cannot spare anyone,” “This is critical,” or “The capacity is already committed.” Rewrite it in a form that makes the constraint and choices explicit:

> For **[period and resource pool]**, **[amount]** is committed to **[named priorities]**. Without **[requested amount]**, **[specific consequence]** will occur by **[date]**. An alternative is to **[alternative]**, which would create **[trade-off]**. **[role]** has authority to choose, and the allocation will be reviewed on **[date]**.

Complete the parts you know and turn the remaining blanks into questions. The purpose is to convert a general claim of scarcity into a specific resource decision that can be examined.

Resources determine which organisational commitments can actually be delivered. The second half of the book turns to what happens after work produces results, beginning with how credit and visibility are allocated.

[^1]: D. J. Hickson, C. R. Hinings, C. A. Lee, R. E. Schneck, and J. M. Pennings, “A Strategic Contingencies’ Theory of Intraorganizational Power,” *Administrative Science Quarterly* 16, no. 2 (1971): 216–229, [https://doi.org/10.2307/2391831](https://doi.org/10.2307/2391831); Irit Cohen and Ran Lachman, “The Generality of the Strategic Contingencies Approach to Sub-unit Power,” *Organization Studies* 9, no. 3 (1988): 371–391, [https://doi.org/10.1177/017084068800900305](https://doi.org/10.1177/017084068800900305). These works offer theories and tests of structural sources of power, not a checklist for judging individual intent.

[^2]: World Health Organization, *WHO Guidelines on Mental Health at Work* (2022), [https://www.who.int/publications/i/item/9789240053052](https://www.who.int/publications/i/item/9789240053052); World Health Organization and International Labour Organization, *Mental Health at Work: Policy Brief* (2022), [https://www.who.int/publications/i/item/9789240057944](https://www.who.int/publications/i/item/9789240057944).

[^3]: Barry M. Staw, “Knee-Deep in the Big Muddy: A Study of Escalating Commitment to a Chosen Course of Action,” *Organizational Behavior and Human Performance* 16, no. 1 (1976): 27–44, [https://doi.org/10.1016/0030-5073(76)90005-2](https://doi.org/10.1016/0030-5073(76)90005-2); Dustin J. Sleesman, Donald E. Conlon, Gerry McNamara, and Jonathan E. Miles, “Cleaning Up the Big Muddy: A Meta-Analytic Review of the Determinants of Escalation of Commitment,” *Academy of Management Journal* 55, no. 3 (2012): 541–562, [https://doi.org/10.5465/amj.2010.0696](https://doi.org/10.5465/amj.2010.0696).
