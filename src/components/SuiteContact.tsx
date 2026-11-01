import { suiteContact } from '@/content/choix-projet'

export default function SuiteContact() {
  return <div className="contact-next-steps"><p className="eyebrow">Après votre message</p><ol>{suiteContact.map((step,index) => <li key={step.titre}><span aria-hidden="true">0{index+1}</span><div><h3>{step.titre}</h3><p>{step.texte}</p></div></li>)}</ol></div>
}
