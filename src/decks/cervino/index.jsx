import Deck from '../../components/Deck'
import HeroSlide from './slides/HeroSlide'
import ProblemSlide from './slides/ProblemSlide'
import HowItWorksSlide from './slides/HowItWorksSlide'
import WhatWeDoSlide from './slides/WhatWeDoSlide'
import BuiltForHealthcareSlide from './slides/BuiltForHealthcareSlide'
import OneLineSlide from './slides/OneLineSlide'
import OutboundSlide from './slides/OutboundSlide'
import OutcomesSlide from './slides/OutcomesSlide'
import ReviewAutomationsSlide from './slides/ReviewAutomationsSlide'
import PhasedRolloutSlide from './slides/PhasedRolloutSlide'
import WhatsIncludedSlide from './slides/WhatsIncludedSlide'
import ComplianceSlide from './slides/ComplianceSlide'
import CloseSlide from './slides/CloseSlide'

export default function CervinoDeck() {
  return (
    <Deck>
      <HeroSlide />
      <ProblemSlide />
      <HowItWorksSlide />
      <WhatWeDoSlide />
      <BuiltForHealthcareSlide />
      <OneLineSlide />
      <OutboundSlide />
      <OutcomesSlide />
      <ReviewAutomationsSlide />
      <PhasedRolloutSlide />
      <WhatsIncludedSlide />
      <ComplianceSlide />
      <CloseSlide />
    </Deck>
  )
}
