import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import landingStyles from './index.module.css';
import styles from './describe-test-respond.module.css';

const steps = [
  {
    number: '01',
    title: 'Describe',
    text: 'Record the event, the applicable expectation, and the practical consequence before judging personalities.',
  },
  {
    number: '02',
    title: 'Test',
    text: 'Choose a fair comparison, check ordinary explanations, and separate facts from assumptions.',
  },
  {
    number: '03',
    title: 'Respond',
    text: 'Identify the smallest useful correction, then make a specific request or choose an appropriate review route.',
  },
];

const outcomes = [
  {
    number: '01',
    title: 'A neutral account',
    text: 'Describe the observable sequence and the process in question without trying to read anyone’s mind.',
  },
  {
    number: '02',
    title: 'The relevant expectation',
    text: 'Name the rule, agreed process, commitment, or established practice that should guide the event.',
  },
  {
    number: '03',
    title: 'A tested interpretation',
    text: 'Make what is known, assumed, and still uncertain visible before drawing a conclusion.',
  },
  {
    number: '04',
    title: 'A proportionate next step',
    text: 'Turn the analysis into a clear request, an answer to confirm, and a review route if needed.',
  },
];

export default function DescribeTestRespond() {
  const pdfUrl = useBaseUrl('/files/describe-test-respond-worksheet.pdf');
  const previewUrl = useBaseUrl('/img/describe-test-respond-preview.png');

  return (
    <Layout
      title="Describe. Test. Respond."
      description="A one-page process-first worksheet for preparing a workplace conversation, decision, or review."
    >
      <main className={`${landingStyles.page} ${styles.worksheetPage}`}>
        <section className={landingStyles.hero} aria-labelledby="worksheet-title">
          <div
            className={`container ${landingStyles.heroGrid} ${styles.heroGrid}`}
          >
            <div className={landingStyles.heroCopy}>
              <p className={landingStyles.eyebrow}>
                A one-page process-first worksheet
              </p>
              <Heading
                as="h1"
                id="worksheet-title"
                className={`${landingStyles.title} ${styles.title}`}
              >
                Describe. <em>Test.</em> Respond.
              </Heading>
              <p className={landingStyles.subtitle}>
                A practical guide to a constructive conversation
              </p>
              <p className={landingStyles.lede}>
                Prepare for a workplace conversation or review by recording
                facts, testing assumptions, and choosing a proportionate next
                step.
              </p>
              <div className={landingStyles.actions}>
                <a
                  className={landingStyles.primaryAction}
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby="worksheet-details"
                >
                  Get the worksheet (PDF) <span aria-hidden="true">↗</span>
                </a>
                <Link
                  className={landingStyles.secondaryAction}
                  to="/introduction"
                >
                  Read the introduction
                </Link>
              </div>
              <dl
                className={landingStyles.bookFacts}
                id="worksheet-details"
                aria-label="Worksheet details"
              >
                <div>
                  <dt>1</dt>
                  <dd>page</dd>
                </div>
                <div>
                  <dt>A4</dt>
                  <dd>format</dd>
                </div>
                <div>
                  <dt>PDF</dt>
                  <dd>print-ready</dd>
                </div>
              </dl>
            </div>

            <figure
              className={`${landingStyles.mapFigure} ${styles.previewFigure}`}
            >
              <figcaption className={landingStyles.figureHeader}>
                <span>Printable worksheet</span>
                <strong>One page. One event.</strong>
              </figcaption>
              <a
                className={styles.previewLink}
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Describe, Test, Respond worksheet PDF"
              >
                <img
                  className={styles.previewImage}
                  src={previewUrl}
                  width="480"
                  height="679"
                  alt="Preview of the Describe, Test, Respond one-page worksheet"
                />
              </a>
            </figure>
          </div>
        </section>

        <section
          className={landingStyles.orientation}
          aria-labelledby="method-title"
        >
          <div className={`container ${landingStyles.orientationGrid}`}>
            <div className={landingStyles.sectionAside}>
              <p className={landingStyles.sectionLabel}>Three steps</p>
              <p className={landingStyles.marginNote}>
                Describe the process before deciding what the event means.
              </p>
            </div>
            <div>
              <Heading as="h2" id="method-title">
                Turn an uncertain event into a clear conversation.
              </Heading>
              <p className={landingStyles.sectionLede}>
                The worksheet applies the book’s process-first method to one
                event at a time. Complete it in order, then use the final prompt
                to prepare what you will ask.
              </p>
              <ol className={landingStyles.principleList}>
                {steps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <Heading as="h3">{step.title}</Heading>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className={landingStyles.lensSection}
          aria-labelledby="outcomes-title"
        >
          <div className="container">
            <div className={landingStyles.sectionHeading}>
              <div>
                <p className={landingStyles.sectionLabel}>
                  What the worksheet produces
                </p>
                <Heading as="h2" id="outcomes-title">
                  Turn an uncertain event into a focused request.
                </Heading>
              </div>
              <p>
                The aim is not to prove a motive. It is to make the process,
                uncertainty, consequence, and requested correction clear enough
                to discuss.
              </p>
            </div>
            <ol className={`${landingStyles.lensList} ${styles.outcomeList}`}>
              {outcomes.map((outcome) => (
                <li key={outcome.number}>
                  <span className={landingStyles.lensNumber}>
                    {outcome.number}
                  </span>
                  <div>
                    <Heading as="h3">{outcome.title}</Heading>
                    <p>{outcome.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={landingStyles.closingSection}
          aria-labelledby="safeguards-title"
        >
          <div className={`container ${landingStyles.closingPanel}`}>
            <div>
              <p className={landingStyles.sectionLabel}>Use with care</p>
              <Heading as="h2" id="safeguards-title">
                A starting point for inquiry, not a verdict.
              </Heading>
            </div>
            <div className={landingStyles.closingCopy}>
              <p>
                A pattern or comparison is not proof of misconduct. Fair
                treatment can produce different outcomes for relevant reasons.
                Keep only necessary, authorised records, and seek prompt
                qualified help for urgent or serious concerns.
              </p>
              <div className={landingStyles.closingActions}>
                <a
                  className={landingStyles.closingPrimaryAction}
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get the worksheet (PDF) <span aria-hidden="true">↗</span>
                </a>
                <Link
                  className={landingStyles.closingTextAction}
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
