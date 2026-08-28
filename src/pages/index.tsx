import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const principles = [
  {
    number: '01',
    title: 'Observe',
    text: 'Put the event into concrete terms before deciding what it means.',
  },
  {
    number: '02',
    title: 'Compare',
    text: 'Test the relevant rule, similar cases, and ordinary explanations.',
  },
  {
    number: '03',
    title: 'Improve',
    text: 'Find the smallest proportionate correction that could make the process fairer.',
  },
];

const lenses = [
  {
    number: '01',
    title: 'Describe the process',
    text: 'Name the decision, opportunity, meeting, record, resource, or assignment precisely.',
  },
  {
    number: '02',
    title: 'Find the expectation',
    text: 'Identify the written rule, established practice, or clearly communicated arrangement.',
  },
  {
    number: '03',
    title: 'Choose a fair comparison',
    text: 'Compare like roles, risks, deadlines, decisions, or projects before drawing conclusions.',
  },
  {
    number: '04',
    title: 'Test ordinary explanations',
    text: 'Consider constraints, mistakes, incomplete information, and legitimate exceptions.',
  },
  {
    number: '05',
    title: 'Assess the consequence',
    text: 'Ask what changed: the decision, the work, the credit, the risk, or the chance to respond.',
  },
  {
    number: '06',
    title: 'Look for correction',
    text: 'Healthy systems make errors visible, discussable, and proportionately repairable.',
  },
];

const entryPoints = [
  {
    number: '01',
    prompt: 'Who gets access?',
    title: 'Access and Opportunity',
    href: '/access-and-opportunity',
    text: 'Examine forums, gatekeepers, representation, sponsorship, and the routes through which opportunities travel.',
  },
  {
    number: '05',
    prompt: 'How was the decision made?',
    title: 'Decision Processes',
    href: '/decision-processes',
    text: 'Trace authority, criteria, consultation, records, delegation, review, and appeal.',
  },
  {
    number: '07',
    prompt: 'Whose work gets recognised?',
    title: 'Credit and Visibility',
    href: '/credit-and-visibility',
    text: 'Connect contribution with recognition, authorship, presentation, and enabling work.',
  },
  {
    number: '10',
    prompt: 'Can people challenge the process?',
    title: 'Participation and Challenge',
    href: '/participation-and-challenge',
    text: 'Ask whether affected people can contribute, disagree, seek review, and receive meaningful closure.',
  },
];

const audiences = [
  {
    number: '01',
    title: 'Raise an issue',
    text: 'Turn a difficult experience into a specific process question that another person can answer.',
  },
  {
    number: '02',
    title: 'Run the process',
    text: 'Make meetings, decisions, recognition, accountability, and repair easier to trust.',
  },
  {
    number: '03',
    title: 'Redesign the system',
    text: 'Build routes for evidence, participation, explanation, review, and proportionate correction.',
  },
];

