import Deck from '../../components/Deck'
import HeroSlide from './slides/HeroSlide'
import ProblemSlide from './slides/ProblemSlide'
import WhatWeDoSlide from './slides/WhatWeDoSlide'
import RoutingSlide from './slides/RoutingSlide'
import GPReferralSlide from './slides/GPReferralSlide'
import AppointmentReminderSlide from './slides/AppointmentReminderSlide'
import PatientJourneySlide from './slides/PatientJourneySlide'
import ProofSlide from './slides/ProofSlide'
import ConsultingPlaySlide from './slides/ConsultingPlaySlide'
import PhasedRolloutSlide from './slides/PhasedRolloutSlide'
import WhatsIncludedSlide from './slides/WhatsIncludedSlide'
import CloseSlide from './slides/CloseSlide'
import VideoSlide1 from './slides/VideoSlide1'
import VideoSlide2 from './slides/VideoSlide2'
import VideoSlide3 from './slides/VideoSlide3'

export default function CervinoDeck() {
  return (
    <Deck>
      <HeroSlide />
      <ProblemSlide />
      <WhatWeDoSlide />
      <RoutingSlide />
      <GPReferralSlide />
      <AppointmentReminderSlide />
      <PatientJourneySlide />
      <ProofSlide />
      <ConsultingPlaySlide />
      <PhasedRolloutSlide />
      <WhatsIncludedSlide />
      <CloseSlide />
      <VideoSlide1 />
      <VideoSlide2 />
      <VideoSlide3 />
    </Deck>
  )
}
