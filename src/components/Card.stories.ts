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
    src: 'https://i.etsystatic.com/10158652/r/il/e9267d/1320400492/il_1588xN.1320400492_d0mh.jpg',
    alt: 'The front of the Card',
    width: '450',
    height: '274',
    transformTiming: 0.15,
    perspective: 1000,
    rotation: 25,
  },
}
