import Deck from '../../components/Deck'
import HeroSlide from './slides/HeroSlide'
import ProblemSlide from './slides/ProblemSlide'
import WhatWeDoSlide from './slides/WhatWeDoSlide'
import BuiltForHealthcareSlide from './slides/BuiltForHealthcareSlide'
import OutcomesSlide from './slides/OutcomesSlide'
import RoutingSlide from './slides/RoutingSlide'
import GPReferralSlide from './slides/GPReferralSlide'
import AppointmentReminderSlide from './slides/AppointmentReminderSlide'
import PatientJourneySlide from './slides/PatientJourneySlide'
import ReviewAutomationsSlide from './slides/ReviewAutomationsSlide'
import BetterCareSlide from './slides/BetterCareSlide'
import ProofSlide from './slides/ProofSlide'
import ConsultingPlaySlide from './slides/ConsultingPlaySlide'
import PhasedRolloutSlide from './slides/PhasedRolloutSlide'
import WhatsIncludedSlide from './slides/WhatsIncludedSlide'
import CloseSlide from './slides/CloseSlide'

export default function CervinoDeck() {
  return (
    <Deck>
      <HeroSlide />
      <ProblemSlide />
      <WhatWeDoSlide />
      <BuiltForHealthcareSlide />
      <OutcomesSlide />
      <RoutingSlide />
      <GPReferralSlide />
      <AppointmentReminderSlide />
      <PatientJourneySlide />
      <ReviewAutomationsSlide />
      <BetterCareSlide />
      <ProofSlide />
      <ConsultingPlaySlide />
      <PhasedRolloutSlide />
      <WhatsIncludedSlide />
      <CloseSlide />
    </Deck>
  )
}