export default function Home() {
  return (
    <Layout
      title="The Work Behind the Work"
      description="A practical, process-first guide to understanding how influence moves through workplace decisions, opportunities, information, recognition, and voice."
    >
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="landing-title">
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>A practical field guide to influence at work</p>
              <Heading as="h1" id="landing-title" className={styles.title}>
                Who Gets <em>Heard?</em>
              </Heading>
              <p className={styles.subtitle}>The Work Behind the Work</p>
              <p className={styles.lede}>
                See how information, opportunity, decisions, and recognition
                actually move through an organisation, and learn to question the
                process without assuming the worst.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/introduction">
                  Start reading <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className={styles.secondaryAction}
                  to="/#start-with-a-problem"
                  data-noBrokenLinkCheck
                >
                  Find your starting point
                </Link>
              </div>
              <dl className={styles.bookFacts} aria-label="Book details">
                <div>
                  <dt>14</dt>
                  <dd>sections</dd>
                </div>
                <div>
                  <dt>6</dt>
                  <dd>core questions</dd>
                </div>
                <div>
                  <dt>CC</dt>
                  <dd>BY 4.0</dd>
                </div>
              </dl>
            </div>

            <figure className={styles.mapFigure}>
              <figcaption className={styles.figureHeader}>
                <strong>Three maps. One workplace.</strong>
              </figcaption>
              <div className={styles.mapPlot}>
                <ol className={styles.mapList}>
                  <li className={`${styles.mapCard} ${styles.formalMap}`}>
                    <span>01</span>
                    <div>
                      <strong>Formal</strong>
                      <small>roles · rules · authority</small>
                    </div>
                  </li>
                  <li className={`${styles.mapCard} ${styles.relationshipMap}`}>
                    <span>02</span>
                    <div>
                      <strong>Relationship</strong>
                      <small>trust · history · access</small>
                    </div>
                  </li>
                  <li className={`${styles.mapCard} ${styles.processMap}`}>
                    <span>03</span>
                    <div>
                      <strong>Process</strong>
                      <small>how the work actually travels</small>
                    </div>
                  </li>
                </ol>
              </div>
              <div className={styles.figureQuestions}>
                <span>Who knew?</span>
                <span>Who decided?</span>
                <span>What changed?</span>
              </div>
            </figure>
          </div>
        </section>

        <section className={styles.orientation} aria-labelledby="orientation-title">
          <div className={`container ${styles.orientationGrid}`}>
            <div className={styles.sectionAside}>
              <p className={styles.sectionLabel}>A clearer place to stand</p>
              <p className={styles.marginNote}>Read the process before reading the person.</p>
            </div>
            <div>
              <Heading as="h2" id="orientation-title">
                See influence clearly without becoming cynical.
              </Heading>
              <p className={styles.sectionLede}>
                Every organisation allocates attention, information, authority,
                opportunity, money, and recognition. This book helps you examine
                what happens between the policy and the outcome with enough care to
                improve it.
              </p>
              <ol className={styles.principleList}>
                {principles.map((principle) => (
                  <li key={principle.number}>
                    <span>{principle.number}</span>
                    <Heading as="h3">{principle.title}</Heading>
                    <p>{principle.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.lensSection} aria-labelledby="lens-title">
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionLabel}>The six-part lens</p>
                <Heading as="h2" id="lens-title">
                  Start with the process, not the person.
                </Heading>
              </div>
              <p>
                Six questions slow down interpretation, test what else could
                explain the event, and reveal the smallest useful improvement.
              </p>
            </div>
            <ol className={styles.lensList}>
              {lenses.map((lens) => (
                <li key={lens.number}>
                  <span className={styles.lensNumber}>{lens.number}</span>
                  <div>
                    <Heading as="h3">{lens.title}</Heading>
                    <p>{lens.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={styles.entrySection}
          id="start-with-a-problem"
          aria-labelledby="entry-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionLabel}>Choose an entry point</p>
                <Heading as="h2" id="entry-title">
                  Start with the question in front of you.
                </Heading>
              </div>
              <p>
                Read from the beginning, or go directly to the part of the process
                that feels unclear.
              </p>
            </div>
            <ul className={styles.entryGrid}>
              {entryPoints.map((entryPoint) => (
                <li key={entryPoint.number}>
                  <Link className={styles.entryCard} to={entryPoint.href}>
                    <div className={styles.entryMeta}>
                      <span>Chapter {entryPoint.number}</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <Heading as="h3">{entryPoint.prompt}</Heading>
                    <p className={styles.entryTitle}>{entryPoint.title}</p>
                    <p>{entryPoint.text}</p>
                    <span className={styles.entryAction}>
                      Open chapter <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.contentsNote}>
              <p>
                <strong>Prefer the full reading path?</strong> All fourteen sections
                remain available through <em>Contents</em> in the site navigation.
              </p>
              <Link className={styles.textAction} to="/introduction">
                Begin with the introduction <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.audienceSection} aria-labelledby="audience-title">
          <div className={`container ${styles.audienceGrid}`}>
            <div>
              <p className={styles.sectionLabel}>For every workplace role</p>
              <Heading as="h2" id="audience-title">
                Make consequential work easier to see and discuss.
              </Heading>
              <p className={styles.sectionLede}>
                Use the framework to prepare a difficult conversation, improve a
                recurring decision, examine a pattern without overstating the
                evidence, or design an influence system people can trust.
              </p>
            </div>
            <ol className={styles.audienceList}>
              {audiences.map((audience) => (
                <li key={audience.number}>
                  <span>{audience.number}</span>
                  <div>
                    <Heading as="h3">{audience.title}</Heading>
                    <p>{audience.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.closingSection} aria-labelledby="closing-title">
          <div className={`container ${styles.closingPanel}`}>
            <div>
              <p className={styles.sectionLabel}>Use with care</p>
              <Heading as="h2" id="closing-title">
                Patterns are starting points for inquiry, not verdicts.
              </Heading>
            </div>
            <div className={styles.closingCopy}>
              <p>
                The framework makes consequential work visible, discussable, and
                accountable. It is not proof of motive, misconduct, or legal
                liability, and it is not a substitute for urgent qualified support.
              </p>
              <div className={styles.closingActions}>
                <Link className={styles.closingPrimaryAction} to="/introduction">
                  Start with the introduction <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className={styles.closingTextAction}
                  to="/introduction#know-when-this-book-is-not-enough"
                >
                  Read the safeguards
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
