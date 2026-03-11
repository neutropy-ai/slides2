import Deck from '../../components/Deck'
import HeroSlide from './slides/HeroSlide'
import ProblemSlide from './slides/ProblemSlide'
import WhatWeDoSlide from './slides/WhatWeDoSlide'
import RoutingSlide from './slides/RoutingSlide'
import CloseSlide from './slides/CloseSlide'

// TODO: Add remaining slides (GP Referral, Patient Journey, Proof of Concept,
// Consulting Play, Phased Rollout, What's Included) following the same pattern.
// Each slide is a standalone component using Slide, glass components, and anim primitives.

export default function CervinoDeck() {
  return (
    <Deck>
      <HeroSlide />
      <ProblemSlide />
      <WhatWeDoSlide />
      <RoutingSlide />
      {/* <GPReferralSlide /> */}
      {/* <PatientJourneySlide /> */}
      {/* <ProofSlide /> */}
      {/* <ConsultingPlaySlide /> */}
      {/* <PhasedRolloutSlide /> */}
      {/* <WhatsIncludedSlide /> */}
      <CloseSlide />
    </Deck>
  )
}
