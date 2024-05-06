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
