import { suiteContact } from '@/content/choix-projet'

export default function SuiteContact({ headingLevel = 'h3', mobileDisclosure = false }: { headingLevel?: 'h2' | 'h3'; mobileDisclosure?: boolean }) {
  const Heading = headingLevel
  const StepHeading = headingLevel === 'h2' ? 'h3' : 'h4'
  const steps = () => (
    <ul>
      {suiteContact.map((step) => (
        <li key={step.titre}>
          <div>
            <StepHeading>{step.titre}</StepHeading>
            <p>{step.texte}</p>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <div className={`contact-next-steps${mobileDisclosure ? ' contact-next-steps-desktop' : ''}`}>
        <Heading className="contact-next-title">Que se passe-t-il ensuite ?</Heading>
        {steps()}
      </div>
      {mobileDisclosure && (
        <details className="contact-next-steps-mobile">
          <summary>Que se passe-t-il ensuite ? <span aria-hidden="true">⌄</span></summary>
          {steps()}
        </details>
      )}
    </>
  )
}
