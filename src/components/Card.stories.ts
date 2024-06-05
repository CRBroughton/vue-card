import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: 'https://placehold.co/400x250',
    alt: 'The front of the Card',
    width: '400',
    height: '250',
    transformTiming: 0.15,
    perspective: 1000,
    rotation: 25,
    radius: 14,
  },
}

export const VerticalCard: Story = {
  args: {
    src: 'https://placehold.co/250x400',
    alt: 'The front of the Card',
    width: '250',
    height: '400',
    transformTiming: 0.15,
    perspective: 1000,
    rotation: 25,
    radius: 14,
  },
}

export const LargeCard: Story = {
  args: {
    src: 'https://placehold.co/900x500',
    alt: 'The front of the Card',
    width: '900',
    height: '500',
    transformTiming: 0.15,
    perspective: 1000,
    rotation: 25,
    radius: 14,
  },
}

