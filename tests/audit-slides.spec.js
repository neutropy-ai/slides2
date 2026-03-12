import { test, expect } from '@playwright/test'

const SETTLE_MS = 800

// Helper: scope assertions to the active slide only
const active = (page) => page.locator('[data-active="true"]')

const slides = [
  {
    name: 'HeroSlide',
    index: 0,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('AI communication')).toBeVisible()
      await expect(slide.getByText('healthcare.')).toBeVisible()
      await expect(slide.getByText('Cervino Medical')).toBeVisible()
    },
  },
  {
    name: 'ProblemSlide',
    index: 1,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('73%')).toBeVisible()
      await expect(slide.getByText('36')).toBeVisible()
      await expect(slide.getByText('15-30%')).toBeVisible()
      await expect(slide.getByText('The Communication Gap')).toBeVisible()
    },
  },
  {
    name: 'WhatWeDoSlide',
    index: 2,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('What Neutropy Does')).toBeVisible()
      await expect(slide.getByRole('heading', { name: 'AI Receptionist' })).toBeVisible()
      await expect(slide.getByRole('heading', { name: 'WhatsApp Automation' })).toBeVisible()
      await expect(slide.getByRole('heading', { name: 'Outbound Voice Agents' })).toBeVisible()
      await expect(slide.getByRole('heading', { name: 'Intelligent Routing' })).toBeVisible()
    },
  },
  {
    name: 'RoutingSlide',
    index: 3,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('The patient describes symptoms.')).toBeVisible()
      await expect(slide.getByText('Routed to Neurology')).toBeVisible()
      await expect(slide.getByText('Good morning, Cervino Medical')).toBeVisible()
    },
  },
  {
    name: 'GPReferralSlide',
    index: 4,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Your AI calls the GP.')).toBeVisible()
      await expect(slide.getByText('Referral Complete')).toBeVisible()
      await expect(slide.getByText('Calling: Dr. Murphy')).toBeVisible()
    },
  },
  {
    name: 'AppointmentReminderSlide',
    index: 5,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Your AI calls patients.')).toBeVisible()
      await expect(slide.getByText('Before they forget.')).toBeVisible()
      await expect(slide.getByText('Rescheduled')).toBeVisible()
      await expect(slide.getByText('Calling: Michael Brennan')).toBeVisible()
    },
  },
  {
    name: 'PatientJourneySlide',
    index: 6,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Patient Journey')).toBeVisible()
      await expect(slide.getByText('Every touchpoint.')).toBeVisible()
      await expect(slide.getByText('Gastroenterology').first()).toBeVisible()
      await expect(slide.getByText('Hi Michael, reminder')).toBeVisible()
    },
  },
  {
    name: 'ProofSlide',
    index: 7,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Proof of Concept')).toBeVisible()
      await expect(slide.getByText('Your Clinic Today')).toBeVisible()
      await expect(slide.getByText('With Neutropy')).toBeVisible()
    },
  },
  {
    name: 'ConsultingPlaySlide',
    index: 8,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('The Consulting Play')).toBeVisible()
      await expect(slide.getByText('Client Practice')).toBeVisible()
      await expect(slide.getByText('Cervino Audit')).toBeVisible()
      await expect(slide.getByText('Neutropy Deploys')).toBeVisible()
    },
  },
  {
    name: 'PhasedRolloutSlide',
    index: 9,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Phased Rollout')).toBeVisible()
      await expect(slide.getByText('GO LIVE')).toBeVisible()
      await expect(slide.getByText('LAYER ON')).toBeVisible()
      await expect(slide.getByText('SCALE', { exact: true })).toBeVisible()
    },
  },
  {
    name: 'WhatsIncludedSlide',
    index: 10,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText("What's Included")).toBeVisible()
      await expect(slide.getByText('One-Time Setup')).toBeVisible()
      await expect(slide.getByText('Ongoing Monthly')).toBeVisible()
    },
  },
  {
    name: 'CloseSlide',
    index: 11,
    checks: async (page) => {
      const slide = active(page)
      await expect(slide.getByText('Next step is')).toBeVisible()
      await expect(slide.getByText('simple.')).toBeVisible()
      await expect(slide.getByText('luke@neutropy.ai')).toBeVisible()
    },
  },
]

test.describe('Cervino Deck — Slide Audit', () => {
  let consoleErrors = []

  test.beforeEach(async ({ page }) => {
    consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForTimeout(SETTLE_MS)
  })

  for (const slide of slides) {
    test(`Slide ${slide.index + 1}: ${slide.name}`, async ({ page }) => {
      // Navigate to the target slide
      for (let i = 0; i < slide.index; i++) {
        await page.keyboard.press('ArrowRight')
        await page.waitForTimeout(100)
      }
      await page.waitForTimeout(SETTLE_MS)

      // Screenshot
      await page.screenshot({
        path: `tests/screenshots/${String(slide.index + 1).padStart(2, '0')}-${slide.name}.png`,
        fullPage: false,
      })

      // Content assertions
      await slide.checks(page)

      // Console error check
      const realErrors = consoleErrors.filter(
        (e) => !e.includes('[vite]') && !e.includes('React DevTools')
      )
      expect(realErrors).toEqual([])
    })
  }
})
